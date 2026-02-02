"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { StoreSidebar } from "./StoreSidebar";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { extractCategories, extractSubcategories, extractSizes, extractColors } from "@/utils/productHelpers";
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
    const { filters, setCategory, setSubcategory, setSize, setColor, setPerPage, setPage } = useStoreFilters();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];
    const colors = ["All", ...extractColors(products)];

    // Apply fixed category if present
    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(12); // Increased per page for better grid view
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="flex min-h-screen">
            {/* Sidebar / Filter Drawer */}
            <StoreSidebar
                filters={filters}
                setCategory={setCategory}
                setSubcategory={setSubcategory}
                setSize={setSize}
                setColor={setColor}
                categories={categories}
                subcategories={subcategories}
                sizes={sizes}
                colors={colors}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                fixedCategory={fixedCategory}
            />

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-12">
                {/* Mobile Header & Filter Toggle */}
                <div className="lg:hidden mb-8 flex justify-between items-center border-b border-black pb-4">
                    <span className="text-xl font-thin uppercase tracking-widest">Store</span>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex items-center gap-2 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors px-4 py-2 border border-black"
                    >
                        <Filter size={16} /> Filters
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16">
                    {productsFiltered.length ? (
                        productsFiltered.map((product) => (
                            <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-32 text-gray-500 font-light tracking-wide">
                            No products found for the selected filters.
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-20 border-t border-black pt-10">
                    <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
