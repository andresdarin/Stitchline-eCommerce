"use client";
import React, { useEffect } from "react";
import { products } from "@/data/data";
import { Card } from "@/components/ui/Card";
import { Dropdown } from "@/components/ui/DropDown";
import { useStoreFilters } from "@/hooks/useStoreFilters";
import { useProducts } from "@/hooks/useProducts";
import { extractCategories, extractSubcategories, extractSizes, extractColors } from "@/utils/productHelpers";
import { Pagination } from "./Pagination";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import { AppDispatch } from "@/redux/store";

const StoreGrid: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { filters, setCategory, setSubcategory, setSize, setColor, setPerPage, setPage } = useStoreFilters();

    const categories = ["All", ...extractCategories(products)];
    const subcategories = ["All", ...extractSubcategories(products, filters.category === "All" ? undefined : filters.category)];
    const sizes = ["All", ...extractSizes(products)];
    const colors = ["All", ...extractColors(products)];

    const { productsFiltered, total, totalPages } = useProducts(products, filters);

    useEffect(() => setPerPage(8), [setPerPage]);

    return (
        <div className="p-50">
            {/* filtros */}
            <div className="flex justify-end">
                <div className="flex flex-wrap gap-0 mb-6 overflow-visible">
                    <Dropdown options={categories} value={filters.category ?? "Category"} onChange={setCategory} placeholder="Category" className="border border-black rounded-none w-40" />
                    <Dropdown options={subcategories} value={filters.subcategory ?? "Item"} onChange={(v) => setSubcategory(v === "All" ? undefined : v)} placeholder="Subcategory" className="border border-l-0 border-black rounded-none w-40" />
                    <Dropdown options={sizes} value={filters.size ?? "Size"} onChange={(v) => setSize(v === "All" ? undefined : v)} placeholder="Size" className="border border-l-0 border-black rounded-none w-40" />
                    <Dropdown options={colors} value={filters.color ?? "Color"} onChange={(v) => setColor(v === "All" ? undefined : v)} placeholder="Color" className="border border-l-0 border-black rounded-none w-40" />
                </div>
            </div>

            {/* grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {productsFiltered.length ? (
                    productsFiltered.map((product) => (
                        <Card key={product.id} product={product} addToCart={(p) => dispatch(addToCart(p))} />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20 text-gray-500">No products found for the selected filters.</div>
                )}
            </div>

            {/* pagination */}
            <Pagination page={filters.page || 1} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
};

export default StoreGrid;
