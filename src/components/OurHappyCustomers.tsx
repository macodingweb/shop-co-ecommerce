"use client";

import { Testimonials } from "@/constants/testimonials";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import TestimonialCard from "./ui/testimonial-card";
import { useRef } from "react";

export default function OurHappyCustomers() {
  const CardGroup = useRef<HTMLDivElement>(null);

  return (
    <section className="our-happy-customers">
      <div className="container mx-auto px-4">
        <div className="controls flex items-center justify-between mb-6">
          <h1 className="title text-[38px] font-bold max-md:text-[24px]">our happy customers</h1>
          <div className="user-controls flex items-center gap-3">
            <button onClick={() => CardGroup.current?.scrollBy({ left: -360, behavior: "smooth" })} type="button" className="left cursor-pointer w-[40px] h-[40px] transition-all hover:bg-neutral-200 flex items-center justify-center rounded-full">
              <FaArrowLeftLong size={18} />
            </button>
            <button onClick={() => CardGroup.current?.scrollBy({ left: 360, behavior: "smooth" })} type="button" className="right cursor-pointer w-[40px] h-[40px] transition-all hover:bg-neutral-200 flex items-center justify-center rounded-full">
              <FaArrowRightLong size={18} />
            </button>
          </div>
        </div>

        <div ref={CardGroup} className="card-group w-full overflow-x-auto scrollbar-hide">
          <div className="group w-fit flex items-center gap-6">
            { Testimonials.map((ele, index) => (
              <TestimonialCard data={ele} key={index} />
            )) }
          </div>
        </div>
      </div>
    </section>
  )
}