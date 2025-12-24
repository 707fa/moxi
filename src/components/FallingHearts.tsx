import { useEffect, useState } from "react"

export default function FallingHearts() {
  const [hearts, setHearts] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(prev => [...prev, Date.now()])
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {hearts.map((h) => (
        <span
          key={h}
          className="absolute text-red-400 text-2xl animate-fall"
          style={{
            left: Math.random() * window.innerWidth,
            top: 0,
          }}
        >
          ♥
        </span>
      ))}
    </>
  )
}
