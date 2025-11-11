"use client";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search foods...",
}: SearchBarProps) {
  return (
    <div className="w-full">
      {/* Delivery and Pickup buttons */}
      <div className="flex items-center gap-3 mb-4">
        <button
          className="px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-colors"
          style={{ backgroundColor: "var(--food-primary)", color: "white" }}
        >
          <img
            src="/icons/truck.svg"
            alt=""
            className="w-4 h-4 brightness-0 invert"
          />
          Delivery
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-200 text-gray-600 inline-flex items-center gap-2 hover:bg-gray-300 transition-colors">
          <img src="/icons/bag.svg" alt="" className="w-4 h-4 opacity-60" />
          Pickup
        </button>
      </div>

      {/* Search input with Find Meal button */}
      <div className="flex items-stretch gap-0 bg-gray-50 rounded-lg overflow-hidden">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src="/icons/search.svg"
              alt=""
              className="w-5 h-5 opacity-40"
            />
          </span>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full pl-12 pr-4 py-3 bg-transparent focus:outline-none text-gray-700 placeholder:text-gray-400"
            data-testid="food-search-input"
            aria-label="Search foods"
          />
        </div>
        <button
          className="px-6 py-3 font-semibold text-white inline-flex items-center gap-2 transition-all hover:opacity-90"
          style={{ backgroundColor: "#FF6B3D" }}
        >
          <img
            src="/icons/search.svg"
            alt=""
            className="w-4 h-4 brightness-0 invert"
          />
          Find Meal
        </button>
      </div>
    </div>
  );
}
