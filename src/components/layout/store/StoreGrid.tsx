"use client";
import React, { useEffect } from "react";
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

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setPerPage, setPage, resetFilters } = useStoreFilters();

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];

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
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-12 py-12 min-h-screen">
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Sidebar */}
                <StoreSidebar
                    categories={categories}
                    subcategories={subcategories}
                    sizes={sizes}
                    filters={filters}
                    setCategory={setCategory}
                    setSubcategory={setSubcategory}
                    setSize={setSize}
                    resetFilters={resetFilters}
                />

                <div className="flex-1">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-500 font-light uppercase tracking-wider">
                                No products found for the selected filters.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="mt-16 border-t border-black pt-8">
                         <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
