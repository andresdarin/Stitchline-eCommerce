import React from 'react';
import { CardData } from '@/types/cardData';
import { FaArrowRightLong } from 'react-icons/fa6';

interface CardProps {
    data: CardData;
    isFirst?: boolean;
}

const CardComingSoon: React.FC<CardProps> = ({ data, isFirst = false }) => {
    return (
        <div className={`bg-white text-black border-l border-r border-b border-black p-8 group hover:bg-neutral-50 transition-colors ${isFirst ? 'border-t' : ''}`}>
            <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold uppercase tracking-widest group-hover:opacity-70 transition-opacity">
                    {data.title}
                </h3>

                <div className="flex justify-between items-end gap-6">
                    <p className="text-sm font-light text-gray-800 leading-relaxed text-justify">
                        {data.description}
                    </p>
                    <span className="text-lg transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardComingSoon;
