export const cls = (input: string) =>
    input
        .replace(/\s+/gm, " ")
        .split(" ")
        .filter((cond) => typeof cond === "string")
        .join(" ")
        .trim();


export const APP_API = 'https://app.bookevents.africa/register'