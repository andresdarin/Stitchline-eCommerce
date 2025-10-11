// src/components/ui/CategoryCard.tsx
import Image from "next/image";
import CTA from "@/components/ui/CTA";

interface CategoryCardProps {
    title: string;
    image: string;
    ctaText: string;
    ctaHref: string;
    className?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
    title,
    image,
    ctaText,
    ctaHref,
    className = ""
}) => {
    return (
        <div className={`relative flex-1 flex flex-col items-center justify-center border border-r-0 border-l-0 border-[var(--color1)] overflow-hidden min-h-[20rem] ${className}`}>
            <Image
                src={image}
                alt={`${title} Image`}
                fill
                className="object-cover object-center -z-10"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-white text-4xl md:text-6xl text-center border border-transparent font-thin uppercase drop-shadow-md hover:text-[var(--color1)] hover:border hover:border-[var(--color1)] transition-colors duration-200 tracking-widest p-4">
                    {title}
                </h1>
                <CTA href={ctaHref} variant="primary" className="mt-6">
                    {ctaText}
                </CTA>
            </div>
        </div>
    );
};

export default CategoryCard;