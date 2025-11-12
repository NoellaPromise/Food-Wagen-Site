"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import FoodList from "@/components/FoodList";
import FoodFormModal from "@/components/FoodFormModal";
import Hero from "@/components/Hero";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";
import { Food, FoodFormData } from "@/lib/types";
import { foodApi } from "@/lib/api";

export default function Home() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFood, setEditingFood] = useState<Food | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(9);

  useEffect(() => {
    loadFoods();
  }, [searchQuery]);

  const loadFoods = async () => {
    try {
      setIsLoading(true);
      const data = await foodApi.getAll(searchQuery || undefined);
      const validFoods = data.filter((food) => food && food.id && food.name);
      setFoods(validFoods);
    } catch (error) {
      console.error("Error loading foods:", error);
      setFoods([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddFood = () => {
    setEditingFood(null);
    setIsModalOpen(true);
  };

  const handleEditFood = (food: Food) => {
    setEditingFood(food);
    setIsModalOpen(true);
  };

  const handleDeleteFood = async (id: string) => {
    setPendingDeleteId(id);
  };

  const confirmDelete = async () => {
    if (!pendingDeleteId) return;
    try {
      setDeleteLoadingId(pendingDeleteId);
      await foodApi.delete(pendingDeleteId);
      await loadFoods();
    } catch (error) {
      console.error("Error deleting food:", error);
      alert("Failed to delete food. Please try again.");
    } finally {
      setDeleteLoadingId(null);
      setPendingDeleteId(null);
    }
  };

  const handleSubmitFood = async (formData: FoodFormData) => {
    try {
      setIsSubmitting(true);
      if (editingFood) {
        await foodApi.update(editingFood.id, formData);
      } else {
        await foodApi.create(formData);
      }
      await loadFoods();
      setIsModalOpen(false);
      setEditingFood(null);
    } catch (error) {
      console.error("Error saving food:", error);
      alert("Failed to save food. Please try again.");
      throw error;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onAddClick={handleAddFood} />
      <Hero searchValue={searchQuery} onSearchChange={setSearchQuery} />
      <main className="flex-1 py-8 bg-white">
        <div className="food-container mb-6">
          <h2
            className="text-2xl font-bold food-section-title text-center"
            data-testid="food-page-title"
          >
            Featured Meals
          </h2>
        </div>

        {isLoading ? (
          <div className="food-container">
            <div className="flex justify-center items-center py-12">
              <div
                className="food-loading w-8 h-8"
                data-testid="food-loading-spinner"
              ></div>
            </div>
          </div>
        ) : (
          <>
            <FoodList
              foods={foods.slice(0, visibleCount)}
              onEdit={handleEditFood}
              onDelete={handleDeleteFood}
            />
            {foods.length > visibleCount && (
              <div className="food-container mt-8 flex justify-center">
                <button
                  className="px-8 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                  style={{ backgroundColor: "var(--food-secondary)" }}
                  onClick={() => setVisibleCount((c) => c + 9)}
                >
                  Load more
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        )}

        <FoodFormModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEditingFood(null);
          }}
          onSubmit={handleSubmitFood}
          food={editingFood}
          isLoading={isSubmitting}
        />
        <DeleteConfirmModal
          isOpen={!!pendingDeleteId}
          onConfirm={confirmDelete}
          onCancel={() => setPendingDeleteId(null)}
          isLoading={!!deleteLoadingId}
        />
      </main>
      <Footer />
    </div>
  );
}
