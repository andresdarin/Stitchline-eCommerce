"use client";
import React, { useState } from "react";
import { X, Filter, ChevronDown, ChevronUp } from "lucide-react";
import { StoreFilters } from "@/hooks/useStoreFilters";

interface StoreSidebarProps {
    categories: string[];
    subcategories: string[];
    sizes: string[];
    filters: StoreFilters;
    setCategory: (cat: string) => void;
    setSubcategory: (sub: string | undefined) => void;
    setSize: (size: string | undefined) => void;
    resetFilters: () => void;
}

const FilterSection = ({
    title,
    children,
    isOpen = true,
}: {
    title: string;
    children: React.ReactNode;
    isOpen?: boolean;
}) => {
    const [open, setOpen] = useState(isOpen);
    return (
        <div className="border-b border-black py-4">
            <button
                className="flex items-center justify-between w-full uppercase font-bold text-sm tracking-wider hover:text-gray-600 transition-colors"
                onClick={() => setOpen(!open)}
            >
                {title}
                {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {open && <div className="mt-4 space-y-2">{children}</div>}
        </div>
    );
};

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    categories,
    subcategories,
    sizes,
    filters,
    setCategory,
    setSubcategory,
    setSize,
    resetFilters,
}) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const SidebarContent = () => (
        <div className="flex flex-col h-full">
            <div className="flex items-center justify-between lg:hidden mb-6">
                <h2 className="text-xl font-bold uppercase tracking-widest">Filters</h2>
                <button onClick={() => setMobileOpen(false)}>
                    <X size={24} />
                </button>
            </div>

            {/* Collection (Category in data) */}
            <FilterSection title="Colección">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => {
                            setCategory(cat);
                            setMobileOpen(false);
                        }}
                        className={`block w-full text-left text-sm py-1 transition-colors ${
                            filters.category === cat
                                ? "font-bold underline decoration-1 underline-offset-4"
                                : "text-gray-600 hover:text-black"
                        }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </FilterSection>

            {/* Category (Subcategory in data) */}
            <FilterSection title="Categoría">
                {subcategories.map((sub) => (
                    <button
                        key={sub}
                        onClick={() => {
                            setSubcategory(sub === "All" ? undefined : sub);
                            setMobileOpen(false);
                        }}
                        className={`block w-full text-left text-sm py-1 transition-colors ${
                            (filters.subcategory === sub) || (!filters.subcategory && sub === "All")
                                ? "font-bold underline decoration-1 underline-offset-4"
                                : "text-gray-600 hover:text-black"
                        }`}
                    >
                        {sub.charAt(0).toUpperCase() + sub.slice(1)}
                    </button>
                ))}
            </FilterSection>

            {/* Size */}
            <FilterSection title="Talle">
                <div className="flex flex-wrap gap-2">
                    {sizes.filter(s => s !== "All").map((size) => (
                        <button
                            key={size}
                            onClick={() => {
                                setSize(filters.size === size ? undefined : size);
                                setMobileOpen(false);
                            }}
                            className={`w-10 h-10 flex items-center justify-center text-xs border transition-all ${
                                filters.size === size
                                    ? "bg-black text-white border-black"
                                    : "bg-transparent text-black border-gray-300 hover:border-black"
                            }`}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </FilterSection>

            <button
                onClick={() => {
                    resetFilters();
                    setMobileOpen(false);
                }}
                className="mt-8 px-4 py-2 border border-black uppercase text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-all w-full"
            >
                Limpiar Filtros
            </button>
        </div>
    );

    return (
        <>
            {/* Mobile Trigger */}
            <div className="lg:hidden mb-4">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 border border-black uppercase text-xs font-bold tracking-wider hover:bg-black hover:text-white transition-all"
                >
                    <Filter size={16} />
                    Filtros
                </button>
            </div>

            {/* Mobile Sidebar (Drawer) */}
            {mobileOpen && (
                <div className="fixed inset-0 z-50 flex">
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setMobileOpen(false)}
                    />
                    <div className="relative w-80 max-w-[80%] bg-white h-full p-6 shadow-2xl overflow-y-auto animate-in slide-in-from-left duration-300">
                        <SidebarContent />
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 pr-8 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar">
                <SidebarContent />
            </div>
        </>
    );
};
