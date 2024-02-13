import { useState } from "react";
import Button from "../button";
import CancelIcon from "/public/svg/cancel.svg";
import ArrowDown from '/public/svg/menu-arrow.svg';
import Image from "next/image";
import Link from "next/link";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return <header className="bg-white text-white justify-between  flex items-center  p-2 md:py-[14px] md:px-[90px]">
        <div className="flex md:items-center">
            <Link href={'/'}>
                <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150} />
            </Link>
        </div>

        <nav className="flex gap-x-[24px] cursor-pointer flex-col md:flex-row md:items-center md:justify-end text-[16px] text-primary-800">
            <ul className="hidden md:flex gap-x-[40px] mb-4 md:mb-0">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a>LOGIN</a></li>
            </ul>
            <div className="hidden md:block mt-3 md:mt-0">
                <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px]">Sign Up</Button>
            </div>
            {/* <HamburgerIcon onClick={toggleMenu} /> */}
            <div onClick={toggleMenu} className="flex md:hidden cursor-pointer">
                <ArrowDown className="text-primary-800" />
            </div>
        </nav>

        <div className={`fixed top-0 left-0 w-full overflow-hidden  bg-white z-50 py-2 shadow ${isMenuOpen ? '' : 'hidden'}`}>
            <div className="flex justify-between items-center mb-5 px-4">
                <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150} />
                <CancelIcon className="text-primary-800 cursor-pointer" onClick={toggleMenu} />

            </div>
            <ul className="px-5 flex flex-col md:justify-center md:text-center text-primary-800 gap-10">
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/blog">BLOG</a></li>
                <li><a href="/login">LOGIN</a></li>
            </ul>

            <div className="px-5 my-5">
                <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px] w-full font-medium">Sign Up</Button>
            </div>
        </div>
    </header>
}


export default Navbar