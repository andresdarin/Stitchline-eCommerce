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
    if (layout === 'vertical') {
        // Layout de Clara (imagen arriba, texto abajo)
        return (
            <div className={`flex flex-col items-center border-b md:border-r border-black ${className}`}>
                <div className="flex justify-center p-10 w-full border-b border-black md:border-none">
                    <Image
                        src={image}
                        alt={name}
                        width={350}
                        height={350}
                        className="border border-black object-cover w-full md:w-auto max-w-sm aspect-square"
                    />
                </div>
                <div className="flex flex-col border-t border-black md:border-t-0 p-10 w-full">
                    <h2 className="text-4xl font-thin mb-4 uppercase tracking-wide">{name}</h2>
                    <p className="text-justify text-black text-lg font-light">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    const isImageRight = layout === 'horizontal-right';

    return (
        <div className={`grid grid-cols-1 md:grid-cols-2 items-center border-b border-black ${className}`}>
            {!isImageRight && (
                <div className="border-r-0 md:border-r border-black h-full flex flex-col justify-center p-10 order-2 md:order-1">
                    <h2 className="text-4xl uppercase font-thin mb-4 tracking-wide">{name}</h2>
                    <p className="text-justify text-black text-lg font-light">
                        {description}
                    </p>
                </div>
            )}

            <div className="flex justify-center p-10 w-full h-full border-b md:border-b-0 border-black items-center order-1 md:order-2">
                <Image
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    className="border border-black object-cover w-full md:w-auto max-w-sm aspect-square"
                />
            </div>

            {isImageRight && (
                <div className="border-l-0 md:border-l border-black h-full flex flex-col justify-center p-10 order-2 md:order-3">
                    <h2 className="text-4xl uppercase font-thin mb-4 tracking-wide">{name}</h2>
                    <p className="text-justify text-black text-lg font-light">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PersonCard;
