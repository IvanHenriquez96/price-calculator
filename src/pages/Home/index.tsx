import { Calculator } from "../Calculator";
import { Ingredients } from "../Ingredients";
import { Preparations } from "../Preparations";

export const Home = () => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Ingredientes"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Ingredients />
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Preparaciones"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Preparations />
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Calcular Pedido"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <Calculator />
        </div>
      </div>
    </div>
  );
};
