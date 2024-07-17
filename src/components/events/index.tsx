import { formatDate, IEvent, isEventPast } from "@/utils";
import moment from "moment";
import Image from "next/image";

export default async function Item({ event, ...props }: { event: IEvent }) {


  return (
    <div className="w-full bg-white cursor-pointer  rounded-[16px] relative">
      <a href={`/${event.slug}`}>
        <div className="relative w-full h-[258px] ">
          <Image
            src={event.image}
            alt=""
            fill
            style={{ objectFit: "cover" }}
            className="rounded-t-[16px]"
            loading="eager"
          />
        </div>
      </a>
      <div className="top-0 px-[22px] py-[19px] absolute flex justify-between w-full">
        <div className="bg-white py-[4px] px-2 rounded-[6px] text-[12px] font-light text-[#000] shadow-sm">
          {event.type}
        </div>

        {isEventPast(event.eventDate) && (
          <div className="bg-white py-[4px] px-2 rounded-[6px] text-[12px] font-bold text-red-600 shadow-sm uppercase ">
            Expired
          </div>
        )}
      </div>

      <a href={`/${event.slug}`} className="no-underline">
        <div className="px-[20px] py-[15px] flex items-start gap-5 lg:gap-0">
          <div className="flex flex-col flex-[.15]">
            <h5 className="font-[700] text-[16px] text-primary-800 m-0">
              {formatDate(event.eventDate).toUpperCase()}
            </h5>
            <h3 className="text-[#000] font-[700] text-[25px] m-0">
              {moment(event.eventDate).format("DD")}
            </h3>

            <h6 className="!text-primary-800 text-[13px]">
              {moment(event.eventTime, ["HH:mm"]).format("HH:mm A")}
            </h6>
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
  );
}
