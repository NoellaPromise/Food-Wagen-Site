"use client";

import SearchBar from "./SearchBar";

interface HeroProps {
  searchValue: string;
  onSearchChange: (v: string) => void;
}

export default function Hero({ searchValue, onSearchChange }: HeroProps) {
  return (
    <section className="w-full food-font">
      <div
        className="w-full relative overflow-hidden min-h-[400px] sm:min-h-[500px]"
        style={{
          background:
            "linear-gradient(135deg, #f6a11a 0%, #ffc14d 50%, #ffb238 100%)",
        }}
      >
        <div className="food-container py-12 sm:py-16 relative">
          <div className="absolute right-0 sm:right-10 lg:right-20 top-0 sm:top-10 hidden md:block z-10">
            <img
              src="/images/bowl.png"
              alt="Delicious ramen noodle bowl"
              className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl"
            />
          </div>

          <div className="relative z-20 max-w-3xl">
            <div className="text-white mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 leading-tight">
                Are you starving?
              </h1>
              <p className="text-base sm:text-lg text-white/95 font-thin">
                Within a few clicks, find meals that are accessible near you
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-6 max-w-2xl">
              <SearchBar
                value={searchValue}
                onChange={onSearchChange}
                placeholder="What do you like to eat today?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
