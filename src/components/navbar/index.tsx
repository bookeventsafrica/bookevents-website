'use client';
import { useState } from "react";
import Button from "../button";
import CancelIcon from "/public/svg/cancel.svg";
import Hamburger from '/public/svg/hamburger.svg';
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

function Navbar() {
    const currentPath = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    const appUrl = process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_APP_API_DEV + '/auth' : process.env.NEXT_PUBLIC_APP_API_PROD + '/auth';

    return <header className="bg-white text-white justify-between  flex items-center  p-2 lg:py-[14px] lg:px-[90px]">
        <div className="flex lg:items-center">
            <Link href={'/'}>
                <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150}  priority    placeholder="blur"/>
            </Link>
        </div>

        <nav className="flex gap-x-[24px] cursor-pointer flex-col lg:flex-row lg:items-center lg:justify-end text-[16px]">
            <ul className="hidden lg:flex gap-x-[40px] mb-4 lg:mb-0">
            <li><Link href="/" className={`${currentPath === "/" ? " font-semibold  text-primary-800 " : "text-primary-800"} font-normal text-[16px]`}>Home</Link></li>
            <li><Link href="/about-us" className={`${currentPath === "/about-us" ? " font-semibold  text-primary-800 " : "text-primary-800"} font-normal text-[16px]`}>About Us</Link></li>
                <li><a href="/blog" className={`${currentPath === "/blog" ?  " font-semibold  text-primary-800 "  : "text-primary-800"} font-normal text-[16px]`}>Blog</a></li>
                <li><a href={appUrl} className={`font-normal text-primary-800 text-[16px]`}>Login</a></li>
            </ul>
            <div className="hidden lg:block mt-3 lg:mt-0">
                <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px]" onClick={()=> router.push(appUrl!)}>Sign Up</Button>
            </div>
            {/* <HamburgerIcon onClick={toggleMenu} /> */}
            <div onClick={toggleMenu} className="flex lg:hidden cursor-pointer">
                <Hamburger className="text-primary-800" />
            </div>
        </nav>

        <div className={`fixed top-0 left-0 w-full overflow-hidden  bg-white z-50 py-2 shadow ${isMenuOpen ? '' : 'hidden'}`}>
            <div className="flex justify-between items-center mb-5 px-4">
                <Link href={'/'}>
                    <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150} priority    placeholder="blur" />
                </Link>
                <CancelIcon className="text-primary-800 cursor-pointer" onClick={toggleMenu} />

            </div>
            <ul className="px-5 flex flex-col items-center lg:justify-center lg:text-center text-primary-800 gap-10">
            <li><Link href="/" className={`${currentPath === "/" ? " font-semibold  text-primary-800 " : "text-primary-800"} font-normal text-[16px]`}>Home</Link></li>
                <li><Link href="/about-us" className={`${currentPath === "/about-us" ? " font-semibold  text-primary-800 " : "text-primary-800"} font-normal text-[16px]`}>About Us</Link></li>
                <li><Link href="/blog" className={`${currentPath === "/blog" ? " font-semibold  text-primary-800 " : "text-primary-800" } font-normal text-[16px]`}>Blog</Link></li>
                <li><a href={appUrl} className={`font-normal text-primary-800 text-[16px]`}>Login</a></li>
            </ul>

            <div className="px-5 my-5">
                <Button variant="primary" className="rounded-[4px] text-[16px] px-[24px] py-[10px] w-full font-medium" onClick={()=> router.push(appUrl!)}>Sign Up</Button>
            </div>
        </div>
    </header>
}


export default Navbar