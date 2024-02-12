

export default function Item() {
    return <article className="w-full bg-white cursor-pointer relative rounded-[16px]">
        <a href="/event/slug">
            <div
                className="h-[220px] object-cover object-[center_top] w-full rounded-t-[16px]"
                style={{
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(/img/example-src.png), lightgray 50% / cover no-repeat'
                }}

            ></div>
        </a>
        <div className="top-0 px-[22px] py-[19px] absolute">
            <div className="bg-white py-[4px] px-[14px] rounded-[6px] text-[16px] font-[500] text-[#000]">
                Online
            </div>

            <div></div>
        </div>

        <a href="" className="no-underline">
            <div className="px-[20px] py-[15px] flex items-start gap-[20px]">
                <div className="flex flex-col">
                    <h5 className="font-[700] text-[16px] text-primary-800 m-0">JAN</h5>
                    <h3 className="text-[#000] font-[700] text-[25px] m-0">05</h3>

                    <h6 className="!text-primary-800 text-[12px]">9:30 PM</h6>
                </div>

                <div className="flex flex-col gap-[12px] w-[200px]">
                    <span className="text-[16px] font-[700]  text-[#292D32] ">
                        Summer Party Event
                    </span>
                    <span className="text-[14px] font-[400] text-[#707070]">
                        Elegushi Beach Victoria Island,
                        Lagos State.
                    </span>
                </div>
            </div>
        </a>
    </article>
}