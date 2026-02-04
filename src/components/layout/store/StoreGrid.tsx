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
import StoreSidebar from "./StoreSidebar";
import { Filter } from "lucide-react";

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setPerPage, setPage } = useStoreFilters();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];

    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(12);
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="min-h-screen bg-white text-black">
            <div className="flex flex-col md:flex-row relative">
                {/* Sidebar */}
                <StoreSidebar
                    filters={filters}
                    setCategory={setCategory}
                    setSubcategory={setSubcategory}
                    setSize={setSize}
                    categories={categories}
                    subcategories={subcategories}
                    sizes={sizes}
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />

                {/* Main Content */}
                <div className="flex-1 p-4 md:p-8 lg:p-12">
                     {/* Mobile Filter Toggle */}
                    <div className="md:hidden flex justify-end mb-6">
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="flex items-center gap-2 uppercase font-bold tracking-widest border border-black px-4 py-2 text-sm hover:bg-black hover:text-white transition-colors"
                        >
                            <Filter className="w-4 h-4" />
                            Filters
                        </button>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-500 font-light">
                                No products found for the selected filters.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16">
                        <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
