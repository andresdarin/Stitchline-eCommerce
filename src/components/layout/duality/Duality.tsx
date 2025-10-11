// src/components/layout/duality/Duality.tsx
import { CategoryCard } from "@/components/ui/CategoryCard";
import { categories } from "@/data/categoryData";

export const Duality = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch h-[30rem] mb-8 cursor-default w-full overflow-hidden shadow-lg">
            {categories.map((category, index) => (
                <CategoryCard
                    key={category.title}
                    title={category.title}
                    image={category.image}
                    ctaText={category.ctaText}
                    ctaHref={category.ctaHref}
                    className={category.className}
                />
            ))}
        </div>
    );
};

export default Duality;