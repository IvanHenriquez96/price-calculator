import { AddIngredientModal } from "./components/addIngredientModal";
import { IngredientsList } from "./components/IngredientsList";
import { useState } from "react";

export interface Ingredient {
  id: number;
  name: string;
  price: number;
  quantity: number;
  unit: "unidad" | "gramos" | "kilos" | "litro";
}

import { DeleteIngredientModal } from "./components/DeleteIngredientModal";

export const Ingredients = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [ingredientToDelete, setIngredientToDelete] =
    useState<Ingredient | null>(null);

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    {
      id: 1,
      name: "Huevos",
      price: 250,
      quantity: 1,
      unit: "unidad",
    },
    {
      id: 2,
      name: "Leche",
      price: 1200,
      quantity: 1,
      unit: "litro",
    },
  ]);

  /* State for editing */
  const [ingredientToEdit, setIngredientToEdit] = useState<Ingredient | null>(
    null
  );

  const handleDeleteClick = (id: number) => {
    const ingredient = ingredients.find((inv) => inv.id === id);
    if (ingredient) {
      setIngredientToDelete(ingredient);
    }
  };

  const handleEditClick = (id: number) => {
    const ingredient = ingredients.find((inv) => inv.id === id);
    if (ingredient) {
      setIngredientToEdit(ingredient);
      setIsOpenModal(true);
    }
  };

  const confirmDelete = () => {
    if (ingredientToDelete) {
      setIngredients(
        ingredients.filter((inv) => inv.id !== ingredientToDelete.id)
      );
      setIngredientToDelete(null);
    }
  };

  return (
    <div>
      {/* este div debe tener alineado a la izquierda el titulo y a la derecha un botón circular con un icono de agregar y el titulo debe alinearse verticalmente con el botón */}
      <div className="flex justify-between items-center">
        <h1>Lista de ingredientes</h1>
        <button
          className="btn btn-circle btn-primary"
          onClick={() => {
            setIngredientToEdit(null);
            setIsOpenModal(true);
          }}
        >
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 6v6m0 0v6m0-6h6m-6 0h-6" />
          </svg>
        </button>
      </div>

      <IngredientsList
        ingredients={ingredients}
        deleteIngredient={handleDeleteClick}
        editIngredient={handleEditClick}
      />
      <AddIngredientModal
        key={ingredientToEdit ? ingredientToEdit.id : "new-ingredient"}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        ingredients={ingredients}
        setIngredients={setIngredients}
        ingredientToEdit={ingredientToEdit}
        setIngredientToEdit={setIngredientToEdit}
      />
      <DeleteIngredientModal
        isOpen={!!ingredientToDelete}
        onClose={() => setIngredientToDelete(null)}
        onConfirm={confirmDelete}
        ingredientName={ingredientToDelete?.name || ""}
      />
    </div>
  );
};
