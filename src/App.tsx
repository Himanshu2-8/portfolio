import Hero from "./components/app/Hero";
import Navbar from "./components/app/Navbar";
import SidePanel from "./components/app/SidePanel";
import Skills from "./components/app/Skills";
import Achievements from "./components/app/Achievements";

export default function App() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 py-10 lg:px-10 max-w-275 mx-auto lg:h-screen lg:overflow-hidden">
      {/* SidePanel stays sticky — never scrolls */}
      <SidePanel />

      {/* Only this panel scrolls on large screens; page scrolls on mobile */}
      <main className="relative w-full flex-1 min-w-0 lg:overflow-y-auto lg:h-full scroll-pt-20 no-scrollbar">
        <Navbar />
        <Hero />
        <Skills />
        <Achievements />
      </main>
    </div>
  );
}
