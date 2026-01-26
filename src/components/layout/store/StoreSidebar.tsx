'use client'

import { StoreFilters } from '@/hooks/useStoreFilters'
import { Filter, X } from 'lucide-react'
import { useState } from 'react'

interface StoreSidebarProps {
    filters: StoreFilters
    categories: string[]
    subcategories: string[]
    sizes: string[]
    colors: string[]
    setCategory: (c: string) => void
    setSubcategory: (s: string | undefined) => void
    setSize: (s: string | undefined) => void
    setColor: (c: string | undefined) => void
    hideCategoryFilter?: boolean
}

export const StoreSidebar = ({
    filters,
    categories,
    subcategories,
    sizes,
    colors,
    setCategory,
    setSubcategory,
    setSize,
    setColor,
    hideCategoryFilter
}: StoreSidebarProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const renderSection = (
        title: string,
        items: string[],
        currentValue: string | undefined,
        setValue: (v: string | undefined) => void,
        isCategory = false
    ) => (
        <div className="mb-10">
            <h3 className="uppercase tracking-widest text-xs font-bold mb-4 border-b border-black pb-2">{title}</h3>
            <ul className="space-y-3">
                {items.map((item) => {
                    const isAll = item === 'All'
                    let isActive = false

                    if (isCategory) {
                        isActive = currentValue === item
                    } else {
                        isActive = (currentValue === item) || (isAll && !currentValue)
                    }

                    return (
                        <li
                            key={item}
                            className={`cursor-pointer text-sm transition-all duration-200 ${isActive ? 'font-bold pl-2 border-l-2 border-black' : 'font-light hover:pl-1 hover:text-gray-600'}`}
                            onClick={() => {
                                if (isAll) {
                                    setValue(isCategory ? 'All' : undefined)
                                } else {
                                    setValue(item)
                                }
                                setIsOpen(false) // Optional: close on mobile selection
                            }}
                        >
                            {item.toUpperCase()}
                        </li>
                    )
                })}
            </ul>
        </div>
    )

    const SidebarContent = () => (
        <div className="flex flex-col h-full bg-white md:bg-transparent p-6 md:p-0">
            <div className="flex justify-between items-center md:hidden mb-8">
                 <h2 className="text-xl font-bold uppercase tracking-widest">Filters</h2>
                 <button onClick={() => setIsOpen(false)} className="p-2"><X size={24} /></button>
            </div>

            {!hideCategoryFilter && renderSection('Category', categories, filters.category, (v) => setCategory(v ?? 'All'), true)}
            {renderSection('Collection', subcategories, filters.subcategory, setSubcategory)}
            {renderSection('Size', sizes, filters.size, setSize)}
            {renderSection('Color', colors, filters.color, setColor)}
        </div>
    )

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden mb-6 flex justify-between items-center border-y border-black py-3 px-2">
                <span className="uppercase text-sm tracking-widest font-bold">Filter Products</span>
                <button onClick={() => setIsOpen(true)} className="flex items-center gap-2">
                    <Filter size={18} />
                </button>
            </div>

            {/* Mobile Drawer Overlay */}
            {isOpen && (
                <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)}>
                     {/* Drawer */}
                     <div
                        className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl border-l border-black overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                     >
                        <SidebarContent />
                     </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-64 pr-10 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto scrollbar-hide">
                <SidebarContent />
            </aside>
        </>
    )
}
