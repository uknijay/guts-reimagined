import { randomBytes } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { callbackUrl, cmsError, stateCookie } from "@/lib/cms-auth";

export async function GET(request: NextRequest) {
  if (request.nextUrl.searchParams.get("provider") !== "github") {
    return cmsError("Unsupported content editor provider.", 400);
  }

  const clientId = process.env.GITHUB_OAUTH_CLIENT_ID;
  if (!clientId || !process.env.GITHUB_OAUTH_CLIENT_SECRET) {
    return cmsError("The content editor is awaiting GitHub OAuth setup. Ask the site owner to finish the steps in README.md.", 503);
  }

  const state = randomBytes(32).toString("hex");
  const authorization = new URL("https://github.com/login/oauth/authorize");
  authorization.searchParams.set("client_id", clientId);
  authorization.searchParams.set("redirect_uri", callbackUrl);
  authorization.searchParams.set("scope", "public_repo");
  authorization.searchParams.set("state", state);

  const response = NextResponse.redirect(authorization, 302);
  response.headers.set("Cache-Control", "no-store");
  response.cookies.set(stateCookie, state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/api",
    maxAge: 600,
  });
  return response;
}
