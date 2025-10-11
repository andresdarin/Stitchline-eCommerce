import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { NewsCard } from "@/components/ui/CardNews";
import { news } from "@/data/news";

export const NewsCarousel = () => {
    return (
        <div className="w-full py-10">
            <div className="text-center p-10">
                <h1 className="text-4xl uppercase">News & Updates</h1>
                <p className="mt-6 text-center text-lg">
                    Stay inspired with our newest collections, fashion stories, and exclusive offers.
                </p>
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                autoplay={{
                    delay: 3000, // cada 3 segundos
                    disableOnInteraction: false, // sigue aunque el usuario interactúe
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 250,
                    modifier: 1.5,
                    slideShadows: false,
                }}
                modules={[EffectCoverflow, Autoplay]}
                className="w-full"
            >
                {news.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="transition-all duration-300">
                            <NewsCard newsItem={item} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default NewsCarousel;
