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
import { Filter } from "lucide-react";

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
        <div className="flex flex-col lg:flex-row min-h-screen">
            {/* Sidebar (Desktop Sticky / Mobile Drawer) */}
            <StoreSidebar
                isOpen={mobileFiltersOpen}
                onClose={() => setMobileFiltersOpen(false)}
                filters={filters}
                setCategory={setCategory}
                setSubcategory={setSubcategory}
                setSize={setSize}
                setColor={setColor}
                resetFilters={resetFilters}
                fixedCategory={fixedCategory}
            />

            <main className="flex-1 p-6 lg:p-12">
                {/* Mobile Filter Trigger */}
                <div className="lg:hidden mb-6 flex justify-between items-center border-b border-black pb-4">
                    <span className="text-sm font-bold uppercase">{productsFiltered.length} Products</span>
                    <button
                        onClick={() => setMobileFiltersOpen(true)}
                        className="flex items-center gap-2 text-sm uppercase font-bold hover:text-gray-600 transition-colors"
                    >
                        <Filter size={18} />
                        Filters
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-12">
                    {productsFiltered.length ? (
                        productsFiltered.map((product) => (
                            <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-32 text-gray-500">
                            <p className="text-xl font-light mb-4">No products found.</p>
                            <button
                                onClick={resetFilters}
                                className="border-b border-black text-black hover:text-gray-600 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-16">
                    <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </main>
        </div>
    );
};

export default StoreGrid;
