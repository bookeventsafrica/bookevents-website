import Instagram from '/public/svg/socials/instagram.svg';
import Twitter from '/public/svg/socials/twitter.svg'
import LinkedIn from '/public/svg/socials/linkedin.svg'

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const appUrl = process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_APP_API_DEV + '/auth' : process.env.NEXT_PUBLIC_APP_API_PROD + '/auth';

  return <footer className=" bg-white footer">
    <div className="px-[2rem] py-[20px] lg:px-[6.18rem] lg:py-[40px] gap-[40px] lg:gap-[164px] flex flex-col lg:flex-row flex-wrap">
      <div className="">
        <Link href={'/'}>

          <Image src={'/logo.png'} alt="bookEventsAfrica_logo" width={200} height={64}    placeholder="blur" priority />
        </Link>
      </div>
      {/*  */}
      <div className="text-primary-800 flex justify-between flex-1 flex-col lg:flex-row gap-[20px] lg:gap-0 flex-wrap">
        <div>
          <h3 className="text-primary-800 mb-6 font-bold text-[18px]">Products</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
            <a href={appUrl}>
              <span>For Organizers</span>

            </a>
            <span>E-Voting Coming Soon !</span>
            <span>Event Promotions Coming Soon !</span>
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className="text-primary mb-6 font-bold text-[18px]">Company</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
          <Link href='/about-us'>
              <span>About Us</span>

            </Link>
            <Link href='/blog'>
              <span>Blog</span>

            </Link>
            <Link href='/faqs'>
              <span>FAQs</span>

            </Link>

            <Link href='/terms-and-conditions'>
              <span>Terms & Conditions</span>

            </Link>

            <Link href='/privacy-policy'>
              <span>Privacy Policy</span>
            </Link>

          </div>
        </div>
        {/*  */}
        <div>
          <h3 className="text-primary mb-6 font-bold text-[18px]">Connect With Us</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
            {/* <a href='mailto:support@bookevents.africa'>
            <span className='flex'>support@bookevents.africa</span>
            </a> */}
            <a href='https://instagram.com/bookeventsafrica' target='__blank'>
              <span className='flex gap-2 items-center'>
                <Instagram className="" />
                Instagram</span>
            </a>
            <a href='https://twitter.com/bookevents_inc' target='__blank'>
              <span className='flex gap-2 items-center'>
                <Twitter className="" />
                Twitter</span>
            </a>
            <a href='https://www.linkedin.com/company/book-events-africa' target='__blank'>

              <span className='flex gap-2 items-center'>
                <LinkedIn className="" />
                LinkedIn</span>

            </a>
          </div>
        </div>

      </div>
    </div>
    <div className='text-primary-800 font-[500] text-[14px] flex justify-center  pb-[25px] text-center'>
      &copy;Copyright 2024. All rights reserved. RC NO: 7411380
    </div>
    {/* <div className='text-primary-800 font-[500] text-[14px] flex justify-center py-[50px] text-center'>
      <a href=''>Terms & Condition</a>
      <a href=''>Privacy Policy</a>
    </div> */}
  </footer>
}
