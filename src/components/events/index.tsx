import { formatDate, IEvent } from "@/utils";
import moment from "moment";


export default function Item({ event, ...props }: { event: IEvent }) {
    return <div className="w-full bg-white cursor-pointer relative rounded-[16px]">
        <a href={`/${event.slug}`}>
            {/* <div
                className="h-[220px] object-cover object-[center_top] w-full rounded-t-[16px]"
                style={{
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(${event.image}), lightgray 50% / cover no-repeat`
                }}

            ></div> */}
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src={event.image} alt="" className="h-[220px] w-full object-cover" />
        </a>
        <div className="top-0 px-[22px] py-[19px] absolute">
            <div className="bg-white py-[4px] px-2 rounded-[6px] text-[12px] font-light text-[#000] shadow-sm">
                {event.type}
            </div>

            <div></div>
        </div>

        <a href={`/${event.slug}`} className="no-underline">
            <div className="px-[20px] py-[15px] flex items-start">
                <div className="flex flex-col flex-[.15]">
                    <h5 className="font-[700] text-[16px] text-primary-800 m-0">{formatDate(event.eventDate).toUpperCase()}</h5>
                    <h3 className="text-[#000] font-[700] text-[25px] m-0">{moment(event.eventDate).format('DD')}</h3>

                    <h6 className="!text-primary-800 text-[13px]">{moment(event.eventTime, ['HH:mm']).format('HH:mm A')}</h6>
                </div>

                <div className="flex flex-col gap-[12px] flex-1">
                    <span className="text-[16px] font-[700]  text-[#292D32] ">
                        {event.name}
                    </span>
                    <span className="text-[14px] font-[400] text-[#707070]">
                        {event.location}
                    </span>
                </div>
            </div>
        </a>
    </div>
}