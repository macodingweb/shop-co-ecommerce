import { FooterLists, PaymentMethods, SocialLinks } from "@/constants/footer";
import Link from "next/link";
import { UlStyle } from "./ui/ul-style";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F0F0] mt-[140px]">
      <div className="container pb-14 mx-auto px-4 relative">
        <form className="contact-form p-8 w-full max-lg:flex-col max-lg:gap-4 -translate-y-2/4 max-lg:-translate-y-1/4 flex items-center justify-between rounded-2xl bg-black">
          <div className="title text-white font-bold text-[26px] max-lg:text-[22px]">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</div>
          <div className="form-group w-[350px] max-lg:w-full grid gap-4 font-sans">
            <div className="group h-[45px] bg-white rounded-full flex items-center">
              <div className="icon text-neutral-500 h-[45px] px-3 w-fit flex items-center justify-center">
                <MdOutlineMail size={22} />
              </div>
              <input type="email" name="email" id="email" className="w-full h-[45px] px-3 outline-0" placeholder="Enter your email address" />
            </div>
            <input type="submit" value="Subscribe To Newsletter" className="w-full cursor-pointer transition-all hover:bg-transparent hover:text-white border-2 border-solid border-white h-[45px] text-center rounded-full bg-white text-black" />
          </div>
        </form>
        <div className="content flex items-center justify-between gap-12 max-lg:flex-col max-lg:gap-6">
          <div className="logo-container grid gap-4">
            {/* Logo */}
            <span className="logo font-black text-[32px]">SHOP.CO</span>
            <p className="desc font-sans leading-[1.6] text-slate-500">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="social-links flex items-center gap-3">
              { SocialLinks.map((ele, index) => (
                <Link href={ele.href} key={index} className="w-[35px] h-[35px] border bg-white border-slate-500 transition-all hover:text-white  hover:bg-black hover:border-black flex items-center justify-center rounded-full">{ele.icon}</Link>
              )) }
            </div>
          </div>
          <div className="ul-group flex items-center justify-between w-full font-sans max-md:grid max-md:grid-cols-2 gap-6">
            { FooterLists.map((ele, index) => (
              <UlStyle data={ele} key={index} />
            )) }
          </div>
        </div>
        <div className="divider w-full h-[1px] bg-neutral-300 mt-10 mb-4"></div>
        <div className="content flex items-center justify-between max-md:flex-col max-md:justify-center max-md:gap-3">
          <div className="copyrights font-sans text-neutral-400 font-light">Shop.co &copy; 2000-2023, All Rights Reserved</div>
          <div className="payment-methods flex items-center gap-3">
            { PaymentMethods.map((ele, index) => (
              <div className="payment-card bg-white rounded-md py-2 px-3" title={ele.title} key={index}>
                <Image src={ele.logo} alt={ele.title} width={100} height={0} className="w-fit h-fit"  />
              </div>
            )) }
          </div>
        </div>
      </div>
    </footer>
  );
}
