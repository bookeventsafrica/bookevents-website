import BlogCard from "@/components/blog";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postsQuery } from "../../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { Key } from "react";

async function Blog() {
    const posts = await sanityFetch<SanityDocument>({ query: postsQuery });
    return <>
        <Navbar />

        <section className="px-[1rem] lg:px-[100px] bg-[#F1F2F6] py-[20px] lg:py-[56px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 lg:px-5 gap-[29px]">
                {posts.map((post: any, i: Key | null | undefined) => {

                    return <BlogCard key={i} post={post} />
                })}
            </div>
        </section>
        <Footer />
    </>
}

export default Blog;