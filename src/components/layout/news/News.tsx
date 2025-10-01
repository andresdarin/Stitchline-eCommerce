import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

import { NewsCard } from "../../ui/CardNews";
import { news } from "../../../data/news";

export const NewsCarousel = () => {
    return (
        <div className="w-full py-10">
            <div className="text-center p-10">
                <h1 className="text-4xl uppercase">News & Updates</h1>
                <p className="mt-6 text-center text-lg">Stay inspired with our newest collections, fashion stories, and exclusive offers.</p>
            </div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                centeredSlides={false}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 0,       // no rotación
                    stretch: 0,      // separación lateral
                    depth: 150,      // profundidad (z-index)
                    modifier: 1.5,   // intensidad del efecto
                    slideShadows: false,
                }}
                modules={[EffectCoverflow]}
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
