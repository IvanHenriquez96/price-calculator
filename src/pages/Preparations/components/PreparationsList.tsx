import type { Preparation } from "..";

export const PreparationsList = ({
  preparations,
}: {
  preparations: Preparation[];
}) => {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
        Tus Preparaciones
      </li>

      {preparations.map((preparation) => (
        <li className="list-row" key={preparation.id}>
          <div>
            <div className="size-10 rounded-box bg-neutral text-neutral-content flex items-center justify-center text-xl font-bold">
              {preparation.name.charAt(0).toUpperCase()}
            </div>
          </div>
          <div>
            <div className="font-bold">{preparation.name}</div>
            <div className="text-xs opacity-60">
              {preparation.ingredients.map((pi, index) => (
                <span key={index}>
                  {pi.ingredient.name} ({pi.quantity} {pi.unit})
                  {index < preparation.ingredients.length - 1 ? ", " : ""}
                </span>
              ))}
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
