'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronDown, ChevronRight } from 'lucide-react';

interface StoreSidebarProps {
    filters: {
        category: string;
        subcategory?: string;
        size?: string;
    };
    categories: string[];
    subcategories: string[];
    sizes: string[];
    setCategory: (category: string) => void;
    setSubcategory: (subcategory: string) => void;
    setSize: (size: string) => void;
    isOpen: boolean;
    onClose: () => void;
    fixedCategory?: string;
}

const StoreSidebar: React.FC<StoreSidebarProps> = ({
    filters,
    categories,
    subcategories,
    sizes,
    setCategory,
    setSubcategory,
    setSize,
    isOpen,
    onClose,
    fixedCategory
}) => {
    // If fixedCategory is set, open collection by default instead of category
    const [expandedSection, setExpandedSection] = useState<string | null>(fixedCategory ? 'collection' : 'category');

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section);
    };

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-white text-black font-light p-6 overflow-y-auto border-r border-black">
             <div className="flex justify-between items-center mb-8 lg:hidden">
                <h2 className="text-2xl uppercase font-thin tracking-widest">Filters</h2>
                <button onClick={onClose} className="p-2">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Categories - Hide if fixedCategory is present */}
            {!fixedCategory && (
                <div className="mb-6">
                    <button
                        onClick={() => toggleSection('category')}
                        className="flex justify-between items-center w-full py-2 border-b border-black/10 hover:border-black transition-colors"
                    >
                        <span className="uppercase tracking-wider text-sm">Category</span>
                        {expandedSection === 'category' ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                    </button>
                    <AnimatePresence>
                        {expandedSection === 'category' && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <ul className="py-4 space-y-2">
                                    {categories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => {
                                                    setCategory(cat);
                                                    // Reset subcategory when changing category
                                                    if (cat !== filters.category) setSubcategory('All');
                                                }}
                                                className={`text-sm hover:underline underline-offset-4 ${filters.category === cat ? 'font-medium underline' : 'text-gray-600'}`}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Subcategories (Collections) */}
            <div className="mb-6">
                 <button
                    onClick={() => toggleSection('collection')}
                    className="flex justify-between items-center w-full py-2 border-b border-black/10 hover:border-black transition-colors"
                >
                    <span className="uppercase tracking-wider text-sm">Collection</span>
                    {expandedSection === 'collection' ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                </button>
                <AnimatePresence>
                    {expandedSection === 'collection' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                             <ul className="py-4 space-y-2">
                                {subcategories.map((sub) => (
                                    <li key={sub}>
                                        <button
                                            onClick={() => setSubcategory(sub)}
                                             className={`text-sm hover:underline underline-offset-4 ${filters.subcategory === sub ? 'font-medium underline' : 'text-gray-600'}`}
                                        >
                                            {sub}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Sizes */}
            <div className="mb-6">
                 <button
                    onClick={() => toggleSection('size')}
                    className="flex justify-between items-center w-full py-2 border-b border-black/10 hover:border-black transition-colors"
                >
                    <span className="uppercase tracking-wider text-sm">Size</span>
                    {expandedSection === 'size' ? <ChevronDown size={16}/> : <ChevronRight size={16}/>}
                </button>
                <AnimatePresence>
                    {expandedSection === 'size' && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="py-4 grid grid-cols-4 gap-2">
                                {sizes.map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSize(size)}
                                        className={`text-xs py-2 border transition-colors ${
                                            filters.size === size
                                            ? 'border-black bg-black text-white'
                                            : 'border-gray-200 hover:border-black'
                                        }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 h-auto sticky top-0 self-start">
                <SidebarContent />
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween' }}
                            className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-50 lg:hidden shadow-xl"
                        >
                            <SidebarContent />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default StoreSidebar;
