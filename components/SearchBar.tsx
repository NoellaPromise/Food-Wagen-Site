"use client";

import Button from "./ui/Button";
import Input from "./ui/Input";

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
    <div className="w-full food-font">
      <div className="flex items-center gap-3 mb-4">
        <button
          className="px-4 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 transition-colors"
          style={{ backgroundColor: "var(--food-primary)", color: "white" }}
        >
          <img src="/icons/bike.png" alt="" className="brightness-0 invert" />
          Delivery
        </button>
        <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-200 text-gray-600 inline-flex items-center gap-2 hover:bg-gray-300 transition-colors">
          <img src="/icons/bag.svg" alt="" className="w-4 h-4 opacity-60" />
          Pickup
        </button>
      </div>

      <div className="flex items-stretch gap-3">
        <Input
          startIcon={
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          data-testid="food-search-input"
          aria-label="Search foods"
        />
        <Button variant="accent" radius="lg">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          Find Meal
        </Button>
      </div>
    </div>
  );
}
