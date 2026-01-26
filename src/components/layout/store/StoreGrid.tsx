"use client";
import React, { useEffect } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { extractCategories, extractSubcategories, extractSizes, extractColors } from "@/utils/productHelpers";
import { Pagination } from "./Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { StoreSidebar } from "./StoreSidebar";

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setColor, setPerPage, setPage } = useStoreFilters();

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
        setPerPage(8); // Or 12 if we want more
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">

                {/* Sidebar Filter */}
                <div className="w-full md:w-auto flex-shrink-0">
                    <StoreSidebar
                        filters={filters}
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        colors={colors}
                        setCategory={setCategory}
                        setSubcategory={(v) => setSubcategory(v === "All" ? undefined : v)}
                        setSize={(v) => setSize(v === "All" ? undefined : v)}
                        setColor={(v) => setColor(v === "All" ? undefined : v)}
                        hideCategoryFilter={!!fixedCategory}
                    />
                </div>

                {/* Product Grid Area */}
                <div className="flex-1 w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full flex flex-col items-center justify-center py-20 text-gray-500 border border-dashed border-gray-300">
                                <p className="text-lg uppercase tracking-wide">No products found</p>
                                <p className="text-sm">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 flex justify-center">
                        <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
