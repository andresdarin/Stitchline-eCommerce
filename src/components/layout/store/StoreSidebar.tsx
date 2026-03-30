"use client";
import React from "react";
import { products } from "@/data/data";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { extractCategories, extractSubcategories, extractSizes } from "@/utils/productHelpers";
import { X } from "lucide-react";

interface StoreSidebarProps {
    onClose?: () => void;
    className?: string;
}

export const StoreSidebar: React.FC<StoreSidebarProps> = ({ onClose, className = "" }) => {
    const { filters, setCategory, setSubcategory, setSize } = useStoreFilters();

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];

    return (
        <aside className={`bg-white h-full flex flex-col p-6 ${className}`}>
             {/* Header for Mobile */}
            <div className="flex justify-between items-center mb-8 md:hidden">
                <h2 className="text-xl font-bold uppercase tracking-widest">Filters</h2>
                {onClose && (
                    <button onClick={onClose} aria-label="Close filters" className="p-1 hover:bg-gray-100 rounded-full">
                        <X size={24} />
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">Category</h3>
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => {
                                    setCategory(cat);
                                    if (onClose) onClose();
                                }}
                                className={`text-sm uppercase tracking-wide hover:underline text-left w-full transition-all ${
                                    filters.category === cat ? "font-bold text-black ml-2" : "font-light text-gray-600"
                                }`}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Subcategories (Collection) */}
            <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">Collection</h3>
                <ul className="space-y-3">
                    {subcategories.map((sub) => (
                        <li key={sub}>
                            <button
                                onClick={() => {
                                    setSubcategory(sub === "All" ? undefined : sub);
                                    if (onClose) onClose();
                                }}
                                className={`text-sm uppercase tracking-wide hover:underline text-left w-full transition-all ${
                                    (filters.subcategory === sub) || (sub === "All" && !filters.subcategory) ? "font-bold text-black ml-2" : "font-light text-gray-600"
                                }`}
                            >
                                {sub}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

             {/* Sizes */}
             <div className="mb-10">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-black pb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                    {sizes.map((s) => (
                        <button
                            key={s}
                            onClick={() => {
                                setSize(s === "All" ? undefined : s);
                            }}
                            className={`text-xs uppercase border px-3 py-1 transition-all ${
                                (filters.size === s) || (s === "All" && !filters.size)
                                    ? "bg-black text-white border-black"
                                    : "bg-transparent text-gray-600 border-gray-300 hover:border-black hover:text-black"
                            }`}
                        >
                            {s}
                        </button>
                    ))}
                </div>
            </div>
        </aside>
    );
};
