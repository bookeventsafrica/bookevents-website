import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";


const BlogCard = ({ post }: { post: any }) => {
  return <a className="w-full  cursor-pointer" href={`/blog/${post.slug.current}`}>
    <Image
      src={
        urlForImage(post.mainImage)
      }
      alt={post?.mainImage?.alt}
      width={341}
      height={300}
    
      className="h-[300px] w-full object-cover"
    />
    <div className="mt-[24px]">
      <div>
        <h3 className="text-[24px] font-[700] text-[#292D32] mb-[12px]">{post.title}</h3>
        <p className="my-0  text-[16px] font-[400]">{post.description && post.description.substring(0, 150) + "..."} </p>
      </div>
      <div className="flex items-center mt-[12px] gap-2 flex-wrap">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={
              urlForImage(post.authorImage)
            }
            alt={post?.authorImage?.alt}
            width={24}
            height={24}
          
            className="h-[24px] w-[24px] rounded-full"
          />
          <p className="text-[14px] text-[#292D32]">{post.authorName}</p>
        </div>
          <p className="text-[14px] text-[#292D32] ">
            - {new Date(post.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
      </div>
    </div>
  </a>
}

export default BlogCard;