import type { Ingredient } from "..";
import { useState } from "react";

export const AddIngredientModal = ({
  isOpenModal,
  setIsOpenModal,
  ingredients,
  setIngredients,
}: {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  ingredients: Ingredient[];
  setIngredients: (ingredients: Ingredient[]) => void;
}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [unit, setUnit] = useState<"unidad" | "gramos" | "kilos" | "litro">(
    "unidad"
  );

  const closeModal = () => {
    setIsOpenModal(false);
    // Reset form
    setName("");
    setPrice("");
    setQuantity("");
    setUnit("unidad");
  };

  const handleAddIngredient = () => {
    const newIngredient: Ingredient = {
      id: ingredients.length + 1,
      name,
      price: Number(price),
      quantity: Number(quantity),
      unit,
    };
    setIngredients([...ingredients, newIngredient]);
    closeModal();
  };

  return (
    <div>
      <div className={`modal ${isOpenModal ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-6">Agregar ingrediente</h3>

          <form>
            <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-4">
              <label className="text-left font-medium">Nombre</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Huevos, leche, etc."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-4">
              <label className="text-left font-medium">Precio</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="250"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-4">
              <label className="text-left font-medium">Cantidad</label>
              <input
                type="number"
                className="input input-bordered w-full"
                placeholder="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-[100px_1fr] gap-4 items-center mb-6">
              <label className="text-left font-medium">Unidad</label>
              <select
                className="select select-bordered w-full"
                value={unit}
                onChange={(e) => setUnit(e.target.value as Ingredient["unit"])}
              >
                <option value="unidad">Unidad/es</option>
                <option value="gramos">Gramos</option>
                <option value="kilos">Kilos</option>
                <option value="litro">Litros</option>
              </select>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddIngredient}
                disabled={!name || !price || !quantity}
              >
                Agregar ingrediente
              </button>
            </div>
          </form>
        </div>

        {/* Backdrop: Al hacer clic aquí, se cierra el modal */}
        <div className="modal-backdrop" onClick={closeModal}>
          <button className="cursor-default">close</button>
        </div>
      </div>
    </div>
  );
};
