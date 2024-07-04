import Image from "next/image";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const Text = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full m-2 lg:m-5 mx-auto">
                    <Image
                     
                        className="!relative object-cover lg:object-contain"
                        src={urlForImage(value)}
                        alt={value?.alt}
                        fill
                    />
                </div>
            );
        }
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-5 lg:ml-10  list-disc space-y-2 text-[16px] font-normal leading-8 tracking-wide">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list-decimal text-[16px] font-normal leading-8 tracking-wide">{children}</ol>
        ),
    },
    block: {
        h1: ({ children }: any) => (
            <h1 className="text-[26px] my-2 font-bold text-[#292D32]">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-[24px] my-2 font-bold  text-[#292D32]">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-[20px] my-2  font-bold  text-[#292D32]">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-[18px]  my-2 font-bold  text-[#292D32]">{children}</h4>
        ),
        normal: ({ children }: any) => (
            <div className={inter.className}>
                <p className="text-[16px] font-normal leading-8 tracking-wide m-0  text-[#292D32]">{children}</p>
            </div>

        ),
        blockquote: ({ children }: any) => (
            <blockquote className="border-l-sky-700 border-l-4 pl-5 py-5 my-5 text-[18px] font-normal leading-8 tracking-wide">
                {children}
            </blockquote>
        ),
    },

    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined;

            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline text-primary-500 hover:text-primary-200"
                >
                    {children}
                </Link>
            );
        },
    },
}

export default Text