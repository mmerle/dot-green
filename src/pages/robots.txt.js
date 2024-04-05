export async function GET({ params, request }) {
  const domainSegments = process.env.WEBSITE_URL.split('.');
  const isSubdomain = domainSegments.length > 2;

  if (isSubdomain) {
    return new Response(`
      User-Agent: *
      Disallow: /`);
  }

  return new Response(`
    User-Agent: *
    Allow: /
    Disallow: /private/

    Sitemap: ${process.env.WEBSITE_URL}/sitemap.xml
    Sitemap: ${process.env.WEBSITE_URL}`);
}
