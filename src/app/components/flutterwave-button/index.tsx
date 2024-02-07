
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

export default function CustomFlutterWaveButton () {

    const config = {
        public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY_TEST ?? '',
        tx_ref: 'qwqew',
        amount: 10000,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: 'bookevents@gmail.com',
            phone_number: '+234509q23812341',
            name: 'UKPAI CHUKWUEMEKA',
        },
        customizations: {
            title: "my Payment Title",
            description: "Payment for items in cart",
            logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    return <button className="bg-primary-800 text-white p-2 rounded-[4px]" onClick={() =>
        handleFlutterPayment({
            callback: (response) => {
                closePaymentModal();
            },
            onClose: () => { },
        })}>Pay Now</button>

}
