"use client";

import Link from "next/link";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function OfferAlert() {
  const [ isClosed, setIsClosed ] = useState(false);

  return (
    <div className="alert w-full bg-neutral-950 relative font-sans">
      <button onClick={() => setIsClosed(true)} type="button" className="absolute top-2/4 -translate-y-2/4 right-2 cursor-pointer text-white">
        <IoMdClose size={18} />
      </button>

      { !isClosed && (
        <div className="container mx-auto py-3 text-white flex items-center justify-center max-md:text-[12px]">
          <span className="font-light mr-1.5">Sign up and get 20% off to your first order.</span>
          <Link href={"/"} className="font-semibold underline">Sign Up Now</Link>
        </div>
      ) }
    </div>
  )
}