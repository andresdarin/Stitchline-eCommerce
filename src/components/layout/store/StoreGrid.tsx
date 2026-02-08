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
import { motion, AnimatePresence } from "motion/react";

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
        <div className="min-h-screen bg-white">
            {/* Mobile Filter Button */}
            <div className="lg:hidden p-4 border-b border-black flex justify-between items-center sticky top-0 bg-white z-30">
                <span className="font-mono text-sm uppercase font-bold tracking-widest">
                    {productsFiltered.length} Results
                </span>
                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="flex items-center gap-2 font-mono uppercase text-sm font-bold border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors"
                >
                    <Filter size={16} /> Filters
                </button>
            </div>

            <div className="flex relative">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-1/4 sticky top-0 h-screen overflow-y-auto border-r border-black p-6">
                    <h2 className="font-mono text-xl font-bold uppercase mb-8 tracking-widest">Filter By</h2>
                    <StoreSidebar
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        colors={colors}
                        filters={filters}
                        setCategory={setCategory}
                        setSubcategory={setSubcategory}
                        setSize={setSize}
                        setColor={setColor}
                        fixedCategory={fixedCategory}
                    />
                </div>

                {/* Mobile Sidebar (Drawer) */}
                <AnimatePresence>
                    {isSidebarOpen && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsSidebarOpen(false)}
                                className="fixed inset-0 bg-black z-40 lg:hidden"
                            />
                            <motion.div
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "100%" }}
                                transition={{ type: "tween", duration: 0.3 }}
                                className="fixed inset-y-0 right-0 w-full sm:w-80 bg-white z-50 border-l border-black shadow-2xl lg:hidden"
                            >
                                <StoreSidebar
                                    categories={categories}
                                    subcategories={subcategories}
                                    sizes={sizes}
                                    colors={colors}
                                    filters={filters}
                                    setCategory={setCategory}
                                    setSubcategory={setSubcategory}
                                    setSize={setSize}
                                    setColor={setColor}
                                    fixedCategory={fixedCategory}
                                    isOpen={isSidebarOpen}
                                    onClose={() => setIsSidebarOpen(false)}
                                />
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>

                {/* Product Grid */}
                <div className="w-full lg:w-3/4 p-6 md:p-12">
                     <div className="hidden lg:flex justify-between items-center mb-8">
                        <span className="font-mono text-sm uppercase font-bold tracking-widest text-gray-500">
                            Showing {productsFiltered.length} Products
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-32">
                                <p className="font-mono text-xl text-gray-400 uppercase">No products found</p>
                                <button
                                    onClick={() => {
                                        setCategory("All");
                                        setSubcategory(undefined);
                                        setSize(undefined);
                                        setColor(undefined);
                                    }}
                                    className="mt-4 underline text-sm uppercase hover:text-black"
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="mt-20">
                        <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoreGrid;
