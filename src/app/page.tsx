import CircleSvg from '/public/svg/circle.svg';
import axios from "axios";
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Newsletter from '@/components/newsletter';
import { TypeEventsEnum } from '../components/events/type-events';


const EventSection = dynamic(() => import("../components/events/type-events"));
const Search = dynamic(() => import('../components/search'));
const Navbar = dynamic(() => import('../components/navbar'));
const Footer = dynamic(() => import('../components/footer'));


export const revalidate = 1300;


const fetchCategories = async () => {
  try {
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/category`)
    return data
  } catch (err) {

  }
}

export default async function Home() {


  const categories: any[] = await fetchCategories()
  // const events: IEvent[] = await fetch()




  return (
    <>
      {/* banner */}
      <div className=" bg-hero-home bg-no-repeat w-full h-[704px] lg:bg-cover  text-white bg-center">
        <Navbar />


        <div className="mt-[92px]  px-[2rem] lg:px-[6.188rem] lg:py-[0.75rem] ">
          <h2 className=" mx-auto text-center w-auto lg:w-[800px] text-[25px] lg:text-[50px] font-[700]">Book Events Africa, your gateway to   <span className="relative">
            <CircleSvg className="absolute lg:-left-[138px] circleText hidden lg:block" />
            unforgettable experiences
          </span> </h2>
          <p className="mx-auto  text-center w-auto lg:w-[620px] text-[14px] lg:text-[18px] mt-[24px] font-[400] mb-[48px]">
            We curate extraordinary events that cater to diverse interests. From electrifying concerts and captivating workshops to thought-provoking conferences and immersive exhibitions, we offer something for everyone.
          </p>

          {/* <div className="flex justify-center">
            <Button variant="primary" className="font-medium text-[16px] rounded-[8px] py-[10px] px-[24px]">Create an Event</Button>

          </div> */}
          {/*  */}

          <Search />

        </div>
      </div>
      <main >
        <section className="px-[10px] lg:px-[6.18rem] my-[49px] cursor-pointer">
          <h3 className="mb-[54px]">Browse by category</h3>
          <div className="flex gap-[17px] flex-wrap justify-center lg:justify-between mb-[10px]">

            {categories?.length > 0 && categories.map((category: any) => {
              return <Link href={`/discovery?category=${category._id}&type=${TypeEventsEnum.DISCOVER_EVENTS}`} key={category._id}>
                <div className={`w-[165px] h-[165px] rounded-full bg-no-repeat flex justify-center items-center text-white bg-cover`} style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)), url(${category.image})`
                }}>

                  <span className="text-center">{category.name}</span>
                </div>
              </Link>
            })}

          </div>

        </section>


        <EventSection type={TypeEventsEnum.UPCOMING_EVENTS} />
        <EventSection type={TypeEventsEnum.PAST_EVENTS} />

        <Newsletter />
      </main>
      <Footer />

    </>

  )
}
