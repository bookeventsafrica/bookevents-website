'use client';
import Button from "../button";
import Item from "../events";
import { IEvent } from "@/app/[id]/page";
import { useRouter } from "next/navigation";

export interface EventSection {
    title?: string,
    events: IEvent[]
    more?: boolean
}

export default function EventSection({ title = 'Upcoming  Events', events, more = false }: EventSection) {

    const router = useRouter()

    return <section className="md:px-[6.18rem]  bg-[#F1F2F6] py-[50px]">
        <h3 className="text-[#292D32] font-bold text-[25px] px-[10px] md:px-0">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] px-[10px] md:px-0 mt-[40px]">

            {events && events.map((event: IEvent) => {
                return <Item event={event} key={event._id} />
            })}
        </div>

        {more && events.length >= 15 && <div className="flex justify-center mt-[60px]" >
            <Button variant="primary" className="font-medium text-[16px] px-[24px] py-[10px] rounded-[8px]" onClick={() => router.push('/discovery')} >See More Events</Button>
        </div>}
    </section>
}