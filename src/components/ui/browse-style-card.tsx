import Image from "next/image"
import Link from "next/link";

type Data = {
  title: string;
  img: string;
  width?: string;
}

export default function BrowseByCard({ data } : { data: Data }) {
  return (
    <Link href={"/"} className={`card bg-white rounded-2xl h-[220px] z-[50] overflow-hidden flex relative font-sans ${data.width || 'col-span-2'} max-lg:col-span-1 transition-all hover:scale-95 hover:shadow-xl`}>
      <h3 className="title text-[24px] p-6 font-bold">{data.title}</h3>
      <Image src={data.img} alt="Card image" width={1024} height={0} className="w-fit h-full object-cover z-[-1] absolute right-0 top-0"  />
    </Link>
  )
}