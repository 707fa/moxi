import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-love-gradient backdrop-blur-md border-b border-white/20 shadow-lg animate-float">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-dancing font-bold tracking-widest text-2xl text-white flex items-center gap-2">
          F/M
        </div>

        <div className="flex gap-6 text-sm text-white/80 font-inter">
          <Link to="/" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Главная</Link>
          <Link to="/story" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">История</Link>
          <Link to="/dates" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Даты</Link>
          <Link to="/together" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Мы вместе</Link>
          <Link to="/events" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">События</Link>
        </div>
      </div>
    </nav>
  )
}
