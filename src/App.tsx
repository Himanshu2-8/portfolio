import Hero from "./components/app/Hero";
import Navbar from "./components/app/Navbar";
import SidePanel from "./components/app/SidePanel";
import Skills from "./components/app/Skills";

export default function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col lg:flex-row items-center lg:items-start gap-8 px-6 py-10 lg:px-10 max-w-275 mx-auto">
      {/* SidePanel stays sticky — never scrolls */}
      <SidePanel />

      {/* Only this panel scrolls */}
      <main className="relative flex-1 min-w-0 overflow-y-auto h-full scroll-pt-20 no-scrollbar">
        <Navbar />
        <Hero />
        <Skills />
      </main>
    </div>
  );
}