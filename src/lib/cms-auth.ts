export const cmsOrigin = (process.env.CMS_ORIGIN ?? "https://guts-reimagined.vercel.app").replace(/\/$/, "");
export const callbackUrl = `${cmsOrigin}/api/callback`;
export const stateCookie = "guts_cms_oauth_state";

export function cmsError(message: string, status: number) {
  return new Response(message, {
    status,
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
  });
}
