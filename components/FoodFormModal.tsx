"use client";

import { useState, useEffect } from "react";
import { Food, FoodFormData } from "@/lib/types";
import { validateFoodForm, ValidationErrors } from "@/lib/validation";

interface FoodFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FoodFormData) => Promise<void>;
  food?: Food | null;
  isLoading?: boolean;
}

const initialFormData: FoodFormData = {
  name: "",
  rating: 1 as number,
  image: "",
  restaurantName: "",
  restaurantLogo: "",
  restaurantStatus: "Open Now",
};

export default function FoodFormModal({
  isOpen,
  onClose,
  onSubmit,
  food,
  isLoading = false,
}: FoodFormModalProps) {
  const [formData, setFormData] = useState<FoodFormData>(initialFormData);
  const [errors, setErrors] = useState<ValidationErrors>({});

  useEffect(() => {
    if (food) {
      setFormData({
        name: food.name || "",
        rating: food.rating || 1,
        image: food.image || "",
        restaurantName: food.restaurant?.name || "",
        restaurantLogo: food.restaurant?.logo || "",
        restaurantStatus: food.restaurant?.status ?? "Open Now",
      });
    } else {
      setFormData(initialFormData);
    }
    setErrors({});
  }, [food, isOpen]);

  const handleChange = (field: keyof FoodFormData, value: string | number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateFoodForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await onSubmit(formData);
      setFormData(initialFormData);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!isOpen) return null;

  const buttonText = isLoading
    ? food
      ? "Updating Food..."
      : "Adding Food..."
    : food
    ? "Save"
    : "Add";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      data-testid="food-modal-overlay"
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        data-testid="food-modal-content"
      >
        <div className="p-8">
          <h2
            className="text-2xl font-bold text-center mb-6"
            style={{ color: "var(--food-secondary)" }}
            data-testid="food-modal-title"
          >
            {food ? "Edit Meal" : "Add a meal"}
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="space-y-3">
              <div>
                <input
                  id="food-name"
                  type="text"
                  name="food_name"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  placeholder="Enter food name"
                  aria-describedby={
                    errors.name ? "restaurant_name-error" : undefined
                  }
                  className="food-input w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  data-testid="food-form-name-input"
                  disabled={isLoading}
                />
                {errors.name && (
                  <p
                    id="restaurant_name-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-name-error"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="food-rating"
                  type="number"
                  name="food_rating"
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={(e) =>
                    handleChange("rating", parseFloat(e.target.value) || 1)
                  }
                  placeholder="Enter food rating (1-5)"
                  aria-describedby={
                    errors.rating ? "restaurant_rating-error" : undefined
                  }
                  className="food-input w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  data-testid="food-form-rating-input"
                  disabled={isLoading}
                />
                {errors.rating && (
                  <p
                    id="restaurant_rating-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-rating-error"
                  >
                    {errors.rating}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="food-image"
                  type="url"
                  name="food_image"
                  value={formData.image}
                  onChange={(e) => handleChange("image", e.target.value)}
                  placeholder="Food image URL"
                  aria-describedby={
                    errors.image ? "restaurant_image-error" : undefined
                  }
                  className="food-input w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  data-testid="food-form-image-input"
                  disabled={isLoading}
                />
                {errors.image && (
                  <p
                    id="restaurant_image-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-image-error"
                  >
                    {errors.image}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="food-restaurant-name"
                  type="text"
                  name="restaurant_name"
                  value={formData.restaurantName}
                  onChange={(e) =>
                    handleChange("restaurantName", e.target.value)
                  }
                  placeholder="Enter restaurant name"
                  aria-describedby={
                    errors.restaurantName
                      ? "food-restaurant-name-error"
                      : undefined
                  }
                  className="food-input w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  data-testid="food-form-restaurant-name-input"
                  disabled={isLoading}
                />
                {errors.restaurantName && (
                  <p
                    id="food-restaurant-name-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-restaurant-name-error"
                  >
                    {errors.restaurantName}
                  </p>
                )}
              </div>

              <div>
                <input
                  id="food-restaurant-logo"
                  type="url"
                  name="restaurant_logo"
                  value={formData.restaurantLogo}
                  onChange={(e) =>
                    handleChange("restaurantLogo", e.target.value)
                  }
                  placeholder="Restaurant logo URL"
                  aria-describedby={
                    errors.restaurantLogo
                      ? "food-restaurant-logo-error"
                      : undefined
                  }
                  className="food-input w-full px-4 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  data-testid="food-form-restaurant-logo-input"
                  disabled={isLoading}
                />
                {errors.restaurantLogo && (
                  <p
                    id="food-restaurant-logo-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-restaurant-logo-error"
                  >
                    {errors.restaurantLogo}
                  </p>
                )}
              </div>

              <div>
                <div className="relative">
                  <select
                    id="food-restaurant-status"
                    name="restaurant_status"
                    value={formData.restaurantStatus}
                    onChange={(e) =>
                      handleChange("restaurantStatus", e.target.value)
                    }
                    className={`w-full pl-4 pr-12 py-3 bg-gray-100 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 appearance-none text-gray-700`}
                    data-testid="food-form-restaurant-status-input"
                    disabled={isLoading}
                  >
                    <option value="Open Now">Open Now</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.116l3.71-2.886a.75.75 0 11.92 1.18l-4.25 3.31a.75.75 0 01-.92 0l-4.25-3.31a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
                {errors.restaurantStatus && (
                  <p
                    id="food-restaurant-status-error"
                    className="text-orange-600 text-xs mt-1"
                    data-testid="food-restaurant-status-error"
                  >
                    {errors.restaurantStatus}
                  </p>
                )}
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-md font-semibold text-white disabled:opacity-50"
                style={{ backgroundColor: "var(--food-secondary)" }}
                disabled={isLoading}
                data-testid="food-form-submit-button"
              >
                {isLoading && (
                  <span
                    className="food-loading w-4 h-4 mr-2 inline-block"
                    data-testid="food-form-loading-spinner"
                  ></span>
                )}
                {buttonText}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-md font-semibold bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                disabled={isLoading}
                data-testid="food-form-cancel-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
