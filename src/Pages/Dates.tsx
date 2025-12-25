import { useState } from "react"
import Section from "../components/Section"

export default function Dates() {
  const [dates, setDates] = useState([
    { emoji: "📅", title: "День знакомства", description: "Lorem ipsum dolor sit amet", date: "01.01.2023" },
    { emoji: "❤️", title: "Начало отношений", description: "Lorem ipsum dolor sit amet", date: "15.11.2025" },
    { emoji: "🎉", title: "Первый праздник вместе", description: "Lorem ipsum dolor sit amet", date: "25.12.2025" },
  ])

  const [newDate, setNewDate] = useState({ emoji: "", title: "", description: "", date: "" })

  const addDate = () => {
    if (newDate.emoji && newDate.title && newDate.description && newDate.date) {
      setDates([...dates, newDate])
      setNewDate({ emoji: "", title: "", description: "", date: "" })
    }
  }

  return (
    <Section title="Важные даты">
      <ul className="space-y-6 font-inter mb-8">
        {dates.map((date, index) => (
          <li key={index} className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
            <span className="text-2xl">{date.emoji}</span>
            <div>
              <div className="text-white/90 font-medium">{date.title}</div>
              <div className="text-white/60 text-sm">{date.description}</div>
              <div className="text-love-purple text-sm font-semibold">{date.date}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent mb-4">
          Добавить важную дату
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            placeholder="Эмодзи (например, 🎂)"
            value={newDate.emoji}
            onChange={(e) => setNewDate({ ...newDate, emoji: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-love-purple"
          />
          <input
            type="text"
            placeholder="Название даты"
            value={newDate.title}
            onChange={(e) => setNewDate({ ...newDate, title: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-love-purple"
          />
          <input
            type="text"
            placeholder="Описание"
            value={newDate.description}
            onChange={(e) => setNewDate({ ...newDate, description: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-love-purple"
          />
          <input
            type="date"
            value={newDate.date}
            onChange={(e) => setNewDate({ ...newDate, date: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-love-purple"
          />
        </div>
        <button
          onClick={addDate}
          className="mt-4 px-6 py-2 bg-love-gradient text-white font-inter font-semibold rounded-full hover:from-love-red hover:to-love-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Добавить дату
        </button>
      </div>
    </Section>
  )
}
