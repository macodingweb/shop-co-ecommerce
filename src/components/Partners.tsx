import { PartnersData } from "@/constants/partners";
import Image from "next/image";

export default function Partners() {
  return (
    <section className="partners w-full bg-black">
      <div className="container mx-auto p-6 max-md:px-2 flex items-center justify-between max-lg:justify-center max-lg:gap-6 flex-wrap">
        { PartnersData.map((ele, index) => (
          <div className="partner" key={index} title={ele.title}>
            <Image src={ele.logo} alt={ele.title} width={100} height={0} className="w-fit h-fit max-lg:w-[100px]" />
          </div>
        )) }
      </div>
    </section>
  )
}