import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa6";

type Data = {
  img: string;
  text: string;
  rate: number;
  isDiscount: boolean;
  discount?: number;
  price: number;
}

export function ProductCard ({ data } : { data: Data }) {
  const starsCount = Math.floor(data.rate);
  const halfStar = data.rate - starsCount >= 0.5;

  return (
    <Link href={"/"} className="card">
      <div className="product-img w-full h-2/3 bg-[#F0EEED] rounded-lg overflow-hidden relative transition-all hover:scale-90 hover:rotate-12">
        <Image src={data.img} alt={data.text} width={300} height={0} className="w-fit object-cover mx-auto" />
      </div>
      <div className="product-info py-3 font-sans font-semibold grid gap-1">
        <h3 className="title">{data.text}</h3>
        <div className="rate flex items-center gap-2">
          <div className="stars flex items-center">
            { [...Array(starsCount)].map((_, index) => (
              <span className="star text-yellow-500" key={index}>
                <FaStar />
              </span>
            )) }
            { halfStar && (
              <span className="star text-yellow-500">
                <FaStarHalf />
              </span>
            ) }
          </div>
          <span className="rate-text font-[400]">{data.rate.toFixed(1)}<span className="text-slate-400">/5</span></span>
        </div>
        <div className="price flex items-center gap-2">
          <span className="now text-[26px] font-bold">&#x24;{ data.isDiscount ? (Math.floor((data.price - ((data.discount || 0) / 100) * data.price ))) : Math.floor(data.price) }</span>
          { data.isDiscount && (
            <>
              <span className="last-price text-[26px] font-bold text-slate-300 line-through">&#x24;{data.price}</span>
              <span className="discount text-[12px] py-1 px-2 bg-red-100 text-red-500 rounded-full">-{data.discount || 0}%</span>
            </>
          ) }
        </div>
      </div>
    </Link>
  )
}