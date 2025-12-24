import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import Story from "./Pages/Story"
import Dates from "./Pages/Dates"
import Together from "./Pages/Together"
import Events from "./Pages/Events"


export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/story" element={<Story />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/together" element={<Together />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  )
}
