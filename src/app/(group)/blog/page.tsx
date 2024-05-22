import BlogCard from "@/components/blog";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { sanityFetch } from "../../../../sanity/lib/fetch";
import { postsQuery } from "../../../../sanity/lib/queries";
import { SanityDocument } from "next-sanity";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog | Book Events Africa',
    description: 'Book Event Africa offers essential event management features to help you organize your events seamlessly. Let us review and feature your events on BEA (Book Events Africa)',
    keywords: ['Blog', 'event blog', 'bea blog', 'event ticket', 'event ticketing', 'event ticketing platform', 'book events africa', 'number 1 event booking platform', 'african events', 'ticket sales', 'party', 'event organizers', 'advanced ticketing solutions', 'ticketing solutions', 'event ticketing solutions', 'event planning', 'ticketing industry', 'smooth booking experience', 'smooth ticketing', ' Stress-free event management', 'Hassle-free event planning', 'Customer-focused services', 'Online ticketing']
}


async function Blog() {
    const posts = await sanityFetch<SanityDocument>({ query: postsQuery });
    console.log(posts)
    return <>
        <Navbar />

        <section className="px-[1rem] lg:px-[14rem] bg-[#F1F2F6] py-[20px] lg:py-[56px]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-0 lg:px-5 gap-[29px]">
                {posts.map((post: any, i: number) => {

                    return <BlogCard key={i} post={post} />
                })}
            </div>
        </section>
        <Footer />
    </>
}

export default Blog;