import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function NotFound() {
    return (


        <div>
            <Navbar />
            <hr className="text-[#f3f3f3]" />

            <section className='flex justify-center items-center flex-col my-[10rem]'>
                <h2 className='text-[50px] mb-5'>404</h2>

                <h3 className="text-[30px] mb-3">
                    Hey !, Look like you&apos;re lost
                </h3>

                <p className="mb-10 text-[16px]">The page you are looking for  is not Available!</p>
                <Link
                    href={'/'}
                    className='bg-primary-800 text-white px-5 py-2 rounded-md'

                >
                     Home
                </Link>
            </section>
            <hr className="text-[#f3f3f3]" />

            <Footer />
        </div>
    );
}