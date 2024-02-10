import ArrowLeft from '/public/svg/arrow-left.svg';
import Africa from '/public/svg/africa.svg';
import Image from 'next/image';

export default function CustomerReview() {

    return <section className="px-[2rem] md:px-[6.188rem] md:py-[0.75rem]">
        <h2>Our Customer Reviews</h2>

        <div>

            <div className="bg-primary w-auto md:w-[530px] h-[388px] relative px-[6px] py-[26px]">
                <Africa className="absolute top-[26px] left-[20px]" />
                <Africa className="absolute bottom-[26px] right-[20px]" />
                <div className='absolute top-1/2 cursor-pointer h-[53px] w-[53px] rounded-full bg-white/[.4] flex justify-center items-center'>
                <ArrowLeft className="" />
                </div>
                <div className='flex justify-center items-center flex-col text-white'>
                    <Image src={'/img/review-person.png'} alt="" width="100" height={'100'} />
                    <p className='w-auto md:w-[367px] text-center my-[30px]'>Using bookeventsafrica to manage our events is brilliant, easy to use, has a nice user experience and keeps it professional. I love it!. I would recommend anytime and any day.</p>
                    <span>-Olivia</span>
                </div>

            </div>


        </div>

    </section>
}


