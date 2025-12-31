import { useState } from "react";

export const IngredientsList = () => {
  const [ingredients, setIngredients] = useState([
    {
      name: "Huevos",
      price: 250,
      quantity: 1,
      unit: "Unidad/es",
    },
    {
      name: "Leche",
      price: 1200,
      quantity: 1,
      unit: "Litro/s",
    },
  ]);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Crea/Edita Ingredientes para tus preparaciones
      </li>

      {ingredients.map((ingredient) => (
        <li className="list-row">
          <div>
            <div className="size-10 rounded-box bg-neutral text-neutral-content flex items-center justify-center text-xl font-bold">
              {ingredient.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <div>{ingredient.name}</div>
            <div>
              {ingredient.quantity} {ingredient.unit}
            </div>
            <div className="text-xs uppercase font-semibold opacity-60">
              ${ingredient.price}
            </div>
          </div>
          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              <line x1="10" y1="11" x2="10" y2="17" />
              <line x1="14" y1="11" x2="14" y2="17" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};
