import Section from "../components/Section"
import EventCard from "../components/EventCard"

export default function Events() {
  return (
    <Section title="Наши моменты">
      <div className="grid gap-4 md:grid-cols-2">
        <EventCard emoji="💋" text="Первый поцелуй — Lorem ipsum" />
        <EventCard emoji="🤍" text="Первое объятие — Lorem ipsum" />
        <EventCard emoji="💢" text="Первая ссора — Lorem ipsum" />
        <EventCard emoji="❤️" text="Примирение — Lorem ipsum" />
      </div>
    </Section>
  )
}
