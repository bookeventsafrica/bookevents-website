
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { forwardRef } from "react";

export default function CustomFlutterWaveButton({ amount, email, title, ticketId, eventId, qty, ...props }: any) {
    // ticketId={'2321323213'}
    // eventId={'12312'}
    // qty={values.quantity}

    const config = {
        public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY_TEST ?? '',
        tx_ref: String(Date.now()),
        amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: email,
            phone_number: '',
            name: '',
            eventId,
            ticketId,
            qty
        },
        customizations: {
            title,
            description: "",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    return <button className="" {...props} onClick={() =>
        handleFlutterPayment({
            callback: (response) => {
                closePaymentModal();
            },
            onClose: () => { },
        })}>Pay Now</button>

}
