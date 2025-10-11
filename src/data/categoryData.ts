// src/components/layout/duality/dualityData.ts
export interface CategoryData {
    title: string;
    image: string;
    ctaText: string;
    ctaHref: string;
    className?: string;
}

export const categories: CategoryData[] = [
    {
        title: "Man",
        image: "/img/man-shop.webp",
        ctaText: "Shop Now",
        ctaHref: "Man",
        className: "border-[var(--color1)]" // Borde específico para Man
    },
    {
        title: "Woman",
        image: "/img/woman-shop.webp",
        ctaText: "Shop Now",
        ctaHref: "Woman",
        className: "border-black" // Borde específico para Woman
    }
];