import { useRouter } from 'next/navigation'
import Button from '../button'
import Location from '/public/svg/map-pin.svg'
import SearchIcon from '/public/svg/search.svg'
import { useState } from 'react';
// import ArrowDown from '/public/svg/arrow-down.svg'

export default function Search({ searchTerm }: { searchTerm?: string }) {
    const router = useRouter();
    const [value, setValue] = useState(searchTerm || '');

    function handleSearch() {
        router.push(`/discovery?s=${value}`)
    }

    return <div className='flex bg-white md:h-min-[70px] rounded-[8px] items-center  mt-[50px] md:mt-[76px] flex-wrap px-1 md:p-[10px]'>

        <div className='flex items-center flex-wrap justify-between flex-1'>

            {/* search input */}
            <div className='flex items-center  flex-1 p-[11px]'>
                <SearchIcon className="text-[#959595] hidden md:block" />
                <input type='text' placeholder='Search for Events' className='outline-none w-full text-[#292D32] md:pl-[25px]' value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
        </div>
        {/* button */}
        <SearchIcon className="text-primary-800 block md:hidden cursor-pointer" onClick={handleSearch} />

        <Button variant="primary" className="hidden md:block text-[16px] font-medium rounded-[8px]" onClick={handleSearch}>Find Event</Button>
    </div>

}


