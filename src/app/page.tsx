import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Team from "./components/Team";
import BookingForm from "./components/BookingForm";
import Impressions from "./components/Impressions";
import About from "./components/About";
import Footer from "./components/Footer";
import { getBlurData } from "../../lib/getBlurData";

export default async function Home() {
  const blurDataURL = await getBlurData("images/massage.jpg");
  return (
    <>
      <Navbar />
      <HeroSection blurDataURL={blurDataURL} />
      <About />
      <Services />
      <Team />
      <BookingForm />
      <Impressions />
      <Footer />
    </>
  );
}
