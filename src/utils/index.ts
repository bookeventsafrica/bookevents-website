import moment from "moment";

export const formatMoney = (n: number | string) => {
  if (typeof n === "string") return;
  return new Intl.NumberFormat().format(n);
};

export const formatDate = (d: string) => {
  return moment(d).format("MMM");
};

enum EventType {
  ONLINE = "ONLINE",
  PHYSICAL = "PHYSICAL",
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

  slug: string;

  isAttendeeCharged: boolean;

  percentage: string;

  allowPhoneInput: boolean;
}

export function isEventPast(eventDateStr: string) {
  // const eventDate = new Date(eventDateStr);
  // const today = new Date();
  // return eventDate < today;

  const eventDate = new Date(eventDateStr);
  // Add 20 hours to the event date
  eventDate.setHours(eventDate.getHours() + 20);
  const today = new Date();
  return eventDate < today;
}

type DebouncedFunction<F extends (...args: any[]) => any> = (
  ...args: Parameters<F>
) => void | Promise<void>; // Allow both void and Promise return types

export function debounce<F extends (...args: any[]) => any>(
  func: F,
  delay: number
): DebouncedFunction<F> {
  let timeout: any;

  return (...args: Parameters<F>) => {
    clearTimeout(timeout); // Type assertion to cast to number
    timeout = setTimeout(() => func(...args), delay);
  };
}
