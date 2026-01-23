import React from 'react';
import { StoreFilters } from '@/hooks/useStoreFilters';
import { X } from 'lucide-react';

interface SidebarProps {
    filters: StoreFilters;
    categories: string[];
    subcategories: string[];
    sizes: string[];
    setCategory: (cat: string) => void;
    setSubcategory: (sub: string | undefined) => void;
    setSize: (size: string | undefined) => void;
    resetFilters: () => void;
    className?: string;
    onClose?: () => void; // For mobile
}

export const Sidebar: React.FC<SidebarProps> = ({
    filters,
    categories,
    subcategories,
    sizes,
    setCategory,
    setSubcategory,
    setSize,
    resetFilters,
    className = "",
    onClose
}) => {
    return (
        <div className={`flex flex-col gap-8 h-full bg-white ${className}`}>
            {/* Header for Mobile */}
            {onClose && (
                <div className="flex justify-between items-center mb-4 md:hidden">
                    <h2 className="text-xl font-bold uppercase tracking-widest">Filters</h2>
                    <button onClick={onClose} className="p-2 border border-black hover:bg-black hover:text-white transition-colors">
                        <X size={20} />
                    </button>
                </div>
            )}

            {/* Categories */}
            <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2">Category</h3>
                <ul className="flex flex-col gap-2">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => {
                                    setCategory(filters.category === cat ? "All" : cat);
                                    if (onClose) onClose();
                                }}
                                className={`text-left w-full hover:underline decoration-1 underline-offset-4 ${filters.category === cat ? 'font-bold underline' : 'font-light'
                                    }`}
                            >
                                {cat.toUpperCase()}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Subcategories (Collection) */}
            <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2">Collection</h3>
                <ul className="flex flex-col gap-2">
                    {subcategories.map((sub) => {
                        const isSelected = filters.subcategory === sub || (sub === 'All' && !filters.subcategory);
                        // Skip "All" for subcategory if we want cleaner UI, or keep it. existing code had "All".
                        if (sub === 'All') return null;

                        return (
                            <li key={sub}>
                                <button
                                    onClick={() => {
                                        setSubcategory(filters.subcategory === sub ? undefined : sub);
                                        if (onClose) onClose();
                                    }}
                                    className={`text-left w-full hover:underline decoration-1 underline-offset-4 ${filters.subcategory === sub ? 'font-bold underline' : 'font-light'
                                        }`}
                                >
                                    {sub.toUpperCase()}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {/* Sizes */}
            <div className="flex flex-col gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-2">Size</h3>
                <div className="grid grid-cols-4 gap-2">
                    {sizes.map((size) => {
                         if (size === 'All') return null;
                         return (
                        <button
                            key={size}
                            onClick={() => {
                                setSize(filters.size === size ? undefined : size);
                                if (onClose) onClose();
                            }}
                            className={`border border-black py-1 text-sm transition-colors ${
                                filters.size === size
                                ? 'bg-black text-white'
                                : 'bg-white text-black hover:bg-gray-100'
                            }`}
                        >
                            {size}
                        </button>
                    )})}
                </div>
            </div>

            {/* Reset */}
            <button
                onClick={() => {
                    resetFilters();
                    if (onClose) onClose();
                }}
                className="mt-auto border border-black py-2 px-4 uppercase text-xs font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
            >
                Clear All Filters
            </button>
        </div>
    );
};
