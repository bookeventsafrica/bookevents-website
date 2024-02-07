"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../components/button";
import Footer from "../components/footer";
import FavoriteSVG from '/public/svg/favorite.svg';
import { useState } from "react";
import { FlutterWaveButton } from "flutterwave-react-v3";
import EventSection from "../components/sections/events";
import LocationSVG from 'public/svg/map-pin.svg'
import CalendarSVG from 'public/svg/calendar.svg'
import Ticket from "../components/ticket";


export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* banner */}
            <header className="bg-white text-white justify-between  flex items-center  p-2 md:py-[14px] md:px-[90px]">
                <div className="flex md:items-center">
                    <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150} />
                </div>

                <nav className="flex gap-x-[24px] cursor-pointer flex-col md:flex-row md:items-center md:justify-end text-[16px] text-primary-800">
                    <ul className="hidden md:flex gap-x-[24px] mb-4 md:mb-0">
                        <li><a href="/">Discover</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a>Login</a></li>
                    </ul>
                    <div className="hidden md:block mt-3 md:mt-0">
                        <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px]">Sign Up</Button>
                    </div>
                    {/* <HamburgerIcon onClick={toggleMenu} /> */}
                    <div onClick={toggleMenu} className="flex md:hidden">Icon-{ }</div>
                </nav>

                <div className={`fixed top-0 left-0 w-full overflow-hidden  bg-white z-50 py-2 shadow ${isMenuOpen ? '' : 'hidden'}`}>
                    <div className="flex md:items-center mb-5">
                        <Image src="/logo.png" alt="bookEventsAfrica_logo" width={150} height={150} />
                    </div>
                    <ul className="px-5 flex flex-col md:justify-center md:text-center text-primary-800 gap-10">
                        <li><a href="/">Discover</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/login">Login</a></li>
                    </ul>

                    <div className="px-5 my-5">
                        <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px] w-full font-medium">Sign Up</Button>
                    </div>
                </div>
            </header>

            <main >
                <section className="px-[1rem] md:px-[6.18rem] mt-[49px] cursor-pointer">
                    <div className="flex gap-10 md:gap-20 flex-col flex-wrap md:flex-row">
                        <div className="flex-1">

                            <div
                                className="zoom-sm h-screen object-cover object-[center_top] bg-no-repeat w-full"
                                style={{
                                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/img/christmas.png)'
                                }}

                            ></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center ">

                                <h1 className="font-700 md:text-[35px]">Christmas Night Party</h1>
                                <FavoriteSVG />

                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <h3 className="text-primary-800 font-700 md:text-[28px] ">N1000</h3>
                                <div className="text-[#707070] font-500 md:text-[16px]">Available</div>
                            </div>
                            <div className="mt-[10px]">
                                <p className="font-400 text-[12px] md:text-[18px] text-[#707070] leading-[30px] ">The Christmas night party is hosted by Thynk unlimited. It going to be a lit party as the year draws to an end.
                                    Doors open at 8pm, free champagne before 10pm.Hurry now, get your tickets!!</p>

                                <div className="flex mt-5 gap-4 items-center">
                                    <LocationSVG className="text-[#9A9DAA]" />
                                    <p className="md:text-[18px] font-400 text-[#292D32]">
                                        Lospino Lodge, Onuyi, Nsukka, Enugu State.
                                    </p>
                                </div>

                                <div className="flex mt-3 gap-4 items-center">
                                    <CalendarSVG className="text-[#9A9DAA]" />

                                    <p className="md:text-[18px] font-400 text-[#292D32]">December 24th, 2024
                                        9pm</p>

                                </div>

                            </div>

                            <div>
                                <Ticket />
                            </div>
                        </div>


                    </div>

                </section>

                <EventSection title="Recommended For you " />


            </main>
            <Footer />

        </>

    )
}
