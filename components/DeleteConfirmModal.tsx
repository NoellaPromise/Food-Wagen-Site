"use client";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteConfirmModal({
  isOpen,
  onConfirm,
  onCancel,
}: DeleteConfirmModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="p-6">
          <h3
            className="text-2xl font-bold text-center mb-4"
            style={{ color: "var(--food-secondary)" }}
          >
            Delete Meal
          </h3>
          <p className="text-sm text-center text-gray-600 mb-6">
            Are you sure you want to delete this meal? Actions cannot be
            reversed.
          </p>
          <div className="flex items-center justify-center space-x-3">
            <button
              onClick={onConfirm}
              className="flex-1 px-6 py-3 rounded-md font-semibold text-white"
              style={{ backgroundColor: "var(--food-secondary)" }}
            >
              Yes
            </button>
            <button
              onClick={onCancel}
              className="flex-1 px-6 py-3 rounded-md font-semibold bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
