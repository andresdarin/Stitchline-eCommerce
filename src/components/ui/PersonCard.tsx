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
                <div className="flex justify-center p-10">
                    <Image
                        src={image}
                        alt={name}
                        width={350}
                        height={350}
                        className="border border-black object-cover"
                    />
                </div>
                <div className="flex flex-col border-t border-black p-10 w-full">
                    <h2 className="text-4xl font-thin mb-4 uppercase tracking-wide">{name}</h2>
                    <p className="text-justify text-black text-lg font-light">
                        {description}
                    </p>
                </div>
            </div>
        );
    }

    // Layout horizontal (como Agatha)
    const isImageRight = layout === 'horizontal-right';

    return (
        <div className={`grid md:grid-cols-2 items-center border-b-1 border-black ${className}`}>
            {!isImageRight && (
                <div className="border-r border-black h-full items-center p-10">
                    <h2 className="text-4xl uppercase font-thin mb-4 tracking-wide">{name}</h2>
                    <p className="text-justify text-black text-lg font-light">
                        {description}
                    </p>
                </div>
            )}
            <div className="flex justify-center p-10">
                <Image
                    src={image}
                    alt={name}
                    width={350}
                    height={350}
                    className="border border-black object-cover mb-6"
                />
            </div>
            {isImageRight && (
                <div className="border-r border-black h-full items-center p-10">
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