import BrowseBy from "@/components/BrowseBy";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import NewArrivals from "@/components/NewArrivals";
import Partners from "@/components/Partners";
import TopSelling from "@/components/TopSelling";

export default function Page() {
  return (
    <>
      <Landing />
      <Partners />
      <NewArrivals />
      <TopSelling />
      <BrowseBy />
      <Footer />
    </>
  )
}