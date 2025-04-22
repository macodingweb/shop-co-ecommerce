import { landingData } from "@/constants/landing";
import Image from "next/image";

export default function Landing() {
  return (
    <section className="landing p-14 bg-[#F2F0F1] pb-0 max-md:p-0">
      <div className="container mx-auto flex items-center justify-between max-lg:flex-col max-lg:justify-center">
        <div className="left-section grid gap-8 w-1/2 max-lg:w-full pb-8 max-md:px-8 max-md:py-8">
          <h1 className="title text-[54px] font-bold leading-[1] whitespace-nowrap max-md:text-[38px]">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</h1>
          <p className="desc text-[15px] leading-[1.6] text-slate-500 font-light font-sans">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className="shop-now transition-all border-2 border-solid border-black hover:bg-transparent hover:text-black hover:font-semibold py-4 px-14 max-md:w-full bg-black rounded-full text-[18px] font-[300] text-white w-fit cursor-pointer font-sans">Shop Now</button>
          <div className="branding flex items-center gap-12 font-sans text-center max-md:justify-center max-md:flex-wrap">
            { landingData.map((ele, index) => (
              <div className="card grid" key={index}>
                <h2 className="count text-[32px] font-bold">{ele.count}</h2>
                <h3 className="title text-[14px] text-slate-500">{ele.title}</h3>
              </div>
            )) }
          </div>
        </div>
        <div className="right-section relative w-fit max-sm:w-full h-full">
          <div className="start w-[50px] absolute top-2/6 -left-1/6 max-md:left-0">
            <Image src={"/landing/small-star.png"} alt="star" width={300} height={0} className="w-full h-full" />
          </div>
          <div className="start w-[80px] absolute top-0 right-0">
            <Image src={"/landing/large-star.png"} alt="star" width={300} height={0} className="w-full h-full" />
          </div>
          <Image src={"/landing/landing-img.svg"} alt="Landing Image" width={1000} height={0} className="w-full h-full max-sm:object-cover" />
        </div>
      </div>
    </section>
  )
}