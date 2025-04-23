import { FaStar } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

type Data = {
  rating: number;
  customer: string;
  verified: boolean;
  content: string;
}

export default function TestimonialCard({ data } : { data: Data }) {
  return (
    <div className="testimonial-card w-[400px] font-sans p-6 bg-white border border-neutral-200 rounded-xl grid gap-3 max-sm:max-w-[340px]">
      <div className="ratings flex items-center gap-1.5 text-yellow-400">
        { [...Array(data.rating)].map((_, index) => (
          <div className="star" key={index}>
            <FaStar size={18} />
          </div>
        )) }
      </div>
      <h3 className="customer flex items-center gap-3 text-[20px] font-bold select-none">
        {data.customer}
        { data.verified && (
          <IoIosCheckmarkCircle size={20} className="text-green-500" />
        ) }
      </h3>
      <p className="content leading-[1.7] font-light text-neutral-800 select-none">{'"'}{data.content}{'"'}</p>
    </div>
  )
}