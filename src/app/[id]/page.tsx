/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/footer";
import EventSection from "../../components/sections/events";
import LocationSVG from 'public/svg/map-pin.svg'
import CalendarSVG from 'public/svg/calendar.svg'
import axios from "axios";
import moment from "moment";
import Navbar from "@/components/navbar";




import { Metadata } from "next";
import TicketArea from "@/components/ticketArea";

interface Props {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    let slug = params.id.split('-');

    const url = `${process.env.NEXT_PUBLIC_ENV == 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/${slug[slug.length - 1]}`
    // fetch data
    const { data } = await axios.get(url);
    const event = data.length ? data[0] : data;
    return {
        title: event?.name,
        description: event?.details,

        keywords: ['event', event?.name, 'ticket', 'book events', 'africa', 'event ticketing platform', 'event booking', 'organize events', 'ticket sales'],
        openGraph: {
            images: [event?.image],
            description: event?.details,
            title: event?.name,
            type: 'website'
        },
    };
}


async function getEventDetails(id: string) {
    if (id) {
        let slug = id.split('-');
        const { data: event } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/${slug[slug.length - 1]}`);

        return event.length ? event[0] : {};
    }

}

async function getUpcomingEvents() {
    const { data: event } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/upcoming-events`);
    return event
}


export default async function Home({ params }: { params: { id: string } }) {
    const event = await getEventDetails(params.id);
    const upcomingEvents = await getUpcomingEvents()

    return (
        <>
            {/* banner */}

            <Navbar />

            <main >
                <section className="px-[1rem] md:px-[6.18rem] my-[49px] cursor-pointer">
                    {event && <div className="flex gap-10 md:gap-20 flex-col flex-wrap md:flex-row">
                        <div className="flex-1">

                            {/* <div
                                className="zoom-sm object-cover object-[center_top] bg-no-repeat w-full h-screen"
                                style={{
                                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/img/christmas.png)'
                                }}

                            ></div> */}
                            {event?.image && <img src={event?.image} className="w-full object-cover h-auto" alt="" width="100" height="100" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center ">

                                <h1 className="font-700 text-[20px] md:text-[30px]">{event?.name}</h1>
                                <h3 className="text-primary-800 font-400 text-[14px] ">{event?.type}</h3>

                            </div>
                            {/* <div className="flex justify-between items-center mt-[10px]">
                                <FavoriteSVG />
                                <div className="text-[#707070] font-500 text-[14px] md:text-[16px]">Available</div>
                            </div> */}
                            <div className="mt-[10px]">
                                <p className="font-400 text-[12px] md:text-[14px] text-[#707070] leading-[30px] ">{event?.details}</p>

                                <div className="flex mt-5 gap-4 items-center">
                                    <LocationSVG className="text-[#9A9DAA]" />
                                    <p className="text-[14px] md:text-[16px] font-400 text-[#292D32]">
                                        {event?.location}
                                    </p>
                                </div>

                                <div className="flex mt-3 gap-4 items-center">
                                    <CalendarSVG className="text-[#9A9DAA]" />

                                    <p className="text-[14px] md:text-[16px] font-400 text-[#292D32]">{moment(event?.eventDate).format('LL')} {moment(event?.eventTime, ['HH:mm']).format('HH:mm A')}
                                    </p>

                                </div>

                            </div>

                            <TicketArea event={event} />
                        </div>
                    </div>}

                </section>
                <section className="md:px-[6.18rem]  bg-[#F1F2F6] py-[50px]">
                    <EventSection title="Upcoming Events" events={upcomingEvents.length && upcomingEvents} />
                </section>


            </main>
            <Footer />

        </>

    )
}
