import OrderForm from "./OrderForm";

const DishModal = ({ dish, type, onClose }) => {
  if (!dish || !type) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">
      <div className="bg-white text-black rounded-2xl p-6 w-full max-w-md relative">

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold hover:text-red-600"
        >
          ✕
        </button>

        {type === "order" && <OrderForm dish={dish} />}

        {type === "details" && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {dish.title}
            </h2>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li>🔥 Calories: {dish.details.calories}</li>
              <li>🥩 Protein: {dish.details.protein}</li>
              <li>🧀 Fat: {dish.details.fat}</li>
              <li>🍞 Carbs: {dish.details.carbs}</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DishModal;
