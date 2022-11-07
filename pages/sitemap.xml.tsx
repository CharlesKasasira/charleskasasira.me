//pages/sitemap.xml.js
// const EXTERNAL_DATA_URL = 'https://jsonplaceholder.typicode.com/posts';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://charleskasasira.com</loc>
       <lastmod>2022-11-07</lastmod>
     </url>
     <url>
       <loc>https://charleskasasira.com/articles</loc>
       <lastmod>2022-11-07</lastmod>
     </url>
     <url>
       <loc>https://charleskasasira.com/youtube</loc>
       <lastmod>2022-11-07</lastmod>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  // const request = await fetch(EXTERNAL_DATA_URL);
  // const posts = await request.json();

  // We generate the XML sitemap with the posts data
  // const sitemap = generateSiteMap(posts);
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
