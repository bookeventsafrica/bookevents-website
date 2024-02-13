/* eslint-disable @next/next/no-img-element */
import Footer from "../../components/footer";
import EventSection from "../../components/sections/events";
import LocationSVG from 'public/svg/map-pin.svg'
import CalendarSVG from 'public/svg/calendar.svg'
import axios from "axios";
import moment from "moment";
import Navbar from "@/components/navbar";

enum EventType {
    ONLINE = 'ONLINE',
    PHYSICAL = 'PHYSICAL',
}

export interface IEvent {
    _id: string;

    name: string;

    location?: string;

    details: string;

    categoryId: string;

    eventDate: string;

    eventTime: string;

    image: string;

    creatorId?: string;

    type: EventType;

    published: boolean;
}




import { Metadata } from "next";

interface Props {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // read route params
    const url = `${process.env.NEXT_PUBLIC_ENV == 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/${params.id}`

    // fetch data
    const [data] = await fetch(url).then((res) => res.json());

    const event = data;

    return {
        title: event.name,
        description: event.details,
        openGraph: {
          images: event.image
        },
    };
}


async function getEventDetails(id: string) {
    const { data: event } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/${id}`);
    return event[0]
}


export default async function Home({ params }: { params: { id: string } }) {
    const event = await getEventDetails(params.id);

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
                            {event?.image && <img src={event?.image} className="w-full" alt="" />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center ">

                                <h1 className="font-700 text-[20px] md:text-[30px]">{event?.name}</h1>
                                <h3 className="text-primary-800 font-700 text-[14px] md:text-[24px] ">{event?.type}</h3>

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


                        </div>
                    </div>}

                </section>

                <EventSection title="Recommended For you " events={[]} />

            </main>
            <Footer />

        </>

    )
}
