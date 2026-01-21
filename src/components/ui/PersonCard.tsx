import React from 'react';
import Image from "next/image";

interface PersonCardProps {
    name: string;
    image: string;
    description: string;
    imagePosition?: 'left' | 'right';
    className?: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({
    name,
    image,
    description,
    imagePosition = 'left',
    className = ""
}) => {
    return (
        <div className={`flex flex-col md:flex-row gap-8 md:gap-20 items-center ${imagePosition === 'right' ? 'md:flex-row-reverse' : ''} ${className}`}>
             {/* Image Container */}
             <div className="w-full md:w-5/12 relative aspect-[3/4]">
                <div className="absolute inset-0 border border-black transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover border border-black grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
             </div>

             {/* Text Container */}
             <div className="w-full md:w-7/12 flex flex-col">
                <h2 className="text-5xl md:text-8xl font-thin uppercase tracking-tighter mb-8 self-start relative">
                    {name}
                    <span className="absolute -bottom-2 left-0 w-1/3 h-[1px] bg-black"></span>
                </h2>
                <p className="text-lg md:text-xl font-light leading-loose text-gray-800 text-justify">
                    {description}
                </p>
             </div>
        </div>
    );
};

export default PersonCard;
