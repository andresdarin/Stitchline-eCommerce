import { About } from "@/components/layout/about/About";
import { Footer } from "@/components/layout/footer/Footer";
import { PostCarousel } from "@/components/layout/postCarousel/PostCarousel";

export const AboutPage = () => {
    return (
        <>
            <About />
            <PostCarousel />
            <Footer />
        </>

    );
};

export default AboutPage;