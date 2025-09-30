// components/BrandCarousel.tsx
import { Quote, X } from "lucide-react";
import { RandomQuote } from "./RandomQuote";
import { Logos } from "./Logos";
import { logos } from "@/data/logos";
import { BannerPromo } from "./BannerPromo";



export const BrandCarousel = () => {
    return (
        <div className="my-20 text-center flex flex-col justify-center items-center">
            <Quote className="inline-block" />
            <RandomQuote className="text-4xl inline-block m-8" />
            <X className="text-4xl inline-block m-4" />
            <Logos logos={logos} />
            <BannerPromo />
        </div>
    );
};
