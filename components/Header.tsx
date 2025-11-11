"use client";

interface HeaderProps {
  onAddClick?: () => void;
}

export default function Header({ onAddClick }: HeaderProps) {
  return (
    <header className="border-b food-divider">
      <div className="food-container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="/icons/delivery-truck.svg"
              alt=""
              className="w-8 h-8"
              style={{
                filter:
                  "brightness(0) saturate(100%) invert(55%) sepia(82%) saturate(1500%) hue-rotate(360deg) brightness(98%) contrast(101%)",
              }}
            />
            <img src="/logo.svg" alt="FoodWagen" width={128} height={32} />
            <span className="sr-only" data-testid="food-header-title">
              FoodWagen
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={onAddClick}
              className="food-button-primary px-4 py-1 rounded-full"
            >
              Add Meal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
