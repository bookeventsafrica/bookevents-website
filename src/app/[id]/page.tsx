"use client"
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Button from "../components/button";
import Footer from "../components/footer";
import FavoriteSVG from '/public/svg/favorite.svg';
import { useState } from "react";
import EventSection from "../components/sections/events";
import LocationSVG from 'public/svg/map-pin.svg'
import CalendarSVG from 'public/svg/calendar.svg'
import Ticket, { ITicket, TicketPlan, TicketType } from "../components/ticket";
import CancelIcon from "/public/svg/cancel.svg";
import ArrowDown from '/public/svg/menu-arrow.svg';
import Modal from "../components/modal";


export enum EventType {
    ONLINE = 'ONLINE',
    PHYSICAL = 'PHYSICAL',
}

export interface IEvent {
    _id: string;

    name: string;

    location?: string;

    detail: string;

    categoryId: string;

    eventDate: Date;

    eventTime: string;

    image: string;

    creatorId?: string;

    type: EventType;

    published: boolean;
}




export default function Home() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState<ITicket>();

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


            <main >
                <section className="px-[1rem] md:px-[6.18rem] mt-[49px] cursor-pointer">
                    <div className="flex gap-10 md:gap-20 flex-col flex-wrap md:flex-row">
                        <div className="flex-1">

                            <div
                                className="zoom-sm object-cover object-[center_top] bg-no-repeat w-full h-screen"
                                style={{
                                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/img/christmas.png)'
                                }}

                            ></div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center ">

                                <h1 className="font-700 text-[20px] md:text-[30px]">Christmas Night Party</h1>
                                <FavoriteSVG />

                            </div>
                            <div className="flex justify-between items-center mt-[10px]">
                                <h3 className="text-primary-800 font-700 text-[14px] md:text-[24px] ">N1000</h3>
                                <div className="text-[#707070] font-500 text-[14px] md:text-[16px]">Available</div>
                            </div>
                            <div className="mt-[10px]">
                                <p className="font-400 text-[12px] md:text-[14px] text-[#707070] leading-[30px] ">The Christmas night party is hosted by Thynk unlimited. It going to be a lit party as the year draws to an end.
                                    Doors open at 8pm, free champagne before 10pm.Hurry now, get your tickets!!</p>

                                <div className="flex mt-5 gap-4 items-center">
                                    <LocationSVG className="text-[#9A9DAA]" />
                                    <p className="text-[14px] md:text-[16px] font-400 text-[#292D32]">
                                        Lospino Lodge, Onuyi, Nsukka, Enugu State.
                                    </p>
                                </div>

                                <div className="flex mt-3 gap-4 items-center">
                                    <CalendarSVG className="text-[#9A9DAA]" />

                                    <p className="text-[14px] md:text-[16px] font-400 text-[#292D32]">December 24th, 2024
                                        9pm</p>

                                </div>

                            </div>

                            <div>
                                <Ticket tickets={[{
                                    _id: '1213123',
                                    name: 'Singles',
                                    ticketPlan: TicketPlan.FREE,
                                    ticketType: TicketType.GROUP,
                                    eventId: '1213',
                                    sold: 10,
                                    available: true
                                }, {
                                    _id: '12131234',
                                    name: 'VIP',
                                    ticketPlan: TicketPlan.PAID,
                                    ticketType: TicketType.GROUP,
                                    eventId: '1213',
                                    admits: 2,
                                    price: 5000,
                                    sold: 10,
                                    available: true
                                }]}
                                    selectedTicket={selectedTicket!} select={(ticket) => setSelectedTicket(ticket)} />
                            </div>
                            <hr className="h-[4px] text-[#E0E0E0] mt-4 mb-10" />
                            <div>
                                <Button className="rounded-[4px]" disabled={true}> Book now</Button>
                            </div>
                        </div>
                    </div>

                </section>

                <EventSection title="Recommended For you " />


                {/* <Modal>
                    <h1>Hello</h1>
                </Modal> */}
            </main>
            <Footer />

        </>

    )
}
