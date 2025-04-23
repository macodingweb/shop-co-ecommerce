import BrowseBy from "@/components/BrowseBy";
import Landing from "@/components/Landing";
import NewArrivals from "@/components/NewArrivals";
import OurHappyCustomers from "@/components/OurHappyCustomers";
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
      <OurHappyCustomers />
    </>
  )
}