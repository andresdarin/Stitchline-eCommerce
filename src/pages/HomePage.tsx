import { useEffect, useState } from 'react'
import { products } from '../data/data';
import { Product } from '@/types/product';
import { Header } from '@/components/layout/header/Header';
import Hero from '@/components/layout/hero/Hero';

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
        </>
    )
}

export default HomePage
