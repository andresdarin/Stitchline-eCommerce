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
import { Sidebar } from "./Sidebar";
import { Filter } from "lucide-react";

interface StoreGridProps {
    fixedCategory?: string; // ← nueva prop opcional
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setPerPage, setPage, resetFilters } = useStoreFilters();
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];

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
        <div className="flex flex-col md:flex-row min-h-screen border-t border-black">
             {/* Desktop Sidebar */}
             {!fixedCategory && (
                <aside className="hidden md:block w-64 p-6 border-r border-black bg-white">
                     <Sidebar
                        filters={filters}
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        setCategory={setCategory}
                        setSubcategory={setSubcategory}
                        setSize={setSize}
                        resetFilters={resetFilters}
                     />
                </aside>
             )}

             <div className="flex-1 bg-white">
                {/* Mobile Filter Button */}
                {!fixedCategory && (
                    <div className="md:hidden p-4 border-b border-black flex justify-between items-center bg-white sticky top-0 z-30">
                        <span className="text-sm font-bold uppercase tracking-widest">Filters</span>
                        <button
                            onClick={() => setMobileFiltersOpen(true)}
                            className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                        >
                            <Filter size={20} />
                        </button>
                    </div>
                )}

                {/* Mobile Sidebar Overlay */}
                {mobileFiltersOpen && !fixedCategory && (
                    <div className="fixed inset-0 z-50 bg-white p-6 overflow-y-auto">
                        <Sidebar
                            filters={filters}
                            categories={categories}
                            subcategories={subcategories}
                            sizes={sizes}
                            setCategory={setCategory}
                            setSubcategory={setSubcategory}
                            setSize={setSize}
                            resetFilters={resetFilters}
                            onClose={() => setMobileFiltersOpen(false)}
                        />
                    </div>
                )}

                {/* Product Grid */}
                <div className="p-6 md:p-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                No products found for the selected filters.
                            </div>
                        )}
                    </div>

                    {/* Pagination */}
                    <div className="mt-10 flex justify-center">
                        <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                    </div>
                </div>
             </div>
        </div>
    );
};

export default StoreGrid;
