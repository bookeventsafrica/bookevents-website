import Button from '../button'
import Location from '/public/svg/map-pin.svg'
import SearchIcon from '/public/svg/search.svg'
// import ArrowDown from '/public/svg/arrow-down.svg'

export default function Search() {

    return <div className='flex bg-white md:h-min-[70px] rounded-[8px] items-center  mt-[76px] flex-wrap px-1 md:p-[10px]'>

        <div className='flex items-center flex-wrap justify-between flex-1'>

            {/* search input */}
            <div className='flex items-center  flex-1 p-[11px]'>
                <SearchIcon className="text-[#959595] hidden md:block" />
                <input type='text' placeholder='Search for Events' className='outline-none w-full text-[#292D32] md:pl-[25px]' />
            </div>
        </div>
        {/* button */}
        <SearchIcon className="text-primary-800 block md:hidden cursor-pointer" />

        <Button variant="primary" className="hidden md:block text-[16px] font-medium rounded-[8px]">Find Event</Button>
    </div>

}


