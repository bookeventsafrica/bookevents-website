"use client"

import { SanityDocument } from "@sanity/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Text from "./text";
import { urlForImage } from "../../../sanity/lib/image";
import Twitter from '/public/svg/socials/twitter.svg'
import LinkedIn from '/public/svg/socials/linkedin.svg'
import Facebook from '/public/svg/socials/facebook.svg'
import Copy from '/public/svg/clone.svg'
import { usePathname } from "next/navigation";
import { useState } from "react";
import Newsletter from "../newsletter";


const PostDetail = ({ post }: { post: SanityDocument }) => {
    const frontendURL = process.env.NEXT_PUBLIC_ENV === 'development' ? 'https://staging.bookevents.africa' : 'https://www.bookevents.africa';

    const pathname = usePathname();
    const [copied, setCopied] = useState(false);

    let blogLink: string;

    if (typeof window !== 'undefined') {
        blogLink = window.location.href;
    }

    const changeCopiedState = () => {
        setTimeout(() => {
            setCopied(false);
        }, 5000);
    };

    const copyLink = async () => {
        try {
            await navigator.clipboard.writeText(blogLink);
            setCopied(true);
            changeCopiedState();
        } catch (err) {
            setCopied(false);
        }
    };
    return <article className="w-full lg:w-[708px] mx-auto  mb-5 mt-[15px] lg:mt-[30px]">
        {post?.mainImage ? (
            <Image
        
                src={
                    urlForImage(post.mainImage)
                }
                alt={post?.mainImage?.alt}
                width={700}
                height={300}
                className="mx-auto mb-4"
            />
        ) : null}
        <h1 className="text-[32px] lg:text-[42px] font-[700] flex text-[#292D32]">{post.title}</h1>
        <div className="flex flex-row gap-4 items-center my-5">
            <Image
           
                src={
                    urlForImage(post.authorImage)
                }
                alt={post?.authorImage?.alt}
                width={700}
                height={300}
                className="border-[#f3f3f3] border-2 border-solid w-[44px] h-[44px] items-center rounded-full"
            />
            <div>
                <p className="text-[16px] text-[#292D32]">{post?.authorName} </p>
                <p className="text-[16px] text-[#6B6B6B]">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>
            </div>
        </div>
        <hr className="text-[#f3f3f3] mb-8" />

        {post?.body ? <PortableText value={post.body} components={Text} /> : null}

        <div className="my-5 flex gap-2">
            {post.categories.map((category: any) => {
                return <div className="w-fit border-[1px] border-primary-500  text-primary-500 p-2 px-4 rounded-full text-[14px]" key={category._id}>
                    {category.title}
                </div>
            })}

        </div>
        <hr className="text-[#f3f3f3] mb-6" />

        <div className="flex items-center justify-between flex-wrap">
            <h4 className="pb-2 lg:pb-0 text-[#292D32] text-[16px]">Share this post </h4>
            <div className="flex gap-5 flex-wrap">
                <button className="flex border-[1px] border-[#d0d5dd]  p-2 rounded-md cursor-pointer h-[44px] items-center gap-2 justify-center hover:border-primary-500 " onClick={copyLink}>

                    {copied ? (
                        <p className="text-[14px] text-[#98A2B3]"> Copied!</p>
                    ) : (
                        <>
                            <Copy />

                            <p className="text-[14px] text-[#98A2B3]">Copy link</p>
                        </>
                    )}
                </button>
                <a className="flex border-[1px] border-[#d0d5dd]  p-2 rounded-md cursor-pointer h-[44px] items-center justify-center hover:border-primary-500 " href={`https://twitter.com/intent/tweet?text=${post.title}+${frontendURL}${pathname}`} target="_blank">
                    <Twitter className="text-[#98A2B3]" />
                </a>
                <a className="flex border-[1px] border-[#d0d5dd]  p-2 rounded-md cursor-pointer h-[44px] items-center justify-center hover:border-primary-500" href={`https://www.facebook.com/sharer.php?u=${frontendURL}${pathname}`} target="_blank">
                    <Facebook />
                </a>
                <a className="flex border-[1px] border-[#d0d5dd]  p-2 rounded-md cursor-pointer h-[44px] items-center justify-center hover:border-primary-500 " href={`https://www.linkedin.com/shareArticle?mini=true&url=${frontendURL}${pathname}&title=${post.title}`} target="_blank">
                    <LinkedIn className="text-[#98A2B3]" />
                </a>
            </div>

        </div>
        <hr className="text-[#f3f3f3] mt-6" />
        <Newsletter tag={'blog'} />


    </article>;
}

export default PostDetail;