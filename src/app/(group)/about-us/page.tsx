import dynamic from 'next/dynamic';
import Image from "next/image";
import LinkedIn from '/public/svg/socials/linkedin.svg'
import X from '/public/svg/socials/twitter.svg'
import Instagram from '/public/svg/socials/instagram.svg'
import { Metadata } from "next";

const Navbar = dynamic(() => import('../../../components/navbar'));
const Footer = dynamic(() => import('../../../components/footer'));


export const metadata: Metadata = {
    title: 'About Us | Book Events Africa',
    description: 'Book Event Africa offers essential event management features to help you organize your events seamlessly. Our advanced ticketing solutions ensure a smooth and intuitive experience for both organizers and attendees, making us the go-to choice for event planning and ticketing. Our services include Event Support, Event Management, Event Promotions, Fast/Instant Payout, and Ticket Sales. We aim to transform the event planning and ticketing industry by providing dedicated customer-focused services that guarantee a smooth booking experience for attendees. With Book Event Africa, you can streamline your event planning process and optimize your event for success. Contact us today to learn more.',
    keywords: ['About Book Events Africa', 'event ticket', 'event ticketing', 'event ticketing platform', 'book events africa', 'number 1 event booking platform', 'african events', 'ticket sales', 'party', 'event organizers', 'advanced ticketing solutions', 'ticketing solutions', 'event ticketing solutions', 'event planning', 'ticketing industry', 'smooth booking experience', 'smooth ticketing', ' Stress-free event management', 'Hassle-free event planning', 'Customer-focused services', 'Online ticketing']
}


function AboutUs() {

    return <>
        <Navbar />
        <section className="bg-about-img  h-[608px] w-full bg-no-repeat bg-cover bg-top">
            <div className="flex justify-center items-center h-full flex-col">
                <h1 className="text-white text-[50px] font-bold">About Us</h1>
                <p className="text-white font-normal text-[20px] text-center">We provide essential features to manage your events seamlessly.</p>
            </div>
        </section>

        <section className="px-[2rem] lg:px-[6.18rem] bg-[#fff] py-[50px]  flex justify-center">
            <div className="flex gap-[38px] flex-col lg:flex-row">
                <div className="flex-1">
                    <h3 className="font-bold text-[25px] lg:text-[45px] mb-[20px] lg:mb-[48px]">Who we are?</h3>
                    <p className="m-0 font-normal text-[14px] lg:text-[20px] text-[#292D32]  mb-[20px] lg:mb-[48px] lg:w-[587px]">
                        Book Event Africa streamlines event management by leveraging advanced ticketing solutions, ensuring a seamless and intuitive experience for both organizers and attendees.
                    </p>
                    <p className="m-0 font-normal text-[14px] lg:text-[20px] text-[#292D32] mb-[20px] lg:mb-[48px] lg:w-[587px]">Book Event Africa aims to transform the event planning and ticketing industry, providing attendees with a smooth booking experience and offering event planners dedicated, customer-focused services.</p>
                </div>
                <div className="flex-1">
                    <Image src='/img/event.png' width={455} height={426} alt="Book Event Team Providing Event support" className="w-full lg:w-[455px]" />
                </div>
            </div>

        </section>

        <section className="px-[2rem] lg:px-[6.18rem] bg-[#fff] py-[50px]  flex justify-center">

            <div >
                <h3 className="text-center font-bold text-[45px] mb-[20px] lg:mb-[48px]">Our Services</h3>

                <div className="flex gap-[32px] flex-wrap">
                    <div className="w-full lg:w-[250px] bg-secondary-500 shadow-lg px-[18px] py-[36px] rounded-[4px] flex flex-col items-center">
                        <div className="flex-1 mb-[18px]">
                            <Image src={'/img/support.png'} width={200} height={126} alt='Book Event Africa Event Support' className="h-[126px] object-contain" />
                        </div>

                        <div className="text-center !text-white">
                            <h4 className="text-[16px] font-bold text-[#292D32] mb-[21px]">

                                Event Support
                            </h4>
                            <p className="text-[14px] font-normal text-[#292D32]">Let us handle the venue ticket sales so you can focus on your event&apos;s success.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[250px] bg-primary-500 shadow-lg px-[18px] py-[36px] rounded-[4px] flex flex-col items-center">
                        <div className="flex-1  mb-[18px]">
                            <Image src={'/img/promotions.png'} width={200} height={126} alt='Book Event Africa Event Promotions' className="h-[126px] object-contain" />
                        </div>
                        <div className="text-center !text-white">
                            <h4 className="text-[16px] font-bold  mb-[21px]">
                                Event Promotions
                            </h4>
                            <p className="text-[14px] font-normal ">Get your event seen! We promote on social media to reach a wider audience.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[250px] bg-tertiary-500 shadow-lg px-[18px] py-[36px] rounded-[4px] flex flex-col items-center">
                        <div className="flex-.8  mb-[18px]">
                            <Image src={'/img/ticket.png'} width={200} height={126} alt='Book Event Africa Ticket Sales' className="h-[126px] object-contain" />
                        </div>
                        <div className="text-center !text-white">
                            <h4 className="text-[16px] font-bold text-[#292D32]  mb-[21px]">
                                Ticket Sales
                            </h4>
                            <p className="text-[14px] font-normal text-[#292D32] ">Start selling tickets online today ! It&apos;s quick and easy.</p>
                        </div>
                    </div>
                    <div className="w-full lg:w-[250px] bg-primary-100 shadow-lg px-[18px] py-[36px] rounded-[4px] flex flex-col items-center">
                        <div className="flex-1 mb-[18px]">

                            <Image src={'/img/manage.png'} width={200} height={126} alt='Book Event Africa Event Management' className="h-[126px] object-contain" />

                        </div>
                        <div className="text-center !text-white">
                            <h4 className="text-[16px] font-bold text-[#292D32]  mb-[21px]">
                                Event Management
                            </h4>
                            <p className="text-[14px] font-normal text-[#292D32] ">Effortless event creation and management. Our dashboard puts you in control.</p>
                        </div>
                    </div>


                </div>

            </div>

        </section>

        <section className="px-[2rem] lg:px-[6.18rem] bg-[#F1F2F6] py-[50px]  flex justify-center">

            <div>
                <div className=" mb-[20px] lg:mb-[48px]">
                    <h3 className="text-center font-bold text-[25px] lg:text-[45px] ">Team Members</h3>
                    <p className="text-center text-[#292D32] text-[14px] lg:text-[20px]">Meet the BEA Team Members</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-[48px]">
                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/cto.png'} className="w-full rounded-t-[4px]" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Ukpai  Chukwuemeka</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Co-Founder / CTO</p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">
                                <a href="https://instagram.com/officialaimes" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>

                                <a href="https://linkedin.com/in/ukpai" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>
                                <a href={'https://x.com/aimes_js'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/co-founder.jpg'} className="w-full rounded-t-[4px] h-[276px] object-cover" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Shaka (Osas) Wisdom</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Co-Founder</p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">

                                <a href="https://instagram.com/freedomng_" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>

                                <a href="https://www.linkedin.com/in/wisdom-shaka-b6a44023a/" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>
                                <a href={'https://x.com/'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/bea-ui-ux.png'} className="w-full rounded-t-[4px]" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Eze Chizoba</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Product Designer</p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">

                                <a href="https://instagram.com/ezeiam" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>
                                <a href="https://www.linkedin.com/in/eze-chizoba-741b50229/" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>

                                <a href={'https://x.com/'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/hr.png'} className="w-full rounded-t-[4px]" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Becky Ihejika</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Human Resources</p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">
                                <a href="https://instagram.com/be_ecky" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>

                                <a href="https://linkedin.com/in/" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>
                                <a href={'https://x.com/'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/legal.jpg'} className="w-full rounded-t-[4px] h-[276px] object-cover" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Vincent Ifechukwude Onukwu</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Legal Practitioner </p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">
                                <a href="https://instagram.com/" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>
                                <a href="https://linkedin.com/in/" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>


                                <a href={'https://x.com/'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-[274px] bg-white  rounded-[4px] cursor-pointer">
                        <Image loading={'lazy'} src={'/img/socials.jpg'} className="w-full rounded-t-[4px] h-[276px] object-cover" alt="" width={274} height={100} />
                        <div className="text-center mt-[9px] pb-[20px]">
                            <h4 className="text-[18px] font-medium text-[#292D32]">Doyinsola Akintola</h4>
                            <p className=" text-[12px] font-normal text-primary-800">Social Media Manager</p>
                            <div className="flex justify-center items-center gap-4 mt-[10px]">
                                <a href="https://instagram.com/" target="__blank">

                                    <Instagram className="w-[20px] h-[20px]" />
                                </a>

                                <a href="https://linkedin.com/in/" target="__blank">

                                    <LinkedIn className="w-[20px] h-[20px]" />
                                </a>
                                <a href={'https://x.com/'} target="__blank" >

                                    <X className="w-[20px] h-[20px] " />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>

        <Footer />
    </>
}


export default AboutUs