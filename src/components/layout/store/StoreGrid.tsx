"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { Pagination } from "./Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { StoreSidebar } from "./StoreSidebar";
import { SlidersHorizontal } from "lucide-react";

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const {
        filters,
        setCategory,
        setSubcategory,
        setSize,
        setColor,
        setPerPage,
        setPage,
        resetFilters
    } = useStoreFilters();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar */}
            <StoreSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                filters={filters}
                setCategory={setCategory}
                setSubcategory={setSubcategory}
                setSize={setSize}
                setColor={setColor}
                resetFilters={resetFilters}
                fixedCategory={fixedCategory}
            />

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-12">
                {/* Mobile Filter Trigger */}
                <div className="lg:hidden flex justify-between items-center mb-6">
                    <span className="text-sm font-mono text-gray-500">
                        {productsFiltered.length} RESULT{productsFiltered.length !== 1 ? 'S' : ''}
                    </span>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex items-center gap-2 text-sm font-bold uppercase border-b border-black pb-1"
                    >
                        <SlidersHorizontal size={16} />
                        Filters
                    </button>
                </div>

                {/* Desktop Results Count */}
                <div className="hidden lg:flex justify-between items-end mb-8">
                    <h2 className="text-4xl font-thin uppercase tracking-tight">
                        {activeCategory === "All" ? "Shop All" : activeCategory}
                    </h2>
                    <span className="text-sm font-mono text-gray-500 mb-2">
                        {productsFiltered.length} PRODUCT{productsFiltered.length !== 1 ? 'S' : ''}
                    </span>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12">
                    {productsFiltered.length ? (
                        productsFiltered.map((product) => (
                            <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                            <p className="text-xl font-light mb-4">No products found.</p>
                            <button
                                onClick={resetFilters}
                                className="text-sm underline hover:text-black transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-20">
                    <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
