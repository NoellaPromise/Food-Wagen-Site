"use client";

import { Food } from "@/lib/types";
import { motion } from "framer-motion";

interface FoodCardProps {
  food: Food;
  onEdit: (food: Food) => void;
  onDelete: (id: string) => void;
  index: number;
}

export default function FoodCard({
  food,
  onEdit,
  onDelete,
  index,
}: FoodCardProps) {
  // Handle missing restaurant data gracefully
  const restaurant = food.restaurant || {
    name: "Unknown Restaurant",
    logo: "https://via.placeholder.com/32",
    status: "Closed" as const,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="food-card relative"
      data-testid={`food-card-${food.id}`}
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <div className="absolute top-2 left-2 bg-[var(--food-secondary)] text-white text-xs font-semibold px-2 py-1 rounded">
          {food.rating?.toFixed ? `$${food.rating.toFixed(2)}` : "$0.00"}
        </div>
        <div className="absolute top-2 right-2 z-20">
          <details className="group relative">
            <summary className="list-none cursor-pointer w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md">
              <span className="sr-only">Open menu</span>
              <span className="text-gray-700 font-bold">⋮</span>
            </summary>
            <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-2 w-28 z-30">
              <button
                className="block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded"
                onClick={() => onEdit(food)}
              >
                Edit
              </button>
              <button
                className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-gray-100 rounded"
                onClick={() => onDelete(food.id)}
              >
                Delete
              </button>
            </div>
          </details>
        </div>
        <img
          src={food.image || "https://via.placeholder.com/400"}
          alt={food.name || "Food item"}
          className="w-full h-full object-cover"
          data-testid={`food-card-image-${food.id}`}
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/400";
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="text-xl font-semibold text-gray-900"
            data-testid={`food-card-name-${food.id}`}
          >
            {food.name || "Unnamed Food"}
          </h3>
          <div className="flex items-center">
            <span className="food-text-secondary mr-1">★</span>
            <span
              className="text-gray-700 font-medium"
              data-testid={`food-card-rating-${food.id}`}
            >
              {food.rating || 0}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <img
              src={restaurant.logo}
              alt={restaurant.name}
              className="w-8 h-8 rounded-full object-cover"
              data-testid={`food-card-restaurant-logo-${food.id}`}
              onError={(e) => {
                e.currentTarget.src = "https://via.placeholder.com/32";
              }}
            />
            <span
              className="text-gray-600"
              data-testid={`food-card-restaurant-name-${food.id}`}
            >
              {restaurant.name}
            </span>
          </div>
          <span
            className={`px-2 py-1 rounded text-xs font-medium ${
              restaurant.status === "Open Now"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
            data-testid={`food-card-restaurant-status-${food.id}`}
          >
            {restaurant.status}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onEdit(food)}
            className="food-button-secondary flex-1 sr-only"
            data-testid={`food-card-edit-button-${food.id}`}
            aria-label={`Edit ${food.name}`}
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(food.id)}
            className="food-button-danger flex-1 sr-only"
            data-testid={`food-card-delete-button-${food.id}`}
            aria-label={`Delete ${food.name}`}
          >
            Delete
          </button>
        </div>
      </div>
    </motion.div>
  );
}
