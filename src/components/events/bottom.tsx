import BookMark from '/public/svg/bookmark.svg'
import Send from '/public/svg/send.svg'
import Location from '/public/svg/map-pin.svg'
import Calendar from '/public/svg/calendar.svg'
import User from '/public/svg/user.svg'

interface BottomProps {
    name?: string;
    date?: Date;
    location?: string;
    host?: string;
}

export default function Bottom({
    name = "Party With Aimes",
    date = new Date(),
    location = "Pegasus night, Enugu",
    host = "Aimes",
}: BottomProps) {
    return <div className="px-[24px] py-[20px]">
        <div className="flex justify-between mb-[15px]">
            <div>
                Paid
            </div>
            {/* svg*/}
            <div className='flex gap-[12px]'>
                <BookMark />
                <Send />
            </div>

        </div>
        {/*  */}
        <div>
            <h3 className='mb-[15px] font-[700] text-[14px]'>{name}</h3>
            <div className="flex gap-[12px] mb-[15px] text-light-dark items-center">
                <Calendar />
                <h6 className='font-normal text-[14px]'>{date.toDateString()}</h6>
            </div>
            <div className="flex gap-[12px] mb-[15px] text-light-dark items-center">
                <Location />
                <h6 className='font-normal text-[14px]'>{location}</h6>
            </div>
            <div className="flex gap-[12px] text-light-dark items-center">
                <User />
                <h6 className='font-normal text-[14px]'>{host}</h6>
            </div>
        </div>
    </div>;
}
