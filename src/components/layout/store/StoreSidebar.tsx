'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StoreFilters } from '@/hooks/useStoreFilters';
import { X } from 'lucide-react';

interface StoreSidebarProps {
  filters: StoreFilters;
  categories: string[];
  subcategories: string[];
  sizes: string[];
  setCategory: (category: string) => void;
  setSubcategory: (subcategory: string | undefined) => void;
  setSize: (size: string | undefined) => void;
  isOpen: boolean; // For mobile
  onClose: () => void; // For mobile
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
}) => {
  // Common content for both desktop and mobile
  const content = (
    <div className="flex flex-col gap-8 h-full overflow-y-auto">
      {/* Category Section */}
      <div>
        <h3 className="text-xl font-thin uppercase tracking-widest mb-4 border-b border-black pb-2">
          Category
        </h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setCategory(cat)}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 hover:text-gray-500 ${
                  filters.category === cat ? 'font-bold underline decoration-1 underline-offset-4' : 'font-light'
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Collection / Subcategory Section */}
      <div>
        <h3 className="text-xl font-thin uppercase tracking-widest mb-4 border-b border-black pb-2">
          Collection
        </h3>
        <ul className="space-y-2">
          {subcategories.map((sub) => (
            <li key={sub}>
              <button
                onClick={() => setSubcategory(sub === 'All' ? undefined : sub)}
                className={`text-sm uppercase tracking-wide transition-colors duration-200 hover:text-gray-500 ${
                  (filters.subcategory === sub) || (!filters.subcategory && sub === 'All')
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

      {/* Size Section */}
      <div>
        <h3 className="text-xl font-thin uppercase tracking-widest mb-4 border-b border-black pb-2">
          Size
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSize(size === 'All' ? undefined : size)}
              className={`
                h-10 w-full flex items-center justify-center text-xs uppercase tracking-wide border border-black transition-all duration-200
                ${
                  (filters.size === size) || (!filters.size && size === 'All')
                    ? 'bg-black text-white'
                    : 'bg-white text-black hover:bg-gray-100'
                }
              `}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 h-screen sticky top-0 p-8 border-r border-black bg-white z-10">
        {content}
      </aside>

      {/* Mobile Sidebar (Drawer) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white z-50 p-8 border-r border-black lg:hidden shadow-2xl overflow-y-auto"
            >
              <div className="flex justify-end mb-6">
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close filters"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default StoreSidebar;
