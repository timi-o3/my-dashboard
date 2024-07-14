import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Charts from "./components/chart"

export default function Home() {
  return (
    <>
    <div className="flex">
    <Sidebar/>
    <main className="flex-grow ml-64 relative">
          <Navbar />
          <Charts/>
    </main>
    </div>
    </>
  )
}