const OrderForm = ({ dish }) => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">
        Order {dish.title}
      </h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          placeholder="Delivery Address"
          rows="3"
          required
          className="w-full border rounded-lg px-4 py-2"
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition"
        >
          Confirm Order
        </button>
      </form>
    </>
  );
};

export default OrderForm;
