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
    const { filters, setCategory, setPerPage, setPage } = useStoreFilters();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // ✅ Si hay una categoría fija, aplicarla directamente
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
        <div className="relative min-h-screen">
             {/* Mobile Filter Button */}
            <div className="md:hidden p-4 border-b border-gray-200 flex justify-between items-center sticky top-16 z-30 bg-white">
                 <span className="text-sm font-bold uppercase tracking-widest">
                    {productsFiltered.length} Items
                 </span>
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors focus:ring-2 focus:ring-black focus:outline-none"
                    aria-label="Open filters"
                >
                    <Filter size={16} /> Filters
                </button>
            </div>

             {/* Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsSidebarOpen(false)} />
                    <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl z-50 animate-in slide-in-from-left duration-300">
                        <StoreSidebar onClose={() => setIsSidebarOpen(false)} />
                    </div>
                </div>
            )}

            <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row">
                 {/* Desktop Sidebar */}
                <div className="hidden md:block w-64 lg:w-72 flex-shrink-0 border-r border-gray-200 min-h-[calc(100vh-5rem)]">
                     <div className="sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto custom-scrollbar p-4">
                        <StoreSidebar />
                     </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6 md:p-10 lg:p-14">
                    {/* Header info (count) for Desktop */}
                    <div className="hidden md:flex justify-between items-center mb-8">
                         <span className="text-xs font-light text-gray-500 uppercase tracking-widest">
                            Showing {productsFiltered.length} results
                         </span>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-40 text-gray-400 font-light text-xl">
                                No products match your filters.
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
