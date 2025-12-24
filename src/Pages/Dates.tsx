import Section from "../components/Section"

export default function Dates() {
  return (
    <Section title="Важные даты">
      <ul className="space-y-6 font-inter">
        <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
          <span className="text-2xl">📅</span>
          <div>
            <div className="text-white/90 font-medium">День знакомства</div>
            <div className="text-white/60 text-sm">Lorem ipsum dolor sit amet</div>
          </div>
        </li>
        <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
          <span className="text-2xl">❤️</span>
          <div>
            <div className="text-white/90 font-medium">Начало отношений</div>
            <div className="text-white/60 text-sm">Lorem ipsum dolor sit amet</div>
          </div>
        </li>
        <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
          <span className="text-2xl">🎉</span>
          <div>
            <div className="text-white/90 font-medium">Первый праздник вместе</div>
            <div className="text-white/60 text-sm">Lorem ipsum dolor sit amet</div>
          </div>
        </li>
      </ul>
    </Section>
  )
}
