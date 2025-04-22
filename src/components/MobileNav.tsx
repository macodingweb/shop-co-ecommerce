"use client";

import { ListItemsData, UserActionsMobileMedia } from "@/constants/navbar";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenu, IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

export default function MobileNav() {
  const [ isActive, setIsActive ] = useState(false);
  const [ isOpened, setIsOpened ] = useState(false);

  return (
    <div className="container mx-auto p-4 items-center justify-between hidden max-lg:flex relative bg-white">
      
      {/* Search Container */}
      <form className={`search-container w-[90%] h-[50px] absolute transition-all shadow-md rounded-full font-sans -z-[1] ${ isOpened ? "top-[110%] opacity-100" : "top-0 opacity-0" }`}>
        <button type="submit" className="absolute text-neutral-400 top-2/4 -translate-y-2/4 left-3">
          <IoSearch size={22} />
        </button>
        <input type="text" name="search-query" placeholder="Search for products..." className="h-full w-full px-3 pl-12 outline-0 bg-neutral-100 rounded-full" />
      </form>


      <div className="logo-wrapper flex items-center gap-4">
        {/* Exhcnage btn */}
        <button onClick={() => {setIsActive(!isActive); setIsOpened(false)}} className="exchange-btn cursor-pointer w-[40px] h-[40px] flex items-center justify-center transition-all rounded-md hover:text-white hover:bg-black">
          { isActive ? ( 
            <IoClose size={32} />
          ) : (
            <IoMenu size={32} />
          ) }
        </button>

        {/* Logo */}
        <span className="logo font-black text-[32px]">SHOP.CO</span>
      </div>

      {/* User Actions */}
      <div className="user-actions flex items-center gap-4 font-sans">
        { UserActionsMobileMedia.map((ele, index) => (
          <React.Fragment key={index}>
            { ele.type === "href" ? <>
              <Link href={ele.href || ''} className="cursor-pointer">{ele.icon}</Link>
            </> : <>
              <button type="button" onClick={() => {setIsOpened(!isOpened); setIsActive(false);}} className="cursor-pointer">{ele.icon}</button>
            </> }
          </React.Fragment>
        )) }
      </div>

    <ul className={`main__list absolute font-sans top-full left-2/4 -translate-x-2/4 translate-y-4 h-fit max-lg:block overflow-hidden`}>
      <div className={`content flex items-center gap-4 flex-col bg-black rounded-md max-lg:w-[450px] transition-all max-sm:w-[320px] ${ isActive ? "max-lg:h-[224px] max-lg:p-6" : "max-lg:h-0 max-lg:p-0" }`}>
        { ListItemsData.map((ele, index) => (
          <li className="list__item w-fit px-2 py-1 " key={index}>
            <Link href={ele.href} className="hover:underline w-full text-white">{ele.text}</Link>
          </li>
        )) }
      </div>
    </ul>

    </div>
  )
}