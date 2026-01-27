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
import { StoreSidebar } from "./StoreSidebar";
import { Filter } from "lucide-react";
import { cn } from "@/lib/utils";

interface StoreGridProps {
    fixedCategory?: string;
}

const StoreGrid: React.FC<StoreGridProps> = ({ fixedCategory }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setTags, setPerPage, setPage } = useStoreFilters();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const categories = ["All", ...extractCategories(products)];
    const subcategories = extractSubcategories(products, filters.category === "All" ? undefined : filters.category);
    const sizes = extractSizes(products);
    const tags = extractTags(products);

    const activeCategory = fixedCategory || filters.category;

    const { productsFiltered, totalPages } = useProducts(products, {
        ...filters,
        category: activeCategory,
    });

    useEffect(() => {
        setPerPage(8);
        if (fixedCategory) setCategory(fixedCategory);
    }, [setPerPage, setCategory, fixedCategory]);

    // Close sidebar when resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsSidebarOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="min-h-screen bg-white text-black p-4 md:p-10">
            {/* Header / Mobile Filter Trigger */}
            <div className="flex justify-between items-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                    {fixedCategory || "Store"}
                </h1>

                <button
                    onClick={() => setIsSidebarOpen(true)}
                    className="md:hidden flex items-center gap-2 border border-black px-4 py-2 uppercase text-sm font-bold tracking-widest hover:bg-black hover:text-white transition-colors"
                >
                    <Filter className="h-4 w-4" />
                    Filters
                </button>
            </div>

            <div className="flex flex-col md:flex-row gap-12 relative">
                {/* Desktop Sidebar */}
                <div className="hidden md:block w-1/4 min-w-[250px] shrink-0">
                    <StoreSidebar
                        filters={filters}
                        setCategory={setCategory}
                        setSubcategory={setSubcategory}
                        setSize={setSize}
                        setTags={setTags}
                        categories={categories}
                        subcategories={subcategories}
                        sizes={sizes}
                        tags={tags}
                        className="sticky top-10"
                    />
                </div>

                {/* Mobile Sidebar Overlay */}
                <div className={cn(
                    "fixed inset-0 z-50 bg-black/50 transition-opacity md:hidden",
                    isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                )} onClick={() => setIsSidebarOpen(false)}>
                    <div
                        className={cn(
                            "absolute top-0 right-0 h-full w-[80%] max-w-[300px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out overflow-y-auto",
                            isSidebarOpen ? "translate-x-0" : "translate-x-full"
                        )}
                        onClick={(e) => e.stopPropagation()}
                    >
                         <StoreSidebar
                            filters={filters}
                            setCategory={setCategory}
                            setSubcategory={setSubcategory}
                            setSize={setSize}
                            setTags={setTags}
                            categories={categories}
                            subcategories={subcategories}
                            sizes={sizes}
                            tags={tags}
                            onClose={() => setIsSidebarOpen(false)}
                        />
                    </div>
                </div>

                {/* Grid */}
                <div className="flex-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-y-12 gap-x-6">
                        {productsFiltered.length ? (
                            productsFiltered.map((product) => (
                                <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl font-thin uppercase tracking-widest text-gray-500">No products found</p>
                                <button
                                    onClick={() => {
                                        setCategory("All");
                                        setSubcategory(undefined);
                                        setSize(undefined);
                                        setTags(undefined);
                                    }}
                                    className="mt-4 border-b border-black text-sm uppercase font-bold hover:text-gray-600"
                                >
                                    Reset Filters
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
