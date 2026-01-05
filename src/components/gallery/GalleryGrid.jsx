import FoodCard from "../MenuCard";

const GalleryGrid = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {items.map(item => (
        <FoodCard
          key={item.id}
          {...item}
          onAdd={() => console.log("Added:", item.title)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
