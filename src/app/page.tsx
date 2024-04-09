"use client"
/* eslint-disable @next/next/no-img-element */
import CircleSvg from '/public/svg/circle.svg';
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import dynamic from 'next/dynamic';
import Link from 'next/link';


const EventSection = dynamic(() => import("../components/sections/events"));
const Search = dynamic(() => import('../components/search'));
const Navbar = dynamic(() => import('../components/navbar'));
const Button = dynamic(() => import('../components/button'));
const Footer = dynamic(() => import('../components/footer'));

export default function Home() {
  const [events, setEvents] = useState([])
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetch()
    fetchCategories()
  }, [])

  const fetch = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/published?published=1&sort=-1`)
      setEvents(data.data);
    } catch (err) {
    }
  }

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/category`)
      setCategories(data)
    } catch (err) {

    }
  }

  const handleChange = async (e: { target: { value: SetStateAction<string>; }; }) => {
    setEmail(e.target.value);
  }


  const submit = async (e: { preventDefault: () => void; }) => {
    try {
      e.preventDefault()
      await axios.post(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/newsletter/subscribe`, { email })
      setMessage('Subscription successful')
    } catch (err) {

    }
  }
  // newsletter/subscribe
  //newsletter/unsubscribe

  return (
    <>
      {/* banner */}
      <div className=" bg-hero-home bg-no-repeat w-full h-[704px] md:bg-cover  text-white bg-center">
        <Navbar />


        <div className="mt-[92px]  px-[2rem] md:px-[6.188rem] md:py-[0.75rem] ">
          <h2 className=" mx-auto text-center w-auto md:w-[672px] text-[25px] md:text-[50px] font-[700]">Let’s make your events  <span className="relative">
            <CircleSvg className="absolute md:-left-80 circleText hidden md:block" />
            Memorable
          </span> </h2>
          <p className="mx-auto  text-center w-auto md:w-[620px] text-[15px] mt-[24px] font-[400] mb-[48px]">
            For all your event ticketing needs, from small gatherings to the large festivals, our event booking system has you covered
          </p>

          {/* <div className="flex justify-center">
            <Button variant="primary" className="font-medium text-[16px] rounded-[8px] py-[10px] px-[24px]">Create an Event</Button>

          </div> */}
          {/*  */}

          <Search />

        </div>
      </div>
      <main >
        <section className="px-[2rem] md:px-[6.18rem] my-[49px] cursor-pointer">
          <h3 className="mb-[54px]">Browse by category</h3>
          <div className="flex gap-[17px] flex-wrap justify-center md:justify-between mb-[10px]">

            {categories.length > 0 && categories.map((category: any, i) => {
              return <Link href={`/discovery?category=${category._id}`} key={i}>
                <div className={`w-[165px] h-[165px] rounded-full bg-no-repeat flex justify-center items-center text-white bg-cover`} style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${category.image})`
                }}>

                  <span className="text-center">{category.name}</span>
                </div>
              </Link>
            })}

          </div>

        </section>


        <section className="md:px-[6.18rem] bg-[#F1F2F6] py-[50px] ">

          <EventSection title="Events" events={events} more={true} />

        </section>



        <section className="relative">

          <img src="/newsletter.png" className="w-full h-[332px]" alt="newsletter image" />
          <div className="absolute  inset-0 flex justify-center align-middle items-center flex-col px-[10px]">
            <h2 className="font-bold text-[20px] md:text-[30px] text-white  mb-[24px] text-center">Subscribe to our newsletter</h2>
            <p className="text-center font-normal text-white text-[12px]  md:text-[14px] mb-[24px]">Sign Up to our newsletter to get update and offers delivered in your inbox</p>
            <div>
              <form className="flex  flex-col md:flex-row items-center gap-4 px-2 md:px-0" onSubmit={submit}>
                <div className="w-[300px] md:w-[451px]">
                  <input type="email" className="h-[40px] rounded-[8px] outline-none w-full px-3 font-400 text-[16px] text-[#959595]" placeholder="Enter email" required onChange={handleChange} />
                </div>

                <Button className="rounded-[4px]" type="submit" >Subscribe</Button>

              </form>
              <p className="mt-4 text-white text-center">{message && message}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

    </>

  )
}
