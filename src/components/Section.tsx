type SectionProps = {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function Section({
  title,
  subtitle,
  children,
}: SectionProps) {
  return (
    <section className="max-w-5xl mx-auto px-6 py-28 animate-fadeUp">
      <header className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent drop-shadow-lg">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg leading-relaxed drop-shadow-md font-inter">
            {subtitle}
          </p>
        )}
      </header>

      <div className="text-white/80 text-lg leading-relaxed bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10 font-inter hover:animate-glow transition-all duration-500">
        {children}
      </div>
    </section>
  )
}
