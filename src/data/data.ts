import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: '1',
        name: 'Camisa Clásica de Algodón',
        price: 89.99,
        originalPrice: 119.99,
        description: 'Camisa clásica de algodón 100% orgánico. Corte regular, ideal para ocasiones formales e informales. Disponible en múltiples colores.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'men',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Blanco', 'Negro', 'Azul Marino', 'Gris'],
        inStock: true,
        featured: true
    },
    {
        id: '2',
        name: 'Vestido Floral Elegante',
        price: 149.99,
        description: 'Vestido midi con estampado floral. Tejido fluido y cómodo, perfecto para ocasiones especiales. Diseño femenino y moderno.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Floral Rosa', 'Floral Azul', 'Floral Negro'],
        inStock: true,
        featured: true
    },
    {
        id: '3',
        name: 'Jean Slim Fit Premium',
        price: 129.99,
        description: 'Jeans de corte slim con mezclilla premium. Cómodos y duraderos, perfectos para el uso diario. Lavado stone wash.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'men',
        sizes: ['28', '30', '32', '34', '36', '38', '40'],
        colors: ['Azul Oscuro', 'Azul Claro', 'Negro'],
        inStock: true
    },
    {
        id: '4',
        name: 'Blazer Ejecutivo',
        price: 199.99,
        description: 'Blazer elegante para ocasiones formales. Corte entallado, tejido de alta calidad. Ideal para oficina o eventos especiales.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Negro', 'Gris Charcoal', 'Azul Marino'],
        inStock: true
    },
    {
        id: '5',
        name: 'Reloj Minimalista',
        price: 79.99,
        description: 'Reloj de pulsera con diseño minimalista. Caja de acero inoxidable y correa de cuero genuino. Resistente al agua.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'accessories',
        sizes: ['Único'],
        colors: ['Negro', 'Marrón', 'Plateado'],
        inStock: true,
        featured: true
    },
    {
        id: '6',
        name: 'Sudadera Casual',
        price: 69.99,
        description: 'Sudadera cómoda de algodón. Perfecta para días relajados. Diseño unisex con capucha y bolsillo frontal.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'men',
        sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Gris', 'Negro', 'Azul Marino', 'Blanco'],
        inStock: true
    },
    {
        id: '7',
        name: 'Bolso de Cuero Artesanal',
        price: 189.99,
        description: 'Bolso de cuero genuino hecho a mano. Diseño atemporal con múltiples compartimentos. Ideal para el día a día.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'accessories',
        sizes: ['Único'],
        colors: ['Marrón', 'Negro', 'Camel'],
        inStock: true
    },
    {
        id: '8',
        name: 'Falda Midi Plisada',
        price: 94.99,
        description: 'Falda midi con plisado elegante. Tela fluida que se mueve con gracia. Perfecta para ocasiones formales e informales.',
        images: [
            '/img/bg-hero.webp',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['XS', 'S', 'M', 'L', 'XL'],
        colors: ['Negro', 'Beige', 'Azul Marino'],
        inStock: true,
        featured: true
    }
];