"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../components/button";
import Footer from "../components/footer";
import CircleSvg from '/public/svg/circle.svg';
import ArrowDown from '/public/svg/menu-arrow.svg';
import EventSection from "../components/sections/events";
import Search from "../components/search";
import CancelIcon from "/public/svg/cancel.svg";

import { useContext, useState } from "react";
import { AppContext } from "@/provider";


export default function Home() {
  let {  modalOpen } = useContext(AppContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* banner */}
      <div className=" bg-hero-home bg-no-repeat w-full h-[704px] md:bg-cover  text-white bg-center">

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
              <li><a href="/">Discover</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/login">Login</a></li>
            </ul>

            <div className="px-5 my-5">
              <Button variant="primary" className="rounded-[8px] text-[16px] px-[24px] py-[10px] w-full font-medium">Sign Up</Button>
            </div>
          </div>
        </header>


        <div className="mt-[92px]  px-[2rem] md:px-[6.188rem] md:py-[0.75rem] ">
          <h2 className=" mx-auto text-center w-auto md:w-[672px] md:text-[50px] font-[700]">Let’s make your events  <span className="relative">
            <CircleSvg className="absolute md:-left-80 circleText hidden md:block" />
            Memorable
          </span> </h2>
          <p className="mx-auto  text-center w-auto md:w-[620px] text-[16px] mt-[24px] font-[400] mb-[48px]">
            For all your event ticketing needs, from small gatherings to the large festivals, our event booking system has you covered
          </p>

          <div className="flex justify-center">
            <Button variant="primary" className="font-medium text-[16px] rounded-[8px] py-[10px] px-[24px]">Create an Event</Button>

          </div>
          {/*  */}

          <Search />

        </div>
      </div>
      <main >
        <section className="px-[2rem] md:px-[6.18rem] mt-[49px] cursor-pointer">
          <h3 className="mb-[54px]">Browse by category</h3>
          <div className="flex gap-[17px] flex-wrap justify-center md:justify-start mb-[10px]">
            <div className="bg-graduation-party w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white ">

              <span className="text-center">Graduation Party</span>
            </div>
            <div className="bg-[url('/img/tech-conference.png')] w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white ">

              <span className="text-center">Tech Conferences</span>
            </div>
            <div className="bg-[url('/img/birthday.png')] w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white">

              <span className="text-center">Birthday Party</span>
            </div>
            <div className="bg-[url('/img/fashion.png')] w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white">

              <span className="text-center">Fashion</span>
            </div>
            <div className="bg-[url('/img/club.png')] w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white">

              <span className="text-center">Club Party</span>
            </div>
            <div className="bg-[url('/img/sport.png')] w-[165px] h-[165px] bg-no-repeat flex justify-center items-center text-white">

              <span className="text-center">Sport & Fitness</span>
            </div>
          </div>

        </section>


        <EventSection />

        {/* <CustomFlutterWaveButton /> */}

        <section className="relative">

          <img src="/newsletter.png" className="w-full h-[332px]" alt="newsletter image" />
          <div className="absolute  inset-0 flex justify-center align-middle items-center flex-col px-[10px]">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white  mb-[24px] text-center">Subscribe to our newsletter</h2>
            <p className="text-center font-normal text-white text-[12px]  md:text-[14px] mb-[24px]">Sign Up to our newsletter to get update and offers delivered in your inbox</p>
            <div>
              <form>

              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>

  )
}
