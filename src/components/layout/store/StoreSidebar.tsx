'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import { useStoreFilters } from '@/hooks/useStoreFilters';

interface StoreSidebarProps {
    categories: string[];
    subcategories: string[];
    sizes: string[];
    colors: string[];
    filters: ReturnType<typeof useStoreFilters>['filters'];
    setCategory: (category: string) => void;
    setSubcategory: (subcategory: string | undefined) => void;
    setSize: (size: string | undefined) => void;
    setColor: (color: string | undefined) => void;
    fixedCategory?: string;
    isOpen?: boolean; // For mobile modal state
    onClose?: () => void; // For closing mobile modal
    className?: string;
}

const FilterSection = ({
    title,
    children,
    defaultOpen = false
}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-black">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 px-2 hover:bg-gray-100 transition-colors"
            >
                <span className="font-mono uppercase tracking-widest text-sm font-bold">{title}</span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <div className="pb-4 px-2">
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    categories,
    subcategories,
    sizes,
    colors,
    filters,
    setCategory,
    setSubcategory,
    setSize,
    setColor,
    fixedCategory,
    onClose,
    className = ""
}) => {
    // Helper to determine if an option is active
    const isActive = (currentValue: string | undefined, value: string) => {
        if (!currentValue && value === 'All') return true;
        return currentValue === value || (value === 'All' && !currentValue);
    };

    return (
        <aside className={`bg-white h-full flex flex-col ${className}`}>
            {/* Header for Mobile (Close Button) */}
            <div className="flex justify-between items-center p-4 border-b border-black lg:hidden">
                <span className="font-mono text-lg font-bold uppercase">Filters</span>
                <button onClick={onClose} aria-label="Close filters">
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {!fixedCategory && (
                    <FilterSection title="Category" defaultOpen={true}>
                        <div className="flex flex-col gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`text-left text-sm py-1 px-2 border border-transparent transition-all
                                    ${isActive(filters.category, cat)
                                            ? 'font-bold bg-black text-white border-black'
                                            : 'hover:border-black hover:bg-gray-50'
                                        }`}
                                >
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </FilterSection>
                )}

                <FilterSection title="Collection" defaultOpen={true}>
                    <div className="flex flex-col gap-2">
                        {subcategories.map((sub) => (
                            <button
                                key={sub}
                                onClick={() => setSubcategory(sub === 'All' ? undefined : sub)}
                                className={`text-left text-sm py-1 px-2 border border-transparent transition-all
                                    ${isActive(filters.subcategory, sub)
                                        ? 'font-bold bg-black text-white border-black'
                                        : 'hover:border-black hover:bg-gray-50'
                                    }`}
                            >
                                {sub.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection title="Size" defaultOpen={true}>
                    <div className="grid grid-cols-3 gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => setSize(size === 'All' ? undefined : size)}
                                className={`text-center text-sm py-2 border transition-all
                                    ${isActive(filters.size, size)
                                        ? 'bg-black text-white border-black font-bold'
                                        : 'border-gray-300 hover:border-black'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </FilterSection>

                <FilterSection title="Color" defaultOpen={false}>
                     <div className="flex flex-col gap-2">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setColor(color === 'All' ? undefined : color)}
                                className={`text-left text-sm py-1 px-2 border border-transparent transition-all
                                    ${isActive(filters.color, color)
                                        ? 'font-bold bg-black text-white border-black'
                                        : 'hover:border-black hover:bg-gray-50'
                                    }`}
                            >
                                {color}
                            </button>
                        ))}
                    </div>
                </FilterSection>
            </div>
        </aside>
    );
};
