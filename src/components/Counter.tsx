import { useEffect, useState } from "react"

export default function Counter() {
  const startDate = new Date("2024-01-01")
  const [days, setDays] = useState(0)

  useEffect(() => {
    const now = new Date()
    const diff = Math.floor(
      (now.getTime() - startDate.getTime()) / 86400000
    )
    setDays(diff)
  }, [])

  return (
    <div className="text-center">
      <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-love-pink/20 to-love-purple/20 border border-love-pink/30 shadow-2xl backdrop-blur-sm animate-glow">
        <div className="text-7xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent animate-pulse drop-shadow-lg">
          {days}
        </div>
        <div className="text-xl text-white/80 mt-2 font-inter font-medium">
          дней вместе ❤️
        </div>
      </div>
    </div>
  )
}
