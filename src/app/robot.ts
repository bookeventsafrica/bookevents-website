export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: "/",
      }
    ],
    sitemap: `https://www.bookevents.africa/sitemap.txt`,
    host: 'https://www.bookevents.africa'
  };
}