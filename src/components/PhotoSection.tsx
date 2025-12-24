
import love from "../assets/love.png"; // путь к твоему изображению

export default function PhotoSection() {
  return (
    <section className="mt-20 flex justify-center">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
        <img
          src={love}
          alt="Us"
          className="relative rounded-3xl shadow-2xl shadow-red-500/50 hover:scale-105 transition-all duration-500 animate-heartbeat max-w-sm border-4 border-white/20"
        />
      </div>
    </section>
  );
}
