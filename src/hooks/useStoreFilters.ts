// hooks/useStoreFilters.ts
import { useCallback, useState } from "react";

export type SortOption = "relevance" | "price-asc" | "price-desc" | "newest";

export interface StoreFilters {
    category: string;     // 'All' | 'men' | 'women' | 'accessories' ...
    subcategory?: string;
    size?: string;
    color?: string;
    priceMin?: number;
    priceMax?: number;
    search?: string;
    tags?: string[];
    sort?: SortOption;
    page?: number;
    perPage?: number;
}

const DEFAULTS: StoreFilters = {
    category: "All",
    subcategory: undefined,
    size: undefined,
    color: undefined,
    priceMin: undefined,
    priceMax: undefined,
    search: undefined,
    tags: undefined,
    sort: "relevance",
    page: 1,
    perPage: 12,
};

/**
 * Hook principal para manejar filtros de la tienda.
 * - inicial podes pasar un objeto parcial con valores
 * - pensado para integrarse con DDL (dropdown) de categorías, talles, colores, etc.
 */
export const useStoreFilters = (initial?: Partial<StoreFilters>) => {
    const [filters, setFilters] = useState<StoreFilters>({ ...DEFAULTS, ...(initial || {}) });

    const setCategory = useCallback((category: string) => {
        setFilters((f) => ({ ...f, category, subcategory: undefined, page: 1 }));
    }, []);

    const setSubcategory = useCallback((subcategory?: string) => {
        setFilters((f) => ({ ...f, subcategory, page: 1 }));
    }, []);

    const setSize = useCallback((size?: string) => setFilters((f) => ({ ...f, size, page: 1 })), []);
    const setColor = useCallback((color?: string) => setFilters((f) => ({ ...f, color, page: 1 })), []);
    const setPriceRange = useCallback((min?: number, max?: number) => setFilters((f) => ({ ...f, priceMin: min, priceMax: max, page: 1 })), []);
    const setSearch = useCallback((search?: string) => setFilters((f) => ({ ...f, search, page: 1 })), []);
    const setSort = useCallback((sort: SortOption) => setFilters((f) => ({ ...f, sort })), []);
    const setPage = useCallback((page: number) => setFilters((f) => ({ ...f, page })), []);
    const setPerPage = useCallback((perPage: number) => setFilters((f) => ({ ...f, perPage })), []);
    const resetFilters = useCallback(() => setFilters({ ...DEFAULTS }), []);

    return {
        filters,
        setCategory,
        setSubcategory,
        setSize,
        setColor,
        setPriceRange,
        setSearch,
        setSort,
        setPage,
        setPerPage,
        resetFilters,
    };
};
