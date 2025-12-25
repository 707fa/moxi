import Heart from "../components/Heart"
import WeHistory from "../components/WeHistory"

export default function Home() {
  return (
    <main className="pt-40 text-center px-6 min-h-screen bg-dark-gradient">
      <div className="flex justify-center items-center gap-2 mb-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
          ДОБРО ПОЖАЛОВАТЬ <br/>
          
           Здесь наша история любви!
        </h1>
       
      
      </div>
       <h3 className="text-xl md:text-6xl lg:text-8xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent animate-pulse drop-shadow-2xl flex justify-center items-center gap-4">
         Фаррух <Heart /> Мохи
       </h3>

      <p className="mt-6 max-w-2xl mx-auto text-white/80 text-lg leading-relaxed drop-shadow-lg font-inter">
       Здесь вы найдете все о наших особенных моментах, совместных приключениях и планах на будущее. Спасибо, что вы с нами в этом удивительном путешествии любви!
      </p>
      <WeHistory/>
    </main>
  )
}
