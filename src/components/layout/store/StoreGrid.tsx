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

    // Apply fixed category if present
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
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <StoreSidebar
                filters={filters}
                categories={categories}
                subcategories={subcategories}
                sizes={sizes}
                setCategory={setCategory}
                setSubcategory={setSubcategory}
                setSize={setSize}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                fixedCategory={fixedCategory}
            />

            {/* Main Content */}
            <div className="flex-1 p-6 lg:p-10 transition-all duration-300">
                {/* Mobile Filter Button */}
                <div className="lg:hidden flex justify-end mb-6">
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 border border-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-colors"
                    >
                        <Filter className="w-4 h-4" />
                        Filters
                    </button>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                    {productsFiltered.length ? (
                        productsFiltered.map((product) => (
                            <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                        ))
                    ) : (
                        <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500">
                            <p className="text-xl font-thin uppercase tracking-widest">No products found</p>
                            <p className="text-sm mt-2">Try adjusting your filters</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                <div className="mt-16">
                    <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
