import Instagram from '/public/svg/socials/instagram.svg';
import Twitter from '/public/svg/socials/twitter.svg'
import LinkedIn from '/public/svg/socials/linkedin.svg'
import Rss from '/public/svg/socials/rss.svg'
import Image from 'next/image';

export default function Footer() {
  return <footer className=" bg-white footer">
    <div className="px-[2rem] py-[10px] md:px-[6.18rem] md:py-[41px] gap-[40px] md:gap-[164px] flex flex-col md:flex-row flex-wrap">
      <div className="">
        <Image src={'/logo.png'} alt="bookEventsAfrica_logo" width={200} height={64} />

      </div>
      {/*  */}
      <div className="text-primary-800 flex justify-between flex-1 flex-col md:flex-row gap-[20px] md:gap-0 flex-wrap">
        <div>
          <h3 className="text-primary-800 mb-6 font-bold text-[18px]">Products</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
            <span>Voting Coming SOON !</span>
            <span>Ticket Sales</span>
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className="text-primary mb-6 font-bold text-[18px]">Company</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
            <span>About Us</span>
            <span>Contact Us</span>
            <span>Blog</span>
            <span>FAQ</span>
            <span>Team</span>
          </div>
        </div>
        {/*  */}
        <div>
          <h3 className="text-primary mb-6 font-bold text-[18px]">Connect With Us</h3>
          <div className="flex flex-col gap-y-6 text-[14px] cursor-pointer">
            {/* <a href='mailto:support@bookevents.africa'>
            <span className='flex'>support@bookevents.africa</span>
            </a> */}
            <a href='https://instagram.com/bookeventsafrica'>
              <span className='flex gap-2 items-center'>
                <Instagram className="" />
                Instagram</span>
            </a>
            <a href=''>
              <span className='flex gap-2 items-center'>
                <Twitter className="" />
                Twitter</span>
            </a>
            <a href=''>

              <span className='flex gap-2 items-center'>
                <LinkedIn className="" />
                LinkedIn</span>

            </a>
          </div>
        </div>

      </div>
    </div>
    <div className='text-primary-800 font-[500] text-[14px] flex justify-center py-[50px]'>
      &copy;Copyright 2024. All rights reserved. CAC NO: 7411380
    </div>

  </footer>
}
