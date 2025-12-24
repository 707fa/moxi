import Heart from "../components/Heart"

export default function Home() {
  return (
    <main className="pt-40 text-center px-6 min-h-screen bg-dark-gradient">
      <div className="flex justify-center items-center gap-2 mb-8">
        <h1 className="text-6xl md:text-7xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
          ДОБРО ПОЖАЛОВАТЬ <br/>
          
           Здесь наша история любви!
        </h1>
       
      
      </div>
       <h3 className="text-2xl md:text-8xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent animate-pulse drop-shadow-2xl flex justify-center items-center gap-4">
         Фаррух <Heart /> Мохи
       </h3>

      <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed drop-shadow-lg font-inter">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="mt-12 flex justify-center gap-6">
        <button className="px-8 py-3 bg-love-gradient text-white font-inter font-semibold rounded-full hover:from-love-red hover:to-love-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:animate-glow">
          Узнать больше
        </button>
        <button className="px-8 py-3 border-2 border-love-purple text-love-purple font-inter font-semibold rounded-full hover:bg-love-purple hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl hover:animate-glow">
          Наша история
        </button>
      </div>
    </main>
  )
}
