"use client";

import { Food } from "@/lib/types";
import FoodCard from "./FoodCard";

interface FoodListProps {
  foods: Food[];
  onEdit: (food: Food) => void;
  onDelete: (id: string) => void;
}

export default function FoodList({ foods, onEdit, onDelete }: FoodListProps) {
  if (foods.length === 0) {
    return (
      <div className="food-container">
        <p className="food-empty-state" data-testid="food-empty-state">
          No items available
        </p>
      </div>
    );
  }

  return (
    <div className="food-container">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        data-testid="food-list"
      >
        {foods.map((food, index) => (
          <FoodCard
            key={food.id}
            food={food}
            onEdit={onEdit}
            onDelete={onDelete}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
