import React from 'react';
import { X } from 'lucide-react';
import { StoreFilters } from '@/hooks/useStoreFilters';

interface StoreSidebarProps {
    filters: StoreFilters;
    setCategory: (category: string) => void;
    setSubcategory: (subcategory?: string) => void;
    setSize: (size?: string) => void;
    categories: string[];
    subcategories: string[];
    sizes: string[];
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    filters,
    setCategory,
    setSubcategory,
    setSize,
    categories,
    subcategories,
    sizes,
    isOpen,
    onClose,
    className = ""
}) => {
    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={onClose}
                />
            )}

            {/* Sidebar Container */}
            <div className={`
                fixed top-0 left-0 h-full w-80 bg-white border-r border-black p-8 z-50
                transform transition-transform duration-300 ease-in-out overflow-y-auto
                md:static md:w-64 md:transform-none md:border-r md:h-auto md:z-auto
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                ${className}
            `}>
                {/* Mobile Header */}
                <div className="flex justify-between items-center mb-10 md:hidden">
                    <span className="text-xl font-bold uppercase tracking-widest">Filters</span>
                    <button onClick={onClose}>
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <div className="flex flex-col gap-12">
                    {/* Categories */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-black pb-2">
                            Category
                        </h3>
                        <ul className="space-y-3">
                            {categories.map((cat) => (
                                <li key={cat}>
                                    <button
                                        onClick={() => {
                                            setCategory(cat);
                                            // Optional: Close on mobile selection? Maybe not.
                                        }}
                                        className={`text-sm uppercase tracking-wide hover:opacity-60 transition-opacity text-left w-full ${
                                            filters.category === cat ? 'font-bold underline decoration-1 underline-offset-4' : 'font-light'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Collection (Subcategories) */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-black pb-2">
                            Collection
                        </h3>
                        <ul className="space-y-3">
                            {subcategories.map((sub) => (
                                <li key={sub}>
                                    <button
                                        onClick={() => setSubcategory(sub === 'All' ? undefined : sub)}
                                        className={`text-sm uppercase tracking-wide hover:opacity-60 transition-opacity text-left w-full ${
                                            (filters.subcategory === sub) || (sub === 'All' && !filters.subcategory)
                                                ? 'font-bold underline decoration-1 underline-offset-4'
                                                : 'font-light'
                                        }`}
                                    >
                                        {sub}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Sizes */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-6 border-b border-black pb-2">
                            Size
                        </h3>
                        <div className="grid grid-cols-3 gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSize(size === 'All' ? undefined : size)}
                                    className={`
                                        text-xs uppercase py-2 border transition-all
                                        ${(filters.size === size) || (size === 'All' && !filters.size)
                                            ? 'bg-black text-white border-black'
                                            : 'bg-transparent text-black border-gray-300 hover:border-black'
                                        }
                                    `}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StoreSidebar;
