import moment from "moment";

export const formatMoney = (n: number) => {
    return new Intl.NumberFormat().format(n);
  };

  export const formatDate = (d: string) => {
    return moment(d).format("MMM");
  };

