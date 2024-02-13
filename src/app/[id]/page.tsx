"use client"
/* eslint-disable @next/next/no-img-element */
import Button from "../../components/button";
import Footer from "../../components/footer";
import FavoriteSVG from '/public/svg/favorite.svg';
import { Fragment, useEffect, useRef, useState } from "react";
import EventSection from "../../components/sections/events";
import LocationSVG from 'public/svg/map-pin.svg'
import CalendarSVG from 'public/svg/calendar.svg'
import Ticket, { ITicket, TicketPlan } from "../../components/ticket";
import CustomFlutterWaveButton from "@/components/flutterwave-button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import moment from "moment";
import { formatMoney } from "@/utils";
import { useRouter } from "next/navigation";
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


interface IEventTicket extends IEvent {
    tickets: ITicket[]
}

// Yup schema to validate the form
const schema = Yup.object().shape({
    quantity: Yup.number().required().min(1, 'Quantity must be greater than 0'),
    email: Yup.string().required('Please Email is required').email('Email must be valid'),
});


export default function Home({ params }: { params: { id: string } }) {
    const router = useRouter()

    const [event, setEvent] = useState<IEventTicket>()

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        try {
            const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/event/${params.id}`)
            setEvent(data.length && data[0]);

        } catch (err) {
            router.push('/')

        }
    }

    const [selectedTicket, setSelectedTicket] = useState<ITicket>();



    // const handle = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    // }

    // Formik hook to handle the form state
    const form = useFormik({
        initialValues: {
            email: "",
            quantity: 1,
        },

        // Pass the Yup schema to validate the form
        validationSchema: schema,

        // Handle form submission
        onSubmit: async ({ email, quantity }) => {
            // Make a request to your backend to store the data

        },
    });

    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit, dirty, handleBlur, isValid } = form;

    const flutterWaveRef = useRef<HTMLButtonElement>(null)
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

                            <div>
                                {event?.tickets && <Ticket tickets={event.tickets}
                                    selectedTicket={selectedTicket!} select={(ticket) => setSelectedTicket(ticket)} />}
                            </div>
                            {selectedTicket?._id &&
                                <Fragment>
                                    <hr className="h-[4px] text-[#E0E0E0] my-4" />
                                    <div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="flex flex-col mb-3">
                                                <label className="font-light text-[15px] mb-1" htmlFor="email">Email</label>
                                                <input type="email" className="bg-[#fff] border rounded-sm p-2  border-1 border-[#959595] outline-none" placeholder="bookevents@gmail.com" id="email" name="email" value={values.email}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange} />
                                                {errors.email && touched.email && <span className="text-[red] font-light text-[12px] mt-1">{errors.email}</span>}
                                            </div>

                                            <div className="flex flex-col mb-5">
                                                <label className="font-light text-[15px] mb-1" htmlFor="quantity">Quantity</label>
                                                <input type="number" className="bg-[#fff] border rounded-sm p-2 border-1 border-[#959595] outline-none" id="quantity" name='quantity' value={values.quantity}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange} />
                                                {errors.quantity && touched.quantity && <span className="text-[red] font-light text-[12px] mt-1">{errors.quantity}</span>}
                                            </div>
                                            <div>
                                                <div className="flex justify-between mb-3">
                                                    <h3 className="font-light uppercase text-[12px]">Quantity</h3>
                                                    <h6 className="font-light text-[18px] text-primary-800">{values.quantity}</h6>
                                                </div>
                                                <div className="flex justify-between mb-5">
                                                    <h3 className="font-light uppercase text-[12px]">Total</h3>
                                                    {selectedTicket.ticketPlan == TicketPlan.PAID && <h6 className="font-light text-[18px] text-primary-800" >{formatMoney(values.quantity * selectedTicket.price!)}</h6>}
                                                    {selectedTicket.ticketPlan == TicketPlan.FREE && <h6 className="font-light text-[18px] text-primary-800" >{TicketPlan.FREE}</h6>}
                                                </div>
                                            </div>

                                            <Button className="w-full rounded-sm p-3" onClick={() => {
                                                if (selectedTicket.ticketPlan !== TicketPlan.FREE) {
                                                    return flutterWaveRef.current && flutterWaveRef.current.click()
                                                }
                                                //handle Free ticket
                                            }} disabled={!isValid || !dirty}>Book Now</Button>
                                            <CustomFlutterWaveButton className="rounded-[4px] w-full bg-primary-800 text-white p-3 hidden" ref={flutterWaveRef}
                                                email={values.email}
                                                amount={values.quantity * selectedTicket.price!}
                                                title={event.name}
                                                ticketId={selectedTicket._id}
                                                eventId={event._id}
                                                qty={values.quantity}
                                                description={event.details}
                                                close={() => {
                                                    setSelectedTicket({} as ITicket);
                                                    form.setValues({ email: '' , quantity: 1})
                                                }}
                                            />
                                        </form>
                                    </div>
                                </Fragment>
                            }
                        </div>
                    </div>}

                </section>

                <EventSection title="Recommended For you " events={[]} />


                {/* <Modal>
                    <h1>Hello</h1>
                </Modal> */}
            </main>
            <Footer />

        </>

    )
}
