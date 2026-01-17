import Hero from "../app/components/hero";
import About from "./components/about";
import BMI from "./components/bmi";
import Contact from "./components/Contact";
import Membership from "./components/membership";
import Nutrition from "./components/nutrition";
import Programs from "./components/programs";
import Timing from "./components/timings";
import Trainers from "./components/trainers";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Hero />
      <About/>
      <BMI/>
      <Nutrition/>
      <Programs/>
      <Timing/>
      <Membership/>
      <Trainers/>
      <Contact/>
    </main>
  );
}
