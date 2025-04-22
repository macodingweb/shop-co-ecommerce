"use client";

import { LuShoppingCart } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export const ListItemsData = [
  {
    text: "Shop",
    href: "/shop",
  },
  {
    text: "On Sale",
    href: "/on-sale",
  },
  {
    text: "New Arrivals",
    href: "/new-arrivals",
  },
  {
    text: "Brands",
    href: "/brands",
  },
]

export const UserActions = [
  {
    icon: <LuShoppingCart size={22} />,
    href: "/cart",
  },
  {
    icon: <FaRegUserCircle size={22} />,
    href: "/profile",
  },
]

export const UserActionsMobileMedia = [
  {
    icon: <IoSearchOutline size={24} />,
    type: "button",
    content: "search-bar",
  },
  {
    icon: <LuShoppingCart size={24} />,
    type: "href",
    content: "user-cart",
    href: "/cart",
  },
  {
    icon: <FaRegUserCircle size={24} />,
    type: "href",
    content: "user-profile",
    href: "/user-profile",
  },
]