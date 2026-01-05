const FilterButtons = ({ active, onChange }) => {
  const filters = ["All", "Vege", "Non-Vege"];

  return (
    <div className="flex justify-center md:justify-start gap-4 mb-8 flex-wrap">
      {filters.map(type => (
        <button
          key={type}
          onClick={() => onChange(type)}
          className={`px-5 py-2 rounded-full text-sm transition
            ${active === type
              ? "bg-white text-pink-600 font-semibold border"
              : "bg-pink-600 text-white"}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
