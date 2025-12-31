import type { Ingredient } from "./pages/Ingredients";

export const ingredients = [
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
] as Ingredient[];

import type { Preparation } from "./pages/Preparations";

export const preparations: Preparation[] = [
  {
    id: 1,
    name: "Tortilla de Huevos",
    ingredients: [
      {
        ingredient: ingredients[0], // Huevos
        quantity: 2,
        unit: "unidad",
      },
      {
        ingredient: ingredients[1], // Leche
        quantity: 50,
        unit: "ml",
      },
    ],
  },
];
