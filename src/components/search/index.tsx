'use client';
import { useRouter } from 'next/navigation'
import Button from '../button'
import SearchIcon from '/public/svg/search.svg'
import { useState } from 'react';
import { TypeEventsEnum } from '../events/type-events';

export default function Search({ searchTerm }: { searchTerm?: string }) {
    const router = useRouter();
    const [value, setValue] = useState(searchTerm || '');

    function handleSearch() {
        router.push(`/discovery?type=${TypeEventsEnum.DISCOVER_EVENTS}&s=${value}`)
    }

    return <div className='flex bg-white lg:h-min-[70px] rounded-[8px] items-center  mt-[50px] lg:mt-[76px] flex-wrap px-1 lg:p-[10px]'>

        <div className='flex items-center flex-wrap justify-between flex-1'>

            {/* search input */}
            <div className='flex items-center  flex-1 p-[11px]'>
                <SearchIcon className="text-[#959595] hidden lg:block" />
                <input type='text' placeholder='Search for Events' className='outline-none w-full text-[#292D32] lg:pl-[25px]' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
        {/* button */}
        <SearchIcon className="text-primary-800 block lg:hidden cursor-pointer" onClick={handleSearch} />

        <Button variant="primary" className="hidden lg:block text-[16px] font-medium rounded-[8px]" onClick={handleSearch}>Find Event</Button>
    </div>

}


