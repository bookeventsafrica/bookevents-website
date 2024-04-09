"use client"
/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../../components/navbar'));
const Footer = dynamic(() => import('../../components/footer'));
const Button = dynamic(() => import('../../components/button'));
const EventSection = dynamic(() => import('../../components/sections/events'));
const Search = dynamic(() => import('../../components/search'));

export default function Discover(props: { searchParams: { s: string; category: string }; }) {
    const [events, setEvents] = useState([]);
    //current page is offset
    const [offset, setOffset] = useState<number>(1);
    const [lastPage, setLastPage] = useState(0)

    useEffect(() => {
        fetch()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.searchParams, offset])

    const fetch = async () => {
        try {
            let searchTerm = props.searchParams.s ? props.searchParams.s : ''
            let categoryId = props.searchParams.category ? props.searchParams.category : ''
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV == 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/published?published=1&search=${searchTerm}&offset=${offset}&categoryId=${categoryId}`)
            setEvents(data.data);
            setOffset(data.offset)
            setLastPage(data.last_page);
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

                <section className="md:px-[6.18rem]  bg-[#F1F2F6] py-[50px]">

                    <EventSection title="Discover Events" events={events} />
                    {
                        events && events.length <= 0 && <div className="flex justify-center bg-[#F1F2F6] py-20">
                            <h3 className="text-[30px] font-bold">No result found : {props.searchParams.s}</h3>
                        </div>
                    }
                    {lastPage > 1 && <div className="flex gap-5 my-10 justify-center px-[10px]" >

                        <Button variant="primary" className="font-medium text-[16px] px-[24px] py-[10px] rounded-[4px] md:w-[200px]" onClick={() => setOffset(offset - 1)} disabled={offset == 1}>Prev</Button>
                        <Button variant="primary" className="font-medium text-[16px] px-[24px] py-[10px] rounded-[4px] md:w-[200px]" onClick={() => setOffset(offset + 1)} disabled={offset == lastPage} >Next</Button>

                    </div>}
                </section>

            </main>
            <Footer />

        </>

    )
}
