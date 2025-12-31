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

export const Ingredients = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
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

  return (
    <div>
      {/* este div debe tener alineado a la izquierda el titulo y a la derecha un botón circular con un icono de agregar y el titulo debe alinearse verticalmente con el botón */}
      <div className="flex justify-between items-center">
        <h1>Lista de ingredientes</h1>
        <button
          className="btn btn-circle btn-primary"
          onClick={() => setIsOpenModal(true)}
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

      <IngredientsList ingredients={ingredients} />
      <AddIngredientModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
    </div>
  );
};
