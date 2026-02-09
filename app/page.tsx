import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Framework from "@/components/Framework";
import Services from "@/components/Services";
import Topics from "@/components/Topics";
import PressKit from "@/components/PressKit";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Framework />
      <Services />
      <Topics />
      <PressKit />
      <Booking />
      <Footer />
    </>
  );
}