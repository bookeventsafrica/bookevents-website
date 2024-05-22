'use client' // Error components must be Client Components

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter()
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <Navbar />
            <hr className="text-[#f3f3f3]" />

            <section className='flex justify-center items-center flex-col my-[10rem]'>
                <h2 className='text-[24px] mb-5'>Hey!, Something went wrong!</h2>
                <button
                className='bg-primary-800 text-white px-5 py-2 rounded-md'
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        ()=> router.push('/')
                    }
                >
                   Go back Home
                </button>
            </section>
            <hr className="text-[#f3f3f3]" />

            <Footer />
        </div>
    )
}