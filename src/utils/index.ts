import moment from "moment";

export const formatMoney = (n: number) => {
    return new Intl.NumberFormat().format(n);
  };

  export const formatDate = (d: string) => {
    return moment(d).format("MMM");
  };


  export const API = process.env.NODE_ENV == 'production' ? process.env.NEXT_PUBLIC_API_PROD : process.env.NEXT_PUBLIC_API_DEV