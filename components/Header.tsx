"use client";

interface HeaderProps {
  onAddClick?: () => void;
}

export default function Header({ onAddClick }: HeaderProps) {
  return (
    <header className="border-b food-divider food-font">
      <div className="food-container py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/icons/navlogo.png"
              alt=""
              className=""
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(55%) sepia(82%) saturate(1500%) hue-rotate(360deg) brightness(98%) contrast(101%)",
              }}
            />
            <img
              src="/images/FoodWagen.png"
              alt="FoodWagen"
              width={128}
              height={32}
            />
            <span className="sr-only" data-testid="food-header-title">
              FoodWagen
            </span>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <button
              onClick={onAddClick}
              className="food-button-primary px-6 py-2 rounded-lg "
            >
              Add Meal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
