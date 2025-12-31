import { preparations as initialPreparations } from "../../temp_db";
import type { Ingredient } from "../Ingredients";
import { PreparationsList } from "./components/PreparationsList";
import { useState } from "react";

export interface PreparationIngredient {
  ingredient: Ingredient;
  quantity: number;
  unit: "unidad" | "gramos" | "kilos" | "litro" | "ml";
}

export interface Preparation {
  id: number;
  name: string;
  ingredients: PreparationIngredient[];
}

export const Preparations = () => {
  const [preparations] = useState<Preparation[]>(initialPreparations);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Lista de preparaciones</h1>
        <button className="btn btn-circle btn-primary">
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
      <PreparationsList preparations={preparations} />
    </div>
  );
};
