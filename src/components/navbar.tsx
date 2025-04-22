"use client";

import { ListItemsData, UserActions } from "@/constants/navbar";
import MainList from "./ui/main-list";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {    
  return (
    <nav className="nav__bar w-full bg-white shadow-md relative z-[9999]">

      <div className="container mx-auto p-4 flex items-center justify-center gap-8 max-lg:hidden">

        {/* Logo */}
        <span className="logo font-black text-[32px]">SHOP.CO</span>

        {/* Main List */}
        <MainList items={ListItemsData} />

        {/* Search Container */}
        <form className="search-container w-[40%] h-[50px] relative font-sans">
          <button type="submit" className="absolute text-neutral-400 top-2/4 -translate-y-2/4 left-3">
            <IoSearch size={22} />
          </button>
          <input type="text" name="search-query" placeholder="Search for products..." className="h-full w-full px-3 pl-12 outline-0 bg-neutral-100 rounded-full" />
        </form>

        {/* User Actions */}
        <div className="user-actions-wrapper flex items-center gap-4  font-sans">
          { UserActions.map((ele, index) => (
            <Link href={ele.href} key={index}>{ele.icon}</Link>
          )) }
        </div>

      </div>

      <MobileNav />
    </nav>
  )
}