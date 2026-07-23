export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://hariomlaxminarayanjewellers.com'
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /account/

Sitemap: ${baseUrl}/sitemap.xml`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
