import Hero from "./components/app/Hero"
import Navbar from "./components/app/Navbar"
import SidePanel from "./components/app/SidePanel"
import Skills from "./components/app/Skills"
import Achievements from "./components/app/Achievements"

export default function App() {
  return (
    <div className="mx-auto flex max-w-275 flex-col items-center gap-8 px-6 py-10 lg:h-screen lg:flex-row lg:items-start lg:overflow-hidden lg:px-10">
      {/* SidePanel stays sticky — never scrolls */}
      <SidePanel />

      {/* Only this panel scrolls on large screens; page scrolls on mobile */}
      <main className="relative no-scrollbar w-full min-w-0 flex-1 scroll-pt-20 lg:h-full lg:overflow-y-auto">
        <Navbar />
        <Hero />
        <Skills />
        <Achievements />
      </main>
    </div>
  )
}
