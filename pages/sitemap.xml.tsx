function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://charleskasasira.com</loc>
       <lastmod>2022-11-17</lastmod>
       <changefreq>always</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>https://charleskasasira.com/projects</loc>
       <lastmod>2022-11-17</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>https://charleskasasira.com/articles</loc>
       <lastmod>2022-11-17</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>https://charleskasasira.com/youtube</loc>
       <lastmod>2022-11-17</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.3</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
