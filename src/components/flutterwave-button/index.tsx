
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { forwardRef } from "react";

enum TransactionType {
    TicketPurchase = 'TICKET PURCHASE',
    OrganizerDeposit = 'ORGANIZER DEPOSIT',
}

export default forwardRef(function CustomFlutterWaveButton({ amount, email, title, ticketId, eventId, qty, description, close, disabled, ...props }: any, ref) {

    const config = {
        public_key: process.env.NEXT_PUBLIC_ENV == 'production' ? process.env.NEXT_PUBLIC_FLW_KEY_LIVE! : process.env.NEXT_PUBLIC_FLW_KEY_TEST!,
        tx_ref: String(Date.now()),
        amount,
        currency: "NGN",
        payment_options: "card,mobilemoney,ussd",
        customer: {
            email: email,
            phone_number: '',
            name: `${JSON.stringify({
                eventId,
                ticketId,
                qty,
                'type': TransactionType.TicketPurchase
            })}`
        },
        customizations: {
            title,
            description,
            logo: "https://www.bookevents.africa/IMG_5268.png",
        },
    };
    const handleFlutterPayment = useFlutterwave(config);
    return <button  {...props} ref={ref} disabled={disabled} onClick={() => {
        props.onClick()
        handleFlutterPayment({
            callback: (response) => {
                closePaymentModal();
                close()
            },
            onClose: () => {
                close()
            },

        })
    }}>Pay Now</button>

})
