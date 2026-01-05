import { useState } from "react";
import FilterButtons from "../components/gallery/FilterButtons";
import GalleryGrid from "../components/gallery/GalleryGrid";
import Pagination from "../components/common/Pagination";
import { getGalleryItems } from "../components/gallery/useGalleryData";
import SectionHeading from "../components/common/SectionHeading";

const ITEMS_PER_PAGE = 4;

const Menu = () => {
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

    const items = getGalleryItems();

    const filteredItems =
        filter === "All"
            ? items
            : items.filter((item) => item.type === filter);

    // Pagination logic
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedItems = filteredItems.slice(
        startIndex,
        startIndex + ITEMS_PER_PAGE
    );

    return (
        <section className="bg-pink-200 py-20 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <SectionHeading
                    title="Menu"
                    subtitle="Delicious Moments Start Here"
                />
                {/* Filter Buttons */}
                <FilterButtons
                    active={filter}
                    onChange={(value) => {
                        setFilter(value);
                        setCurrentPage(1);
                    }}
                />

                <GalleryGrid items={paginatedItems} />

                <Pagination
                    totalItems={filteredItems.length}
                    itemsPerPage={ITEMS_PER_PAGE}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />

            </div>
        </section>
    );
};

export default Menu;
