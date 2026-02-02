import React from "react";
import { X } from "lucide-react";
import { StoreFilters } from "@/hooks/useStoreFilters";

interface ProductFilterSidebarProps {
    filters: StoreFilters;
    setCategory: (v: string) => void;
    setSubcategory: (v: string | undefined) => void;
    setSize: (v: string | undefined) => void;
    setColor: (v: string | undefined) => void;
    categories: string[];
    subcategories: string[];
    sizes: string[];
    colors: string[];
    isOpen: boolean;
    onClose: () => void;
    fixedCategory?: string;
}

export const ProductFilterSidebar: React.FC<ProductFilterSidebarProps> = ({
    filters,
    setCategory,
    setSubcategory,
    setSize,
    setColor,
    categories,
    subcategories,
    sizes,
    colors,
    isOpen,
    onClose,
    fixedCategory
}) => {
    // Utility for list items
    const FilterSection = ({ title, items, selected, onSelect }: {
        title: string,
        items: string[],
        selected: string | undefined,
        onSelect: (val: string | undefined) => void
    }) => (
        <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">
                {title}
            </h3>
            <ul className="space-y-2">
                {items.map((item) => {
                    const isSelected = item === (selected || "All") || (item === "All" && !selected);
                    return (
                        <li key={item}>
                            <button
                                onClick={() => onSelect(item === "All" ? undefined : item)}
                                className={`text-sm text-left w-full hover:underline transition-all ${isSelected ? "font-bold underline" : "font-light"}`}
                            >
                                {item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    // Specific handler for Category since it defaults to "All" not undefined in the hook usually,
    // but looking at hook: setCategory(category: string).
    // The hook has default "All".
    const handleCategorySelect = (val: string | undefined) => {
        setCategory(val || "All");
    };

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                onClick={onClose}
            />

            {/* Sidebar Container */}
            <aside
                className={`
                    fixed lg:static top-0 left-0 z-50 h-full w-[300px] lg:w-64 bg-white
                    border-r border-black p-8 overflow-y-auto transition-transform duration-300 ease-in-out
                    ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
                `}
            >
                {/* Mobile Header */}
                <div className="flex justify-between items-center lg:hidden mb-8">
                    <h2 className="text-xl font-thin uppercase tracking-widest">Filters</h2>
                    <button onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className="space-y-8">
                    {/* Categories - Only show if not fixed */}
                    {!fixedCategory && (
                        <div className="mb-8">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">
                                Category
                            </h3>
                            <ul className="space-y-2">
                                {categories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => handleCategorySelect(cat)}
                                            className={`text-sm text-left w-full hover:underline ${filters.category === cat ? "font-bold underline" : "font-light"}`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Subcategories */}
                    <FilterSection
                        title="Collection"
                        items={subcategories}
                        selected={filters.subcategory}
                        onSelect={setSubcategory}
                    />

                    {/* Sizes */}
                    <FilterSection
                        title="Size"
                        items={sizes}
                        selected={filters.size}
                        onSelect={setSize}
                    />

                    {/* Colors */}
                    <FilterSection
                        title="Color"
                        items={colors}
                        selected={filters.color}
                        onSelect={setColor}
                    />
                </div>
            </aside>
        </>
    );
};
