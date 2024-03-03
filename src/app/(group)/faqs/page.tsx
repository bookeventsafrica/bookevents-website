import Accordion from "@/components/accordion"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'FAQs | Book Events Africa',
    description: 'Frequently asked questions',
}


let faqs = [{
    title: 'How do i buy ticket on bookevents.africa?',
    content: <>
        <p className="font-normal text-[18px] text-[#707070] m-0">
            Tickets for events can be purchased via bookeventsafrica.com website. Go to the event you’d like to purchase tickets for and on that event page, both free, online and paid tickets will be clearly marked.
        </p>
    </>
}, {
    title: 'How do I make money from bookeventsafrica?',
    content: <>
        <p className="font-normal text-[18px] text-[#707070] m-0">
            By signing up for an organizer account/hosting events. sign up today
        </p>
    </>
}]

function FAQ() {
    return <>
        <Navbar />

        <section className="md:px-[100px] bg-[#F1F2F6] md:py-[56px]">
            <h3 className="text-center text-[35px] font-bold text-[#292D32] mb-[54px]">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => {
                return <Accordion title={faq.title} content={faq.content} index={index} key={index} />
            })}

            <div className="w-full md:w-[708px] mx-auto mt-[30px] md:mt-[60px]">
                <h4 className="text-center font-bold text-[25px] text-[#292D32]">Still have a question?</h4>
                <p className="font-normal text-[18px] mt-[24px] text-[#292D32] text-center">If you cannot find the answer to the question on our FAQ, you can always {" "}
                    contact at   <a href="mailto:support@bookevents.africa" className="text-primary-800 text-underline">
                        support@bookevents.africa
                    </a> . We will give you a response swiftly. </p>
            </div>
        </section>

        <Footer />
    </>
}


export default FAQ