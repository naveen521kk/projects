import type { APIRoute } from "astro"

const robotsTxt = `
Sitemap: ${new URL("sitemap-index.xml", import.meta.env.SITE).href}

User-agent: *
Disallow:

`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  })
}
