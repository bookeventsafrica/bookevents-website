import { Metadata } from "next";

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const url = `${process.env.NEXT_PUBLIC_API}/event/${params.id}`

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