'use client';

import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { products } from '@/data/data';
import { extractCategories, extractSubcategories, extractSizes, extractColors } from '@/utils/productHelpers';
import { StoreFilters } from '@/hooks/useStoreFilters';

interface StoreSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    filters: StoreFilters;
    setCategory: (category: string) => void;
    setSubcategory: (subcategory?: string) => void;
    setSize: (size?: string) => void;
    setColor: (color?: string) => void;
    resetFilters: () => void;
    fixedCategory?: string;
}

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    isOpen,
    onClose,
    filters,
    setCategory,
    setSubcategory,
    setSize,
    setColor,
    resetFilters,
    fixedCategory,
}) => {
    // Generate options based on current products
    const categories = ["All", ...extractCategories(products)];
    // Subcategories depend on selected category if any, but let's show all relevant if 'All' is selected
    // or filter down if a specific category is selected.
    const activeCategory = fixedCategory || filters.category;
    const subcategories = ["All", ...extractSubcategories(products, activeCategory === "All" ? undefined : activeCategory)];
    const sizes = ["All", ...extractSizes(products)];
    const colors = ["All", ...extractColors(products)];

    // Content to be reused in Desktop and Mobile views
    const renderFilterContent = () => (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold uppercase tracking-wider">Filters</h3>
                <button
                    onClick={resetFilters}
                    className="text-xs uppercase underline text-gray-500 hover:text-black transition-colors"
                >
                    Clear All
                </button>
            </div>

            {/* Categories (Hidden if fixedCategory is present) */}
            {!fixedCategory && (
                <div className="space-y-4">
                    <h4 className="text-sm font-semibold uppercase border-b border-black pb-2">Category</h4>
                    <div className="flex flex-col gap-2">
                        {categories.map((cat) => (
                            <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="category"
                                    value={cat}
                                    checked={filters.category === cat}
                                    onChange={() => setCategory(cat)}
                                    className="peer sr-only"
                                />
                                <div className="w-3 h-3 border border-black peer-checked:bg-black transition-colors" />
                                <span className={`text-sm uppercase ${filters.category === cat ? 'font-bold' : 'font-light'} group-hover:pl-1 transition-all`}>
                                    {cat}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {/* Collection (Subcategory) */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase border-b border-black pb-2">Collection</h4>
                <div className="flex flex-col gap-2">
                    {subcategories.map((sub) => {
                        const isSelected = filters.subcategory === (sub === "All" ? undefined : sub);
                        const isAll = sub === "All";
                        const active = isAll ? !filters.subcategory : isSelected;

                        return (
                            <label key={sub} className="flex items-center gap-2 cursor-pointer group">
                                <input
                                    type="radio"
                                    name="subcategory"
                                    value={sub}
                                    checked={active}
                                    onChange={() => setSubcategory(sub === "All" ? undefined : sub)}
                                    className="peer sr-only"
                                />
                                <div className="w-3 h-3 border border-black peer-checked:bg-black transition-colors" />
                                <span className={`text-sm uppercase ${active ? 'font-bold' : 'font-light'} group-hover:pl-1 transition-all`}>
                                    {sub}
                                </span>
                            </label>
                        );
                    })}
                </div>
            </div>

            {/* Size */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase border-b border-black pb-2">Size</h4>
                <div className="flex flex-wrap gap-2">
                    {sizes.filter(s => s !== "All").map((size) => {
                        const isSelected = filters.size === size;
                        return (
                            <button
                                key={size}
                                onClick={() => setSize(isSelected ? undefined : size)}
                                className={`
                                    w-10 h-10 flex items-center justify-center border text-xs font-bold transition-all
                                    ${isSelected
                                        ? 'bg-black text-white border-black'
                                        : 'bg-white text-black border-gray-300 hover:border-black'
                                    }
                                `}
                            >
                                {size}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Color */}
            <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase border-b border-black pb-2">Color</h4>
                <div className="flex flex-wrap gap-2">
                    {colors.filter(c => c !== "All").map((color) => {
                        const isSelected = filters.color === color;
                        return (
                            <button
                                key={color}
                                onClick={() => setColor(isSelected ? undefined : color)}
                                title={color}
                                className={`
                                    w-8 h-8 rounded-full border transition-all relative
                                    ${isSelected ? 'border-black ring-1 ring-black ring-offset-2' : 'border-gray-200 hover:border-black'}
                                `}
                                style={{ backgroundColor: color.toLowerCase() }}
                            >
                                {/* Cross for white/light colors validation visualization if needed, but styling usually handles it */}
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar (Hidden on mobile) */}
            <aside className="hidden lg:block w-64 shrink-0 pr-8 border-r border-transparent">
                <div className="sticky top-24">
                   {renderFilterContent()}
                </div>
            </aside>

            {/* Mobile Sidebar (Drawer) */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                                <h2 className="text-xl font-bold uppercase">Filter By</h2>
                                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                {renderFilterContent()}
                            </div>

                            <div className="p-6 border-t border-gray-100">
                                <button
                                    onClick={onClose}
                                    className="w-full bg-black text-white py-4 uppercase font-bold tracking-widest hover:bg-gray-900 transition-colors"
                                >
                                    Show Results
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
