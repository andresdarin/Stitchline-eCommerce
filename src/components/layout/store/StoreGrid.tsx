"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import StoreSidebar from "./StoreSidebar";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { Pagination } from "./Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { Filter } from "lucide-react";

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setPerPage, setPage } = useStoreFilters();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // ✅ Si hay una categoría fija, aplicarla directamente
    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(8);
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen relative bg-white">
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-72 shrink-0 border-r border-black">
                 <div className="sticky top-0 h-screen overflow-y-auto no-scrollbar">
                    <StoreSidebar fixedCategory={fixedCategory} />
                 </div>
            </div>

            {/* Mobile Sidebar (Overlay/Drawer) */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 bg-white lg:hidden animate-in slide-in-from-left duration-300">
                    <StoreSidebar
                        fixedCategory={fixedCategory}
                        onClose={() => setMobileFiltersOpen(false)}
                        className="w-full h-full"
                    />
                </div>
            )}

            {/* Main Content */}
            <div className="flex-1 p-6 md:p-10 lg:p-14">
                {/* Mobile Filter Toggle */}
                <div className="lg:hidden mb-8 flex justify-between items-center border-b border-black pb-4">
                    <span className="text-xl font-thin uppercase tracking-widest">
                        {productsFiltered.length} Products
                    </span>
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="flex items-center gap-2 border border-black px-6 py-2 uppercase text-sm font-bold hover:bg-black hover:text-white transition-colors"
                    >
                        <Filter size={16} /> Filters
                    </button>
                </div>

                <div className="hidden lg:flex justify-between items-center mb-8 border-b border-black pb-4">
                     <span className="text-xl font-thin uppercase tracking-widest">
                        {productsFiltered.length} Products Found
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 md:gap-8">
                    {productsFiltered.length ? (
                        productsFiltered.map((product) => (
                            <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-gray-500">
                            <p className="text-xl font-light uppercase">No products found for the selected filters.</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-16 border-t border-black pt-8">
                    <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
