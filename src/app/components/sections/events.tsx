import Button from "../button";
import Item from "../events/item";



export interface EventSection {
    title?: string,
}

export default function EventSection({ title = 'Upcoming  Events'}: EventSection) {

    return <section className="md:px-[6.18rem] mt-[49px] bg-[#F1F2F6] py-[50px]">
        <h3 className="text-[#292D32] font-bold text-[25px] px-[10px] md:px-0">{title}</h3>
        <div className="event__grid px-[10px] md:px-0 mt-[40px]">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />

        </div>
        <div className="flex justify-center mt-[60px]">
            <Button variant="primary" className="font-medium text-[16px] px-[24px] py-[10px] rounded-[8px]" >See More Events</Button>
        </div>
    </section>
}