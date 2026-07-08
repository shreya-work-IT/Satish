import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Capabilities } from "./sections/Capabilities/Capabilities";
import { Transformation } from "./sections/Transformation/Transformation";
import { ProcessFlow } from "./sections/ProcessFlow/ProcessFlow";
import { Roadmap } from "./sections/Roadmap/Roadmap";
import { AI } from "./sections/AI/AI";
import { Architecture } from "./sections/Architecture/Architecture";
import { CTA } from "./sections/CTA/CTA";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Capabilities />
        <Transformation />
        <ProcessFlow />
        <Roadmap />
        <AI />
        <Architecture />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
