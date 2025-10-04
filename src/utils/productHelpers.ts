// utils/productHelpers.ts
import { Product } from "@/types/product";

export const extractCategories = (products: Product[]) => {
    const set = new Set<string>();
    products.forEach((p) => set.add(p.category));
    return Array.from(set).sort();
};

export const extractSubcategories = (products: Product[], category?: string) => {
    const set = new Set<string>();
    products
        .filter((p) => (category ? p.category === category : true))
        .forEach((p) => p.subcategory && set.add(p.subcategory));
    return Array.from(set).sort();
};

export const extractSizes = (products: Product[]) => {
    const set = new Set<string>();
    products.forEach((p) => (p.sizes || []).forEach((s) => set.add(s)));
    return Array.from(set).sort((a, b) => (a > b ? 1 : -1));
};

export const extractColors = (products: Product[]) => {
    const set = new Set<string>();
    products.forEach((p) => (p.colors || []).forEach((c) => set.add(c)));
    return Array.from(set).sort();
};
