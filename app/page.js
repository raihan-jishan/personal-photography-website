import Hero from "@/components/Hero";
import Instragram from "@/components/Instragram";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { SliderData } from "@/utils/constance";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Slider slides={SliderData} />
      <Instragram />
    </main>
  );
}
