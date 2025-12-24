// src/pages/SpecialDays.tsx

import Navbar from "../components/Navbar";

const SpecialDays = () => {
  return (
    <>
      <Navbar />
      <div className="mt-10 text-center pt-40 px-6">
        <h2 className="text-4xl md:text-5xl font-dancing font-bold bg-love-gradient bg-clip-text text-transparent drop-shadow-lg mb-8">Наши особенные дни</h2>
        <ul className="space-y-6 max-w-2xl mx-auto font-inter">
          <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
            <span className="text-2xl">💋</span>
            <div>
              <div className="text-white/90 font-medium">Первое свидание</div>
              <div className="text-love-purple text-sm">14.02.2023</div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
            <span className="text-2xl">💖</span>
            <div>
              <div className="text-white/90 font-medium">Первый поцелуй</div>
              <div className="text-love-purple text-sm">20.02.2023</div>
            </div>
          </li>
          <li className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-love-pink/10 to-love-purple/10 border border-love-pink/20 hover:scale-105 transition-all duration-300 hover:animate-glow">
            <span className="text-2xl">🤗</span>
            <div>
              <div className="text-white/90 font-medium">Первые объятия</div>
              <div className="text-love-purple text-sm">21.02.2023</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SpecialDays;
