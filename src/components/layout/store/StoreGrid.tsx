"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { extractCategories, extractSubcategories, extractSizes, extractTags } from "@/utils/productHelpers";
import { Pagination } from "./Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { SidebarFilters } from "./SidebarFilters";
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
        setTags,
        setPerPage,
        setPage,
        resetFilters
    } = useStoreFilters();

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];
    const tags = extractTags(products);

    // ✅ Si hay una categoría fija, aplicarla directamente
    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(12); // Increased per page to look better with sidebar
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="min-h-screen p-4 md:p-10 lg:px-20 bg-white">
            <div className="flex flex-col md:flex-row gap-8 relative">

                {/* Mobile Filter Toggle */}
                <div className="md:hidden flex justify-end mb-4">
                    <button
                        onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                        className="flex items-center gap-2 border border-black px-4 py-2 uppercase text-sm tracking-wider"
                    >
                        <Filter size={16} /> Filters
                    </button>
                </div>

                {/* Sidebar Filters */}
                <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block absolute md:static bg-white z-20 w-full md:w-auto left-0 top-12 md:top-auto p-4 md:p-0 border-b md:border-b-0 border-black md:border-none`}>
                    <SidebarFilters
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        tags={tags}
                        filters={filters}
                        setCategory={setCategory}
                        setSubcategory={setSubcategory}
                        setSize={setSize}
                        setTags={setTags}
                        resetFilters={resetFilters}
                    />
                </div>

                {/* Product Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
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
