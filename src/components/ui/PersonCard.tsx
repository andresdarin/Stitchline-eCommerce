// src/components/ui/PersonCard.tsx
import Image from "next/image";

interface PersonCardProps {
    name: string;
    image: string;
    description: string;
    layout?: 'vertical' | 'horizontal-left' | 'horizontal-right';
    className?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
    name,
    image,
    description,
    layout = 'vertical',
    className = ""
}) => {
    // Layout Vertical: Clean, image top, text bottom
    if (layout === 'vertical') {
        return (
            <div className={`flex flex-col group ${className}`}>
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gray-100 mb-6">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    />
                </div>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-3">{name}</h2>
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    const isImageRight = layout === 'horizontal-right';

    return (
        <div className={`grid md:grid-cols-2 gap-8 md:gap-24 items-center group ${className}`}>
             {isImageRight ? (
                <>
                    <div className="order-2 md:order-1 flex flex-col items-start md:items-end md:text-right">
                         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 transition-colors duration-300 group-hover:text-gray-800">{name}</h2>
                         <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                            {description}
                        </p>
                    </div>
                    <div className="order-1 md:order-2 relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                         <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                    </div>
                </>
             ) : (
                <>
                    <div className="relative w-full aspect-[4/5] overflow-hidden bg-gray-100">
                         <Image
                            src={image}
                            alt={name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                        />
                    </div>
                    <div className="flex flex-col items-start">
                         <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 transition-colors duration-300 group-hover:text-gray-800">{name}</h2>
                         <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                            {description}
                        </p>
                    </div>
                </>
             )}
        </div>
    );
};

export default PersonCard;
