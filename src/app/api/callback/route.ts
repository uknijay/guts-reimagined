import { randomBytes, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { callbackUrl, cmsError, cmsOrigin, stateCookie } from "@/lib/cms-auth";

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  const clientSecret = process.env.GITHUB_OAUTH_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return cmsError("The content editor is awaiting GitHub OAuth setup.", 503);
  }

  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const savedState = request.cookies.get(stateCookie)?.value;
  if (!code || !state || !savedState || state.length !== savedState.length || !timingSafeEqual(Buffer.from(state), Buffer.from(savedState))) {
    return cmsError("This sign-in attempt expired or could not be verified. Close this window and try again.", 400);
  }

  let token: string | undefined;
  try {
    const exchange = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: callbackUrl }),
      cache: "no-store",
    });
    if (!exchange.ok) return cmsError("GitHub sign-in could not be completed. Please try again.", 502);
    const result = await exchange.json() as { access_token?: string };
    token = result.access_token;
  } catch {
    return cmsError("GitHub sign-in is temporarily unavailable. Please try again.", 502);
  }
  if (!token) return cmsError("GitHub did not grant access to the content editor.", 403);

  // Decap's GitHub backend expects this popup handshake. Only the production CMS origin receives the token.
  const nonce = randomBytes(16).toString("base64");
  const payload = JSON.stringify({ token }).replace(/</g, "\\u003c");
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Signing in to GUTS</title></head><body><p>Finishing sign-in…</p><script nonce="${nonce}">
    const targetOrigin = ${JSON.stringify(cmsOrigin)};
    const result = 'authorization:github:success:' + ${JSON.stringify(payload)};
    if (window.opener) {
      window.addEventListener('message', event => {
        if (event.origin === targetOrigin && event.source === window.opener) {
          window.opener.postMessage(result, targetOrigin);
        }
      });
      window.opener.postMessage('authorizing:github', targetOrigin);
    } else {
      document.querySelector('p').textContent = 'The editor window was closed. Please start sign-in again.';
    }
  </script></body></html>`;
  const response = new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      "Referrer-Policy": "no-referrer",
      "Content-Security-Policy": `default-src 'none'; script-src 'nonce-${nonce}'; base-uri 'none'; frame-ancestors 'none'`,
    },
  });
  response.cookies.set(stateCookie, "", { path: "/api", maxAge: 0, httpOnly: true, secure: true, sameSite: "lax" });
  return response;
}
