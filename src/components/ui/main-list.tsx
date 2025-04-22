import Link from "next/link";

type ListItem = {
  text: string;
  href: string;
}

type Data = ListItem[];

export default function MainList({ items } : { items: Data }) {
  return (
    <ul className="main__list flex items-center gap-2 font-sans">
      { items.map((ele, index) => (
        <li className="list__item w-fit px-2 py-1 " key={index}>
          <Link href={ele.href} className="hover:underline w-full whitespace-nowrap">{ele.text}</Link>
        </li>
      )) }
    </ul>
  )
}