import { clothesData } from "@/constants/new-arrivals";
import { ProductCard } from "./ui/product-card";
import { SectionTitle } from "./ui/section-title";
import { ViewMoreBtn } from "./ui/view-more-btn";

export default function NewArrivals() {
  return (
    <section className="new-arrivals">
      <SectionTitle text="new arrivals" />
      <div className="container mx-auto pb-14 max-lg:pb-10 max-md:pb-8 px-4">
        <div className="card-group grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          { clothesData.map((ele, index) => (
            <ProductCard data={ele} key={index} />
          )) }
        </div>
        <ViewMoreBtn href="/" />
      </div>
      <div className="divider w-full h-0.5 bg-slate-200"></div>
    </section>
  )
}