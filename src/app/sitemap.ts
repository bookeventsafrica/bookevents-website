import { SanityDocument } from "next-sanity";
import { sanityFetch } from "../../sanity/lib/fetch";
import { postsQuery } from "../../sanity/lib/queries";

export default async function sitemap() {
  let URL: string =
    process.env.NODE_ENV === "development"
      ? "https://staging.bookevents.africa"
      : "https://bookevents.africa";
  const blog = await sanityFetch<SanityDocument>({ query: postsQuery });

  const posts = blog.map(({ slug, publishedAt }: any) => ({
    url: `${URL}/blog/${slug.current}`,
    lastModified: publishedAt,
    changeFrequency: "weekly",
    priority: 1,
  }));

  const routes = [
    "",
    "/blog",
    "/about-us",
    "/discovery",
    "/faqs",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 1,
  }));

  return [...routes, ...posts];
}
