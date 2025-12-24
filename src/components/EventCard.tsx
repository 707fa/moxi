export default function EventCard({ emoji, text, date }: any) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 backdrop-blur-sm hover:animate-glow font-inter">
      <span className="text-3xl block mb-3">{emoji}</span>
      <p className="text-white/90 font-medium text-lg">{text}</p>
      <p className="text-sm text-love-purple mt-2 font-semibold">{date}</p>
    </div>
  )
}
