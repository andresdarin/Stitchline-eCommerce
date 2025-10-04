// hooks/useProducts.ts
import { useMemo } from "react";
import { Product } from "@/types/product";
import { StoreFilters } from "@/hooks/useStoreFilters";

export const useProducts = (products: Product[], filters: StoreFilters) => {
    const filtered = useMemo(() => {
        let list = products.slice();

        // search
        if (filters.search && filters.search.trim().length) {
            const q = filters.search.trim().toLowerCase();
            list = list.filter((p) => `${p.name} ${p.description}`.toLowerCase().includes(q));
        }

        // category
        if (filters.category && filters.category !== "All") {
            list = list.filter((p) => p.category === filters.category);
        }

        // subcategory
        if (filters.subcategory && filters.subcategory !== "All") {
            list = list.filter((p) => p.subcategory === filters.subcategory);
        }

        // size
        if (filters.size && filters.size !== "All") {
            list = list.filter((p) => p.sizes?.includes(filters.size!));
        }

        // color
        if (filters.color && filters.color !== "All") {
            list = list.filter((p) => p.colors?.includes(filters.color!));
        }

        // tags
        if (filters.tags && filters.tags.length) {
            list = list.filter((p) => (p.tags || []).some((t) => filters.tags!.includes(t)));
        }

        // price range
        if (typeof filters.priceMin === "number") {
            list = list.filter((p) => p.price >= (filters.priceMin ?? 0));
        }
        if (typeof filters.priceMax === "number") {
            list = list.filter((p) => p.price <= (filters.priceMax ?? Infinity));
        }

        // sort
        switch (filters.sort) {
            case "price-asc":
                list.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                list.sort((a, b) => b.price - a.price);
                break;
            case "newest":
                // if you have createdAt: list.sort(...)
                break;
            case "relevance":
            default:
                break;
        }

        return list;
    }, [products, filters]);

    const total = filtered.length;
    const perPage = filters.perPage ?? 12;
    const page = Math.max(1, filters.page ?? 1);
    const start = (page - 1) * perPage;
    const paginated = filtered.slice(start, start + perPage);

    return {
        productsFiltered: paginated,
        total,
        totalPages: Math.ceil(total / perPage),
    };
};
