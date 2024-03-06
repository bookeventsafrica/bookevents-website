'use client';
import Button from "@/components/button"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { useState } from "react"
import axios from "axios";
import { useSearchParams } from "next/navigation";


function ConfirmTicket() {
    const searchParams = useSearchParams();
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)

    const handleVerification = async () => {
        const id = searchParams.get('id');
        try {
            setError('')
            setLoading(true)
            await axios.post(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/event/verify/${id}`, { uniqueCode: value });
            alert('Ticket Verified')
        } catch (err: any) {
            let message = err && err?.response && err.response.data.message
            if (message) {
                setError(message);
            }
        } finally {
            setLoading(false)
        }
    }

    return <>
        <Navbar />

        <section className="px-[1rem] md:px-[100px] bg-[#F1F2F6] py-[20px] md:py-[56px]">
            <p className="text-red-400 text-center mb-3 text-bold text-[18px]">{error}</p>
            <form className="flex  flex-col gap-4 px-2 md:px-0 w-full md:w-[451px] mx-auto" onSubmit={(e) => {
                e.preventDefault()
                handleVerification();
            }}>
                <div>
                    <input className="h-[40px] rounded-[8px] outline-none w-full px-3 font-400 text-[16px] text-[#000]" placeholder="Enter 6 digit verification code" onChange={(e) => setValue(e.target.value)} />
                </div>

                <Button className="rounded-[8px]" type="submit" disabled={loading}>Verify Ticket</Button>
            </form>
        </section>

        <Footer />
    </>
}


export default ConfirmTicket