"use client";
import React from "react";
import { StoreFilters } from "@/hooks/useStoreFilters";
import { X } from "lucide-react";

interface SidebarFiltersProps {
    categories: string[];
    subcategories: string[];
    sizes: string[];
    tags: string[];
    filters: StoreFilters;
    setCategory: (category: string) => void;
    setSubcategory: (subcategory?: string) => void;
    setSize: (size?: string) => void;
    setTags: (tags?: string[]) => void;
    resetFilters: () => void;
    className?: string;
}

export const SidebarFilters: React.FC<SidebarFiltersProps> = ({
    categories,
    subcategories,
    sizes,
    tags,
    filters,
    setCategory,
    setSubcategory,
    setSize,
    setTags,
    resetFilters,
    className = ""
}) => {

    const handleTagClick = (tag: string) => {
        // Toggle behavior for tags if we wanted multiple, but for "Collection" singular filter might be better.
        // Let's assume single selection for Collection for simplicity and clarity,
        // matching the "filter by collection" request.
        if (filters.tags?.includes(tag)) {
            setTags(undefined);
        } else {
            setTags([tag]);
        }
    };

    const hasActiveFilters =
        filters.category !== "All" ||
        filters.subcategory !== undefined ||
        filters.size !== undefined ||
        (filters.tags && filters.tags.length > 0);

    return (
        <aside className={`w-full md:w-64 flex-shrink-0 pr-0 md:pr-8 mb-8 md:mb-0 ${className}`}>

            <div className="flex justify-between items-center mb-6 border-b border-black pb-2">
                <h2 className="text-xl font-thin uppercase tracking-widest">Filters</h2>
                {hasActiveFilters && (
                    <button
                        onClick={resetFilters}
                        className="text-xs uppercase hover:underline flex items-center gap-1"
                    >
                        Clear <X size={12} />
                    </button>
                )}
            </div>

            {/* CATEGORIES */}
            <div className="mb-8">
                <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">Category</h3>
                <ul className="space-y-2 text-sm font-light">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setCategory(cat)}
                                className={`uppercase text-left w-full hover:underline transition-all ${
                                    filters.category === cat ? "font-bold underline" : "text-gray-600"
                                }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* SUBCATEGORIES (Only if available or if category selected) */}
            {subcategories.length > 1 && (
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">Type</h3>
                    <ul className="space-y-2 text-sm font-light">
                        {subcategories.map((sub) => (
                            <li key={sub}>
                                <button
                                    onClick={() => setSubcategory(sub === "All" ? undefined : sub)}
                                    className={`capitalize text-left w-full hover:underline transition-all ${
                                        filters.subcategory === sub || (sub === "All" && !filters.subcategory)
                                            ? "font-bold underline"
                                            : "text-gray-600"
                                    }`}
                                >
                                    {sub}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* COLLECTION (TAGS) */}
            {tags.length > 0 && (
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">Collection</h3>
                    <ul className="space-y-2 text-sm font-light">
                        {tags.map((tag) => (
                            <li key={tag}>
                                <button
                                    onClick={() => handleTagClick(tag)}
                                    className={`capitalize text-left w-full hover:underline transition-all ${
                                        filters.tags?.includes(tag) ? "font-bold underline" : "text-gray-600"
                                    }`}
                                >
                                    {tag}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* SIZES */}
            {sizes.length > 1 && (
                <div className="mb-8">
                    <h3 className="text-sm font-bold uppercase mb-4 tracking-wider">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {sizes.filter(s => s !== "All").map((size) => (
                            <button
                                key={size}
                                onClick={() => setSize(filters.size === size ? undefined : size)}
                                className={`w-10 h-10 flex items-center justify-center border transition-all text-xs ${
                                    filters.size === size
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-black border-gray-300 hover:border-black"
                                }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </aside>
    );
};
