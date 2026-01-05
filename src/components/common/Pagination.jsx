const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center gap-3 mt-10 flex-wrap">
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-full border transition
              ${
                currentPage === page
                  ? "bg-pink-600 text-white"
                  : "bg-white text-pink-600 hover:bg-pink-100"
              }`}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
