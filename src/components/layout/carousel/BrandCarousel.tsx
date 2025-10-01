// components/BrandCarousel.tsx
import { Quote, X } from "lucide-react";
import { RandomQuote } from "./RandomQuote";
import { Logos } from "./Logos";
import { logos } from "@/data/logos";
import { BannerPromo } from "./BannerPromo";



export const BrandCarousel = () => {
    return (
        <div className="my-20 text-center flex flex-col justify-center items-center">
            <Quote size={40} className="inline-block" />
            <RandomQuote className="text-4xl inline-block m-12" />
            <X size={15} className="inline-block" />
            <Logos logos={logos} />
            <BannerPromo />
        </div>
    );
};
