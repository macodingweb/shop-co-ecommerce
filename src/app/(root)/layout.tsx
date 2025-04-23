import Footer from "@/components/Footer";
import Navbar from "@/components/navbar";
import OfferAlert from "@/components/ui/offer-alert";

export default function RootLayout({ children } : Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-[100vh]">
      <OfferAlert />
      <Navbar />
      { children }
      <Footer />
    </main>
  )
}