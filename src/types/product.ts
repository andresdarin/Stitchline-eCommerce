// product.ts
export type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    images: string[];
    category: 'men' | 'women' | 'accessories';
    subcategory: string;
    sizes: string[];
    colors: string[];
    inStock: boolean;
    featured?: boolean;
    tags?: string[];
};

export interface ProductItem extends Product {
    quantity: number;
}

