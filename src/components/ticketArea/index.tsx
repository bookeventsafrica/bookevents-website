'use client'
import { formatMoney, IEvent, isEventPast, debounce } from "@/utils";
import { useFormik } from "formik";
import { Fragment, useRef, useState, useEffect } from "react";
import Button from "../button";
import Ticket, { ITicket, TicketPlan } from "../ticket";
import * as Yup from 'yup';

import CustomFlutterWaveButton from '@/components/flutterwave-button';
import axios from "axios";


interface IEventTicket extends IEvent {
    tickets: ITicket[]
}

// Yup schema to validate the form
const schema = Yup.object().shape({
    quantity: Yup.number().required().min(1, 'Quantity must be greater than 0'),
    email: Yup.string().required('Please Email is required').email('Email must be valid'),
});

function TicketArea({ event }: { event: IEventTicket }) {
    const [loading, setLoading] = useState(false)
    const flutterWaveRef = useRef<HTMLButtonElement>(null)
    const [selectedTicket, setSelectedTicket] = useState<ITicket>({} as ITicket)
    const [availableQuantity, setAvailableQuantity] = useState<number>(0); // Store fetched quantity
    const [percentageToAdd, setPercentageToAdd] = useState(0)

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
            if (selectedTicket.ticketPlan == TicketPlan.FREE) {
                //register
                try {
                    setLoading(true)
                    await axios.post(`${process.env.NEXT_PUBLIC_ENV === 'development' ?
                        process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/register`, {
                        ticketId: selectedTicket._id, eventId: event._id, email, quantity,
                    });
                    setSelectedTicket({} as ITicket);
                    setLoading(false)
                    form.setValues({ email: '', quantity: 1 });
                } catch (err) {
                    setLoading(false);
                }
            }
        },
    });

    // Destructure the formik object
    const { errors, touched, values, handleChange, handleSubmit, dirty, handleBlur, isValid } = form;





    const debouncedSelectTicket = debounce(async (ticket: ITicket) => {
        if (ticket) { // Check if ticket is actually selected
            const { data }: any = await checkTicketQuantity(ticket._id); // Make API call to check quantity
            setAvailableQuantity(data); // Update state with available quantity
            setSelectedTicket(ticket); // Update selected ticket state
        }
    }, 120); // Adjust debounce delay as needed



    const handleTicketSelect = (ticket: ITicket) => {
        setPercentageToAdd(event.isAttendeeCharged ? Number(event.percentage) * Number(ticket.price!) : 0)
        return setSelectedTicket(ticket);
        // debouncedSelectTicket(ticket); // Trigger debounced function
    };

    const checkTicketQuantity = (ticketId: string) => {
        return axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ?
            process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/${event._id}/ticket/${ticketId}/qty-count`)
    }

    return <>
        <div>
            {event.tickets && <Ticket tickets={event.tickets}
                selectedTicket={selectedTicket!} select={(ticket) => handleTicketSelect(ticket)} />}
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
                                {selectedTicket.ticketPlan == TicketPlan.PAID && <h6 className="font-light text-[18px] text-primary-800" >{formatMoney((values.quantity * selectedTicket.price!) + (percentageToAdd * values.quantity))}</h6>}
                                {selectedTicket.ticketPlan == TicketPlan.FREE && <h6 className="font-light text-[18px] text-primary-800" >{TicketPlan.FREE}</h6>}
                            </div>
                        </div>
                        {selectedTicket.ticketPlan == TicketPlan.FREE && <Button className="w-full rounded-sm p-3" disabled={!isValid || !dirty || loading || isEventPast(event.eventDate) || selectedTicket.totalRegistered + values.quantity > (selectedTicket.limit ?? 500)} type={'submit'} >Book Now</Button>}
                        {selectedTicket.ticketPlan == TicketPlan.PAID && <CustomFlutterWaveButton className="rounded-[4px] w-full bg-primary-800 text-white p-3  disabled:cursor-not-allowed disabled:opacity-[.5]" ref={flutterWaveRef}
                            onClick={() => setLoading(true)}
                            disabled={loading || !isValid || !dirty || isEventPast(event.eventDate) || selectedTicket.totalRegistered + values.quantity > (selectedTicket.limit ?? 500)}
                            email={values.email}
                            amount={(values.quantity * selectedTicket.price!) + (percentageToAdd * values.quantity)}
                            title={event.name}
                            ticketId={selectedTicket._id}
                            eventId={event._id}
                            qty={values.quantity}
                            description={event.details}
                            close={() => {
                                setLoading(false)
                                form.setValues({ email: '', quantity: 1 });
                                setSelectedTicket({} as ITicket);
                            }}
                        />}
                    </form>
                </div>
            </Fragment>}
    </>
}


export default TicketArea