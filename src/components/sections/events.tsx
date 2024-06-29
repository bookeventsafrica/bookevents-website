'use client';
import Button from "../button";
import Item from "../events";
import { IEvent } from "@/utils";
import { useRouter } from "next/navigation";
import { TypeEventsEnum } from "../events/type-events";

export interface EventSection {
    title?: TypeEventsEnum,
    events: IEvent[]
    more?: boolean
}

export default function EventSection({ title = TypeEventsEnum.UPCOMING_EVENTS, events, more = false }: EventSection) {

    const router = useRouter()

    return <section className="">
        <h3 className="text-[#292D32] font-bold text-[25px] px-[10px] lg:px-0">{title}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] px-[10px] lg:px-0 mt-[40px]">

            {events?.length > 0 && events.map((event: IEvent) => {
                return <Item event={event} key={event._id} />
            })}
        </div>

        {more && events?.length >= 15 && <div className="flex justify-center mt-[60px]" >
            <Button variant="primary" className="font-medium text-[16px] px-[24px] py-[10px] rounded-[4px]" onClick={() => router.push(`/discovery?type=${TypeEventsEnum.UPCOMING_EVENTS === title ? TypeEventsEnum.UPCOMING_EVENTS : TypeEventsEnum.PAST_EVENTS}`)} >{`More ${TypeEventsEnum.UPCOMING_EVENTS === title ? TypeEventsEnum.UPCOMING_EVENTS : TypeEventsEnum.PAST_EVENTS}`}</Button>
        </div>}
    </section>
}