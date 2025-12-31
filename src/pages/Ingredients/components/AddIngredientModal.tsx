export const AddIngredientModal = ({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
}) => {
  const closeModal = () => setIsOpenModal(false);

  return (
    <div>
      <div className={`modal ${isOpenModal ? "modal-open" : ""}`} role="dialog">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Agregar ingrediente</h3>

          <form>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Huevos, leche, etc."
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Precio</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="250"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Cantidad</span>
              </label>
              <input
                type="number"
                className="input input-bordered"
                placeholder="1"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Unidad</span>
              </label>
              <select className="select select-bordered">
                <option value="" disabled selected>
                  --Selecciona un tipo de unidad--
                </option>
                <option value="unidad">Unidad/es</option>
                <option value="gramos">Gramos</option>
                <option value="kilos">Kilos</option>
                <option value="litros">Litros</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button className="btn btn-primary">Agregar ingrediente</button>
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
