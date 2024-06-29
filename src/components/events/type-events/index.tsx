import EventSection from '@/components/sections/events';
import { IEvent } from '@/utils';
import axios from 'axios';
import React from 'react';

// import { Container } from './styles';
export enum TypeEventsEnum {
    UPCOMING_EVENTS = 'Upcoming Events',
    PAST_EVENTS = 'Past Events',
DISCOVER_EVENTS = 'Discover Events'
}
const fetch = async (type: TypeEventsEnum,) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/type/${type}?published=1&sort=-1`)
        return data.data
    } catch (err) {
    }
}
const TypeEvents = async ({ type }: { type: TypeEventsEnum }) => {
    const events: IEvent[] = await fetch(type)
    return <section className="lg:px-[6.18rem] bg-[#F1F2F6] py-[50px] ">

        <EventSection title={type} events={events} more={true} />

    </section>
}

export default TypeEvents;