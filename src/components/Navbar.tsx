import { useState } from "react"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-love-gradient backdrop-blur-md border-b border-white/20 shadow-lg animate-float">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="font-dancing font-bold tracking-widest text-2xl text-white flex items-center gap-2">
          F/M
        </div>

        {/* Десктоп меню */}
        <div className="hidden md:flex gap-6 text-sm text-white/80 font-inter">
          <Link to="/" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Главная</Link>
          <Link to="/dates" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Даты</Link>
          <Link to="/together" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">Мы вместе</Link>
          <Link to="/events" className="hover:text-white hover:scale-105 transition-all duration-300 hover:drop-shadow-lg hover:text-love-purple">События</Link>
        </div>

        {/* Мобильная кнопка меню */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Мобильное меню */}
      {isOpen && (
        <div className="md:hidden bg-love-gradient/95 backdrop-blur-md border-t border-white/20">
          <div className="px-6 py-4 flex flex-col gap-4 text-white/80 font-inter">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Главная</Link>
            <Link to="/dates" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Даты</Link>
            <Link to="/together" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">Мы вместе</Link>
            <Link to="/events" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">События</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
