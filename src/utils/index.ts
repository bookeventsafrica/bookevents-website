import moment from "moment";

export const formatMoney = (n: number) => {
    return new Intl.NumberFormat().format(n);
  };

  export const formatDate = (d: string) => {
    return moment(d).format("MMM");
  };




enum EventType {
  ONLINE = 'ONLINE',
  PHYSICAL = 'PHYSICAL',
}

export interface IEvent {
  _id: string;

  name: string;

  location?: string;

  details: string;

  categoryId: string;

  eventDate: string;

  eventTime: string;

  image: string;

  creatorId?: string;

  type: EventType;

  published: boolean;

  slug: string
}