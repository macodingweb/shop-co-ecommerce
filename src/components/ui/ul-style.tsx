import Link from "next/link";

type ListItem = {
  text: string;
  href: string;
}

type Data = {
  title: string;
  items: ListItem[];
}

export function UlStyle({ data } : { data: Data }) {
  return (
    <div className="sub-list">
      <h3 className="title font-semibold text-[18px] mb-4">{data.title}</h3>
      <ul className="sub-list grid gap-2 font-light">
        { data.items.map((ele, index) => (
          <li className="list-item" key={index}>
            <Link href={ele.href} className="hover:underline">{ele.text}</Link>
          </li>
        )) }
      </ul>
    </div>
  )
}