import { useState } from "react"
import Section from "../components/Section"
import EventCard from "../components/EventCard"

export default function Events() {
  const [events, setEvents] = useState([
    { emoji: "💋", text: "Первый поцелуй — Lorem ipsum", date: "01.01.2023" },
    { emoji: "🤍", text: "Первое объятие — Lorem ipsum", date: "02.01.2023" },
    { emoji: "💢", text: "Первая ссора — Lorem ipsum", date: "03.01.2023" },
    { emoji: "❤️", text: "Примирение — Lorem ipsum", date: "04.01.2023" },
  ])

  const [newEvent, setNewEvent] = useState({ emoji: "", text: "", date: "" })

  const addEvent = () => {
    if (newEvent.emoji && newEvent.text && newEvent.date) {
      setEvents([...events, newEvent])
      setNewEvent({ emoji: "", text: "", date: "" })
    }
  }

  return (
    <Section title="Наши моменты">
      <div className="grid gap-4 md:grid-cols-2 mb-8">
        {events.map((event, index) => (
          <EventCard key={index} emoji={event.emoji} text={event.text} date={event.date} />
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
        <h3 className="text-2xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent mb-4">
          Добавить новое событие
        </h3>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <input
            type="text"
            placeholder="Эмодзи (например, ❤️)"
            value={newEvent.emoji}
            onChange={(e) => setNewEvent({ ...newEvent, emoji: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-love-purple"
          />
          <input
            type="text"
            placeholder="Описание события"
            value={newEvent.text}
            onChange={(e) => setNewEvent({ ...newEvent, text: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-love-purple"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-love-purple"
          />
        </div>
        <button
          onClick={addEvent}
          className="mt-4 px-6 py-2 bg-love-gradient text-white font-inter font-semibold rounded-full hover:from-love-red hover:to-love-purple transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Добавить событие
        </button>
      </div>
    </Section>
  )
}
