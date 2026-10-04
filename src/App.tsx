import Hero from "./components/app/Hero";
import SidePanel from "./components/app/SidePanel";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 lg:px-10">
      <div className="w-full max-w-[1100px]">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <SidePanel />

          <main className="flex-1 min-w-0">
            {/* sections */}
            <Hero />
          </main>
        </div>
      </div>
    </div>
  );
}