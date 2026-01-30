import React from 'react';
import { CardData } from '@/types/cardData';
import { FaArrowRightLong } from 'react-icons/fa6';

interface CardProps {
    data: CardData;
    isFirst?: boolean;
}

const CardComingSoon: React.FC<CardProps> = ({ data, isFirst = false }) => {
    return (
        <div className={`text-black border-black border-b ${isFirst ? 'border-t-0' : 'border-t'}`}>
            <div className="p-8 group cursor-pointer hover:bg-gray-50 transition-colors duration-300">
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-thin uppercase tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                            {data.title}
                        </h3>
                        <span className="text-xl -rotate-45 transform group-hover:rotate-0 transition-transform duration-300">
                            <FaArrowRightLong />
                        </span>
                    </div>

                    <p className="text-lg font-light text-gray-600 line-clamp-2 group-hover:text-black transition-colors duration-300">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardComingSoon;