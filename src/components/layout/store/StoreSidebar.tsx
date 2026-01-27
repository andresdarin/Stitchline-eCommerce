"use client";
import React, { useState } from "react";
import { StoreFilters } from "@/hooks/useStoreFilters";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoreSidebarProps {
    filters: StoreFilters;
    setCategory: (c: string) => void;
    setSubcategory: (s?: string) => void;
    setSize: (s?: string) => void;
    setTags: (t?: string[]) => void;
    categories: string[];
    subcategories: string[];
    sizes: string[];
    tags: string[];
    className?: string;
    onClose?: () => void; // Mobile close
}

const FilterSection = ({
    title,
    children,
    defaultOpen = true,
}: {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border-b border-black py-6 last:border-0">
            <button
                className="flex w-full items-center justify-between text-left text-sm font-black uppercase tracking-widest hover:text-gray-600 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
                {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            <div
                className={cn(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                )}
            >
                {children}
            </div>
        </div>
    );
};

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    filters,
    setCategory,
    setSubcategory,
    setSize,
    setTags,
    categories,
    subcategories,
    sizes,
    tags,
    className,
    onClose,
}) => {
    // Handle Tag Selection
    const toggleTag = (tag: string) => {
        const currentTags = filters.tags || [];
        const newTags = currentTags.includes(tag)
            ? currentTags.filter((t) => t !== tag)
            : [...currentTags, tag];
        setTags(newTags.length > 0 ? newTags : undefined);
    };

    return (
        <aside className={cn("flex flex-col h-full bg-white text-black p-4 md:p-0", className)}>
            <div className="flex items-center justify-between mb-8 md:hidden border-b border-black pb-4">
                <h2 className="text-xl font-black uppercase tracking-widest">Filters</h2>
                <button onClick={onClose} className="p-2 border border-black hover:bg-black hover:text-white transition-colors">
                    <X className="h-5 w-5" />
                </button>
            </div>

            {/* Category */}
            <FilterSection title="Category">
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat}>
                            <button
                                onClick={() => setCategory(cat)}
                                className={cn(
                                    "text-sm hover:translate-x-2 transition-transform uppercase block w-full text-left",
                                    filters.category === cat ? "font-bold underline decoration-2 underline-offset-4" : "text-gray-500 hover:text-black"
                                )}
                            >
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterSection>

            {/* Collection (Tags) */}
            {tags.length > 0 && (
                <FilterSection title="Collection">
                    <ul className="space-y-3">
                        {tags.map((tag) => (
                            <li key={tag}>
                                <button
                                    onClick={() => toggleTag(tag)}
                                    className="flex items-center gap-3 w-full group cursor-pointer"
                                >
                                    <div className={cn(
                                        "w-4 h-4 border border-black flex items-center justify-center transition-colors",
                                        filters.tags?.includes(tag) ? "bg-black" : "bg-white group-hover:bg-gray-100"
                                    )}>
                                        {filters.tags?.includes(tag) && <div className="w-2 h-2 bg-white" />}
                                    </div>
                                    <span className={cn(
                                        "text-sm uppercase tracking-wide transition-colors",
                                        filters.tags?.includes(tag) ? "font-bold text-black" : "text-gray-500 group-hover:text-black"
                                    )}>
                                        {tag}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </FilterSection>
            )}

             {/* Type (Subcategory) */}
             <FilterSection title="Type">
                <ul className="space-y-3">
                    {subcategories.map((sub) => (
                        <li key={sub}>
                            <button
                                onClick={() => setSubcategory(sub === filters.subcategory ? undefined : sub)}
                                className={cn(
                                    "text-sm hover:translate-x-2 transition-transform capitalize block w-full text-left",
                                    filters.subcategory === sub ? "font-bold text-black" : "text-gray-500 hover:text-black"
                                )}
                            >
                                {sub}
                            </button>
                        </li>
                    ))}
                </ul>
            </FilterSection>

            {/* Size */}
            <FilterSection title="Size">
                <div className="grid grid-cols-4 gap-2">
                    {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSize(size === filters.size ? undefined : size)}
                            className={cn(
                                "border border-black py-2 text-xs font-bold transition-all hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                                filters.size === size ? "bg-black text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]" : "bg-white text-black"
                            )}
                        >
                            {size}
                        </button>
                    ))}
                </div>
            </FilterSection>
        </aside>
    );
};
