import { API } from "@/utils";
import { Metadata } from "next";

interface Props  {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params }: any): Promise<Metadata> {
  // read route params
  const url = `${API}/event/${params.id}`

  // fetch data
  const [data] = await fetch(url).then((res) => res.json());

    const event = data;

  return {
    title: event.name,
    description: event.details,
    openGraph: {
      images: event.image
    },
  };
}


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}