import Hero from '@/components/layout/hero/Hero';
import BannerBelowHero from '@/components/layout/hero/BannerBelowHero';
import StoreGrid from '@/components/layout/store/StoreGrid';
import Duality from '@/components/layout/duality/Duality';
import { BrandCarousel } from '@/components/layout/carousel/BrandCarousel';
import { NewsCarousel } from '@/components/layout/news/News';
import { Newsletter } from '../layout/newsletter/Newsletter';
import { Vlog } from '@/components/layout/vlog/Vlog';
import { PostCarousel } from '@/components/layout/postCarousel/PostCarousel';
import { Footer } from '@/components/layout/footer/Footer';


export const HomePage = () => {


    return (
        <>
            <Hero />
            <BannerBelowHero />
            <StoreGrid />
            <Duality />
            <BrandCarousel />
            <NewsCarousel />
            <Newsletter />
            <Vlog />
            <PostCarousel />
            <Footer />
        </>
    )
}

export default HomePage
