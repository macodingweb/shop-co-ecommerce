import { BrowseByCards } from "@/constants/browse-by";
import BrowseByCard from "./ui/browse-style-card";

export default function BrowseBy() {
  return (
    <section className="browse-by px-4 mb-12">
      <div className="container rounded-3xl bg-[#F0F0F0] px-8 max-md:px-4 max-md:py-8 py-14 mx-auto">
        <h1 className="title text-[46px] font-black mb-8 text-center max-md:text-[26px]">browse by dress style</h1>
        <div className="card-group grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 relative">
          { BrowseByCards.map((ele, index) => (
            <BrowseByCard data={ele} key={index} />
          )) }
        </div>
      </div>
    </section>
  )
}