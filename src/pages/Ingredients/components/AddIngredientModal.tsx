export const AddIngredientModal = ({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}) => {
  // Función para cerrar el modal
  const closeModal = () => setIsOpenModal(false);

  return (
    <div>
      <div className={`modal ${isOpenModal ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg">¡Hola!</h3>
          <p className="py-4">
            Este modal está controlado por el estado de React.
          </p>

          <div className="modal-action">
            {/* Botón interno para cerrar */}
            <button className="btn" onClick={closeModal}>
              Cerrar
            </button>
          </div>
        </div>

        {/* Backdrop: Al hacer clic aquí, se cierra el modal */}
        <div className="modal-backdrop" onClick={closeModal}>
          <button className="cursor-default">close</button>
        </div>
      </div>
    </div>
  );
};
