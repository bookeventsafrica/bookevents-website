
import { SanityDocument } from "@sanity/client";
import { client } from "../../../../../sanity/lib/client";
import { postPathsQuery, postQuery } from "../../../../../sanity/lib/queries";
import { sanityFetch } from "../../../../../sanity/lib/fetch";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PostDetail from "@/components/blog/postDetails";


export const revalidate = 60;

export async function generateStaticParams() {
    const posts = await client.fetch(postPathsQuery);
    return posts
}


async function BlogPage({ params }: { params: any }) {
    const post = await sanityFetch<SanityDocument>({ query: postQuery, params })
    return <>
        <Navbar />
        <hr className="text-[#f3f3f3]" />
        <main className="py-4 px-2 lg:px-0">
        <PostDetail post={post} />
        </main>

        <hr className="text-[#f3f3f3]"/>

        <Footer />
    </>
}




export default BlogPage;