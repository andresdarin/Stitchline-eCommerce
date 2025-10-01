import { useEffect, useState } from 'react'
import { products } from '../data/data';
import { Product } from '@/types/product';
import Hero from '@/components/layout/hero/Hero';
import BannerBelowHero from '@/components/layout/hero/BannerBelowHero';
import StoreGrid from '@/components/layout/store/StoreGrid';
import Duality from '@/components/layout/duality/Duality';
import { BrandCarousel } from '@/components/layout/carousel/BrandCarousel';
import { News } from '@/components/layout/news/News';


export const HomePage = () => {

    const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
    const [newArrivals, setNewArrivals] = useState<Product[]>([]);

    useEffect(() => {
        const featured = products.filter(product => product.featured);
        const newItems = products.filter((_, index) => index < 5); // Simulating new arrivals by taking the first 5 products
        setFeaturedProducts(featured);
        setNewArrivals(newItems);
    }, []);


    return (
        <>
            <Hero />
            <BannerBelowHero />
            <StoreGrid />
            <Duality />
            <BrandCarousel />
            <News />
        </>
    )
}

export default HomePage
