"use client"
/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/footer";
import EventSection from "../../components/sections/events";
import Search from "../../components/search";

import { useEffect, useState } from "react";
import Navbar from "@/components/navbar";
import axios from "axios";


export default function Discover(props: { searchParams: { s: string; }; }) {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch()
    }, [props.searchParams.s])

    const fetch = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV == 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/?search=${props.searchParams.s}`)
            setEvents(data.data);

        } catch (err) {
        }
    }
    return (
        <>
            {/* banner */}
            <div className=" bg-hero-discovery bg-no-repeat w-full h-[504px] md:bg-cover  text-white bg-center">

                <Navbar />


                <div className="mt-[100px]  px-[2rem] md:px-[6.188rem] md:py-[0.75rem] ">
                    <h2 className=" mx-auto text-center w-auto md:w-[672px] text-[25px] md:text-[50px] font-[700]">Discover Events
                    </h2>
                    <p className="mx-auto  text-center w-auto md:w-[620px] text-[15px] mt-[24px] font-[400] mb-[20px] md:mb-[48px]">
                        Discover different kinds of events near you by using the find event search box. This events ranges from free, paid, online etc.
                    </p>
                    {/*  */}

                    <Search searchTerm={props.searchParams.s} />

                </div>
            </div>
            <main>

                {
                    events && events.length <= 0 && <div className="flex justify-center bg-[#F1F2F6] py-20">
                        <h3 className="text-[30px] font-bold">No result found : {props.searchParams.s}</h3>
                    </div>
                }


                <EventSection title="" events={events} />

            </main>
            <Footer />

        </>

    )
}
