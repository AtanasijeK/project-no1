import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Team from "./components/Team";
import BookingForm from "./components/BookingForm";
import Impressions from "./components/Impressions";
import About from "./components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Team />
      <BookingForm />
      <Impressions />
    </>
  );
}
