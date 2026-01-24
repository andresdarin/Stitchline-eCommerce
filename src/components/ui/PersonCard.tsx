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
    const isHorizontal = layout.includes('horizontal');
    const isRight = layout === 'horizontal-right';

    return (
        <div className={`flex flex-col ${isHorizontal ? 'lg:flex-row' : ''} gap-12 lg:gap-24 items-center ${className}`}>

             {/* If Right Layout, Text comes first on desktop (left), Image second (right).
                 Wait, if layout is 'horizontal-right', usually implies image is on right?
                 Let's assume 'horizontal-right' means Image on Right.
                 So Text is on Left.
             */}

             {/* Text Block for Right Layout */}
             {(isRight && isHorizontal) && (
                <div className="flex-1 order-2 lg:order-1 w-full">
                     <div className="max-w-xl ml-auto text-right">
                        {/* Align text right for variety if image is on right? Or keep left aligned?
                            Let's keep text justified or left, but the block is on the left.
                        */}
                        <h2 className="text-5xl md:text-7xl font-thin uppercase tracking-tighter mb-8">{name}</h2>
                        <p className="text-lg md:text-xl font-light text-gray-600 leading-loose text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            )}

            {/* Image Block */}
            <div className={`relative ${isHorizontal ? 'flex-1 lg:max-w-[45%]' : 'w-full max-w-3xl'} ${isRight ? 'order-1 lg:order-2' : 'order-1'}`}>
                 <div className="overflow-hidden aspect-[3/4]">
                    <Image
                        src={image}
                        alt={name}
                        width={800}
                        height={1000}
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                 </div>
            </div>

            {/* Text Block for Left Layout or Vertical */}
            {(!isRight || !isHorizontal) && (
                 <div className={`flex-1 w-full ${!isHorizontal ? 'text-center mt-8' : 'lg:pl-10 order-2'}`}>
                    <div className={`max-w-xl ${!isHorizontal ? 'mx-auto' : ''}`}>
                        <h2 className="text-5xl md:text-7xl font-thin uppercase tracking-tighter mb-8">{name}</h2>
                        <p className="text-lg md:text-xl font-light text-gray-600 leading-loose text-justify">
                            {description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PersonCard;
