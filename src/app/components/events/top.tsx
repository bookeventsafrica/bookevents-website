import Image from "next/image"


interface TopProps {
    imgSrc: string,
    name?: string
}

export default function Top({ imgSrc, name }: TopProps) {
    return <Image src={imgSrc} alt={name ?? ''} width="100" height="100" className="w-full rounded-md" />
}