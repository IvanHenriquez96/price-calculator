interface DeleteIngredientModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  ingredientName: string;
}

export const DeleteIngredientModal = ({
  isOpen,
  onClose,
  onConfirm,
  ingredientName,
}: DeleteIngredientModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Confirmar eliminación</h3>
        <div className="py-4">
          <p>
            ¿Estás seguro que deseas eliminar el ingrediente{" "}
            <strong>{ingredientName}</strong>?
          </p>
          <p className="text-sm opacity-60 mt-2">
            Esta acción no se puede deshacer.
          </p>
        </div>
        <div className="modal-action">
          <button className="btn" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn btn-error" onClick={onConfirm}>
            Eliminar
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose}>
        <button className="cursor-default">close</button>
      </div>
    </div>
  );
};
