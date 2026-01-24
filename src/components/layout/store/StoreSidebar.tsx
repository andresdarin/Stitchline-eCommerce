"use client";
import React from "react";
import { products } from "@/data/data";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { extractCategories, extractSubcategories, extractSizes, extractColors } from "@/utils/productHelpers";
import { X } from "lucide-react";

interface StoreSidebarProps {
    className?: string;
    fixedCategory?: string;
    onClose?: () => void;
}

const FilterSection = ({
    title,
    items,
    selected,
    onChange
}: {
    title: string;
    items: string[];
    selected: string | undefined;
    onChange: (val: string | undefined) => void
}) => {
    return (
        <div className="mb-8 border-b border-black pb-6 last:border-0">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4">{title}</h3>
            <div className="flex flex-col gap-2">
                {items.map((item) => (
                    <label key={item} className="flex items-center gap-3 cursor-pointer group hover:opacity-70 transition-opacity">
                        <div className={`w-4 h-4 border border-black flex items-center justify-center ${selected === item || (item === 'All' && !selected) ? 'bg-black' : ''}`}>
                            {/* Simple customization for checkbox appearance */}
                        </div>
                        <span className={`uppercase text-sm ${selected === item || (item === 'All' && !selected) ? 'font-bold' : 'font-light'}`}>
                            {item}
                        </span>
                        <input
                            type="radio"
                            name={title}
                            value={item}
                            checked={selected === item || (item === 'All' && !selected)}
                            onChange={() => onChange(item === "All" ? undefined : item)}
                            className="hidden"
                        />
                    </label>
                ))}
            </div>
        </div>
    );
};

const StoreSidebar: React.FC<StoreSidebarProps> = ({ className = "", fixedCategory, onClose }) => {
    const { filters, setCategory, setSubcategory, setSize, setColor } = useStoreFilters();

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];
    const colors = ["All", ...extractColors(products)];

    return (
        <aside className={`bg-white h-full overflow-y-auto p-6 border-r border-black ${className}`}>
            <div className="flex justify-between items-center mb-8 lg:hidden">
                <h2 className="text-xl font-bold uppercase">Filters</h2>
                <button onClick={onClose} aria-label="Close filters">
                    <X size={24} />
                </button>
            </div>

            {/* If category is fixed, we don't show the category filter */}
            {!fixedCategory && (
                <FilterSection
                    title="Category"
                    items={categories}
                    selected={filters.category}
                    onChange={(val) => setCategory(val || "All")}
                />
            )}

            <FilterSection
                title="Collection" // Mapped from Subcategory
                items={subcategories}
                selected={filters.subcategory}
                onChange={setSubcategory}
            />

            <FilterSection
                title="Size"
                items={sizes}
                selected={filters.size}
                onChange={setSize}
            />

            <FilterSection
                title="Color"
                items={colors}
                selected={filters.color}
                onChange={setColor}
            />
        </aside>
    );
};

export default StoreSidebar;
