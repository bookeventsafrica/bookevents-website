import React, { useState, SetStateAction } from 'react';

import axios from "axios";
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('../button'));


const Newsletter = ({ tag }: { tag?: string }) => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false)

    const handleChange = async (e: { target: { value: SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
      }
    

    const submit = async (e: { preventDefault: () => void; }) => {
        try {
            setLoading(true)
            e.preventDefault()
            await axios.post(`${process.env.NEXT_PUBLIC_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV : process.env.NEXT_PUBLIC_API_PROD}/newsletter/subscribe`, { email, tag })
            setMessage('Subscription successful')
            setLoading(false)
        } catch (err) {
            const error = err as any
            if (error.response.data) {
                setMessage(error.response.data.message)
            }
            console.error(err);
            setEmail('')
            setLoading(false)
        }
    }

    return <section className="relative">

        <img src="/newsletter.avif" className="w-full h-[332px]" alt="newsletter image" loading='lazy' width="300" height={"332"} />
        <div className="absolute  inset-0 flex justify-center align-middle items-center flex-col px-[10px]">
            <h2 className="font-bold text-[20px] lg:text-[30px] text-white  mb-[24px] text-center">Subscribe to our newsletter</h2>
            <p className="text-center font-normal text-white text-[12px]  lg:text-[14px] mb-[24px]">Sign Up to our newsletter to get update and offers delivered in your inbox</p>
            <div>
                <form className="flex  flex-col lg:flex-row items-center gap-4 px-2 lg:px-0" onSubmit={submit}>
                    <div className="w-[300px] lg:w-[451px]">
                        <input type="email" className="h-[40px] rounded-[8px] outline-none w-full px-3 font-400 text-[16px] text-[#959595]" placeholder="Enter email" required onChange={handleChange} />
                    </div>

                    <Button className="rounded-[4px]" type="submit" disabled={loading}>Subscribe</Button>

                </form>
                <p className="mt-4 text-white text-center">{message && message}</p>
            </div>
        </div>
    </section>;
}

export default Newsletter;