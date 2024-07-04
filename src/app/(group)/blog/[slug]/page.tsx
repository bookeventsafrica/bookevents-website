
import { SanityDocument } from "@sanity/client";
import { client } from "../../../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../sanity/lib/fetch";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PostDetail from "@/components/blog/postDetails";
import { Metadata } from "next";


export const revalidate = 600;

export async function generateStaticParams() {
    const posts = await client.fetch(postPathsQuery);
    return posts
}

export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
    return {
        title: post?.title,
        description: post?.description,

        keywords: [...post?.categories, post?.title, 'book events blog', 'event ticket blog', 'event ticketing article', 'ticketing blog', 'book events', 'africa', 'event ticketing platform', 'event booking', 'organize events', 'ticket sales'],
        openGraph: {
            images: [{ url: post?.imageURL, width: 1200, height: 630 }],
            description: post?.description,
            title: post?.title,
            type: 'article',
            tags: [...post?.categories],
            authors: post?.authorName
        },
        twitter: {
            card: 'summary_large_image',
            site: "@site",
            creator: "@creator",
            images: post?.imageURL
        }
    };
}


async function BlogPage({ params }: { params: any }) {
    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
    return <>
        <Navbar />
        <hr className="text-[#f3f3f3]" />
        <main className="py-4 px-2 lg:px-0">
            <PostDetail post={post} />
        </main>

        <hr className="text-[#f3f3f3]" />

        <Footer />
    </>
}




export default BlogPage;