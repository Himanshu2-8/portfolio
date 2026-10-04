import SidePanel from "./components/app/SidePanel"

export function App() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      <SidePanel />
      <main className="flex-1">...</main>
    </div>
  )
}

export default App
