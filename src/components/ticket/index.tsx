import { formatMoney } from "@/utils";


export interface TicketProps {
    selectedTicket: ITicket,
    select: (id: ITicket) => void;
    tickets: ITicket[]
}

export enum TicketPlan {
    FREE = 'FREE',
    PAID = 'PAID',
}

export enum TicketType {
    GROUP = 'GROUP',
    SINGLE = 'SINGLE',
}

export interface ITicket {
    _id: string;

    name: string;

    ticketPlan: TicketPlan;

    ticketType: TicketType;

    eventId: string;

    admits?: number;

    price?: number;

    totalRegistered: number;

    limit: number;

    available?: boolean;

    limitReached?: boolean

    deleted?: boolean
}

export default function Ticket({ selectedTicket, select, tickets }: TicketProps) {
    return <div className='mt-6'>
        <div className="flex mt-2 gap-4 flex-col lg:flex-row">
            {tickets.filter(ticket => !ticket.deleted ).map(ticket => {
                return <div className={`${selectedTicket?._id == ticket._id && 'border-primary-800 border border-1.5'} flex flex-col justify-center bg-[#F1F1F1] p-3 text-center rounded-[4px]  w-full lg:w-[120px]`} key={ticket._id} onClick={() => select(ticket)}>
                    <p className="font-400 text-[12px]">{ticket.name}</p>
                   {ticket.price  ? <p className="text-[14px] font-500">{formatMoney(ticket.price!)}</p> : <p className="text-[14px] font-500">{ticket.ticketPlan}</p> }
                    <p className="font-400 text-[12px]">Admits {ticket?.admits ? ticket.admits : 1}</p>
                </div>
            })}



        </div>

    </div>

}


