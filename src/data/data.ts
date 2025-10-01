import { Product } from "@/types/product";

export const products: Product[] = [
    {
        id: '1',
        name: 'JUICE shirt',
        price: 29.99,
        originalPrice: 39.99,
        description: 'Camiseta JUICE',
        images: [
            '/img/products/juice-shirt.jpg',
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
        name: 'Warm Vibes Hoodie',
        price: 79.99,
        description: 'Sudadera con capucha de corte cómodo y moderno. Tejido suave y cálido, ideal para el día a día o para outfits casuales con estilo. Disponible en varios colores vibrantes.',
        images: [
            '/img/products/warm-vibes-hoodie.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Negro', 'Gris Claro', 'Azul Marino', 'Rojo'],
        inStock: true,
        featured: true

    },
    {
        id: '3',
        name: 'Jeans Slim Fit Premium',
        price: 129.99,
        description: 'Jeans de corte slim con mezclilla premium. Su ajuste cómodo y duradero los hace perfectos para el día a día. Acabado stone wash para un look moderno y casual.',
        images: [
            '/img/products/jeans-model.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'men',
        sizes: ['28', '30', '32', '34', '36', '38', '40'],
        colors: ['Azul Oscuro', 'Azul Claro', 'Negro'],
        inStock: true,
        featured: true
    },
    {
        id: '4',
        name: 'P-Play Hoodie',
        price: 89.99,
        description: 'Sudadera con capucha de estilo urbano y cómodo. Tejido suave y cálido, perfecta para looks casuales o para mantener el estilo en cualquier ocasión. Diseño moderno y versátil.',
        images: [
            '/img/products/p-play-hoodie.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Negro', 'Gris', 'Azul Marino', 'Rojo'],
        inStock: true,
        featured: true
    },
    {
        id: '5',
        name: 'Reloj Minimalista',
        price: 79.99,
        description: 'Reloj de pulsera con diseño minimalista. Caja de acero inoxidable y correa de cuero genuino. Resistente al agua.',
        images: [
            '/img/products/watch.jpg',
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
        name: 'Boneless Tee',
        price: 49.99,
        description: 'Camiseta de algodón suave con corte clásico y estilo casual. Perfecta para combinar en cualquier outfit y mantener comodidad todo el día. Diseño moderno y versátil.',
        images: [
            '/img/products/boneless.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Blanco', 'Negro', 'Gris', 'Azul'],
        inStock: true,
        featured: true
    },
    {
        id: '7',
        name: 'Sport Shorts',
        price: 39.99,
        description: 'Shorts deportivos ligeros y cómodos, diseñados para el máximo rendimiento y libertad de movimiento. Tejido transpirable ideal para entrenamientos o actividades al aire libre.',
        images: [
            '/img/products/sport-short.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'women',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Negro', 'Gris', 'Azul Marino', 'Rojo'],
        inStock: true,
        featured: true
    },
    {
        id: '8',
        name: 'Urban Backpack',
        price: 89.99,
        description: 'Mochila urbana resistente y versátil. Compartimentos amplios para organizar tus cosas y diseño cómodo para el día a día. Ideal para estudio, trabajo o viajes cortos.',
        images: [
            '/img/products/urban-backpack.jpg',
            '/img/bg-hero.webp'
        ],
        category: 'accessories',
        sizes: ['Único'],
        colors: ['Negro', 'Gris', 'Azul Marino'],
        inStock: true,
        featured: true
    }

];