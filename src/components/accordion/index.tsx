'use client';
import { useState } from "react";
import Image from "next/image";

import Arrow from '/public/svg/arrow-right-dark.svg';


interface AccordionInterface {
    title: string,
    content: any,
    index: number
}
const Accordion = ({ title, content, index }: AccordionInterface) => {
    const [active, setActive] = useState<null | number>(null);
    const handleToggle = (index: number) => {
        active === index ? setActive(null) : setActive(index);
    };

    return (
        <div className='w-full bg-white py-[24px] px-[48px] mb-[24px] rounded-[4px]'>
            <div className='flex flex-col'>
                <div className='flex justify-between items-center gap-3 pb-[24]'>
                    <p
                        className={ "text-[15px] md:text-[22px] font-medium  cursor-pointer "}
                        onClick={() => handleToggle(index)}>
                        {title}
                    </p>

                    <Arrow
                        alt='arrow-icon'
                        onClick={() => handleToggle(index)}
                        className={
                            active === index
                                ? "cursor-pointer h-[18px] w-[18px] md:w-[24px] md:h-[24px] rotate-90 text-black"
                                : "cursor-pointer h-[18px] w-[18px]  md:w-[24px] md:h-[24px] text-black"
                        }
                    />
                </div>
            </div>

            <p
                onClick={() => handleToggle(index)}
                className={
                    active === index
                        ? "mt-[24px]"
                        : "invisible max-h-0"
                }>
                {content}
            </p>
        </div>
    );
};

export default Accordion;