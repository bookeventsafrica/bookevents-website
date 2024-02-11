

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

    sold?: number;

    available?: boolean;
}

export default function Ticket({ selectedTicket, select, tickets }: TicketProps) {

    return <div className='mt-6'>

        {/* <h6 className="font-400 text-[14px] text-[#292D32]">Tickets</h6> */}

        <div className="flex mt-2 gap-4">
            {tickets.filter(ticket => ticket.available).map(ticket => {
                return <div className={`${selectedTicket?._id == ticket._id && 'border-primary-800 border border-1.5'} flex flex-col justify-center bg-[#F1F1F1] px-10 py-1 text-center rounded-[4px]`} key={ticket._id} onClick={() => select(ticket)}>
                    <p className="font-400 text-[12px]">{ticket.name}</p>
                    <p className="text-[14px] font-500">{ticket.price || ticket.ticketPlan}</p>
                    {ticket.admits && <p className="font-400 text-[12px]">Admits {ticket.admits}</p>}
                </div>
            })}



        </div>

    </div>

}

