// product.ts
export type Product = {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    description: string;
    images: string[];
    category: 'men' | 'women' | 'accessories';
    sizes: string[];
    colors: string[];
    inStock: boolean;
    featured?: boolean;
};

