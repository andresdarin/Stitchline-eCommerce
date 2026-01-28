"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { extractCategories, extractSubcategories, extractSizes } from "@/utils/productHelpers";
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
    const { filters, setCategory, setSubcategory, setSize, setPage, setPerPage } = useStoreFilters();
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    // Map Subcategories as "Collections"
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];

    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(8); // Keep 8 per page as requested or default
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <div className="flex flex-1">
                {/* Sidebar Component */}
                {!fixedCategory && (
                    <StoreSidebar
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        filters={filters}
                        setCategory={setCategory}
                        setSubcategory={setSubcategory}
                        setSize={setSize}
                        mobileOpen={mobileSidebarOpen}
                        setMobileOpen={setMobileSidebarOpen}
                    />
                )}

                {/* Main Content */}
                <div className="flex-1 p-4 md:p-12">
                    {/* Mobile Filter Toggle */}
                    {!fixedCategory && (
                        <div className="md:hidden flex justify-between items-center mb-6 border-b border-black pb-4">
                            <button
                                onClick={() => setMobileSidebarOpen(true)}
                                className="flex items-center text-sm font-bold uppercase tracking-widest hover:text-gray-600"
                            >
                                <Filter size={18} className="mr-2" />
                                Filters
                            </button>
                            <span className="text-xs text-gray-500">{productsFiltered.length} Products</span>
                        </div>
                    )}

                    {/* Results Count (Desktop) */}
                    <div className="hidden md:flex justify-between items-center mb-8">
                        <span className="text-sm text-gray-400 uppercase tracking-widest">
                            {productsFiltered.length} Results
                        </span>
                        {/* Potential Sort dropdown could go here */}
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-12">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                                <span className="text-xl mb-4">No products found</span>
                                <button
                                    onClick={() => {
                                        setCategory("All");
                                        setSubcategory(undefined);
                                        setSize(undefined);
                                    }}
                                    className="underline uppercase text-sm font-bold"
                                >
                                    Clear Filters
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
        </div>
    );
};

export default StoreGrid;
