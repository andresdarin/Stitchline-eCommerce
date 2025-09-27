import { products } from "@/data/data";
import type { Product } from "@/types/product";

const getProducts = (): Product[] => {
    return products;

};

const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
};

export { getProducts, getProductById };
