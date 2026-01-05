import { useState } from "react";
import GalleryHeader from "./GalleryHeader";
import FilterButtons from "./FilterButtons";
import GalleryGrid from "./GalleryGrid";
import { getGalleryItems } from "./useGalleryData";

const Gallery = () => {
  const [filter, setFilter] = useState("All");

  const items = getGalleryItems();

  const filteredItems =
    filter === "All"
      ? items
      : items.filter(item => item.type === filter);

  return (
    <section className="bg-pink-200 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <GalleryHeader />
        <FilterButtons active={filter} onChange={setFilter} />
        <GalleryGrid items={filteredItems} />
      </div>
    </section>
  );
};

export default Gallery;
