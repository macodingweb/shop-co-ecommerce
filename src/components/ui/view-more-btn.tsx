import Link from "next/link";

export function ViewMoreBtn({ href } : { href: string }) {
  return (
    <Link href={href} className="block w-fit mx-auto mt-6 font-sans font-semibold py-3 px-14 border-2 border-solid border-slate-200 rounded-full transition-all hover:bg-black hover:text-white">View All</Link>
  )
}