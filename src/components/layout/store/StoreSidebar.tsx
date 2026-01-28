import React from "react";
import { X } from "lucide-react";
import { StoreFilters } from "@/hooks/useStoreFilters";

interface StoreSidebarProps {
    categories: string[];
    subcategories: string[];
    sizes: string[];
    filters: StoreFilters;
    setCategory: (val: string) => void;
    setSubcategory: (val: string | undefined) => void;
    setSize: (val: string | undefined) => void;
    mobileOpen: boolean;
    setMobileOpen: (val: boolean) => void;
}

export const StoreSidebar: React.FC<StoreSidebarProps> = ({
    categories,
    subcategories,
    sizes,
    filters,
    setCategory,
    setSubcategory,
    setSize,
    mobileOpen,
    setMobileOpen,
}) => {
    // Helper to render a filter section
    const renderSection = (title: string, items: string[], currentVal: string, onChange: (val: string) => void) => (
        <div className="mb-8">
            <h3 className="font-bold text-lg uppercase mb-4 tracking-wider border-b border-black pb-2">
                {title}
            </h3>
            <ul className="space-y-2">
                {items.map((item) => {
                    const isActive = currentVal === item || (item === "All" && !currentVal) || (item === "All" && currentVal === "All");
                    return (
                        <li key={item}>
                            <button
                                onClick={() => onChange(item)}
                                className={`text-sm uppercase text-left w-full hover:underline transition-all ${
                                    isActive ? "font-bold text-black" : "text-gray-500"
                                }`}
                            >
                                {item === "All" ? `All ${title}` : item}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );

    // Wrapper classes for responsive behavior
    const desktopClasses = "hidden md:block w-64 min-w-[250px] border-r border-black p-8 mr-8 h-fit sticky top-24";
    const mobileClasses = `fixed inset-0 z-50 bg-white p-6 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
        mobileOpen ? "translate-x-0" : "-translate-x-full"
    }`;

    const content = (
        <>
            {/* Mobile Header */}
            <div className="md:hidden flex justify-between items-center mb-8 border-b border-black pb-4">
                <span className="text-xl font-bold uppercase">Filters</span>
                <button onClick={() => setMobileOpen(false)}>
                    <X size={24} />
                </button>
            </div>

            {renderSection("Category", categories, filters.category, (val) => {
                setCategory(val);
                if (window.innerWidth < 768) setMobileOpen(false);
            })}

            {renderSection("Collection", subcategories, filters.subcategory ?? "All", (val) => {
                setSubcategory(val === "All" ? undefined : val);
                if (window.innerWidth < 768) setMobileOpen(false);
            })}

            {renderSection("Size", sizes, filters.size ?? "All", (val) => {
                setSize(val === "All" ? undefined : val);
                if (window.innerWidth < 768) setMobileOpen(false);
            })}
        </>
    );

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className={desktopClasses}>
                {content}
            </aside>

            {/* Mobile Sidebar (Drawer) */}
            <aside className={mobileClasses}>
                {content}
            </aside>

            {/* Backdrop for mobile */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
};
