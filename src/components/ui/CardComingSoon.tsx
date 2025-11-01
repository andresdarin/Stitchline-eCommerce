import React from 'react';
import { CardData } from '@/types/cardData';
import { FaArrowRightLong } from 'react-icons/fa6';

interface CardProps {
    data: CardData;
    isFirst?: boolean;
}

const CardComingSoon: React.FC<CardProps> = ({ data, isFirst = false }) => {
    return (
        <div className={` text-black border-1 border-b-0 border-l-0 border-black ${isFirst ? 'border-t-0' : 'border-t-1 border-black'}`}>
            {/* Sección superior con título y descripción */}
            <div className="p-10 flex flex-col justify-between border-black">
                <h3 className="text-2xl font-thin mb-4 uppercase tracking-wide">
                    {data.title}
                </h3>

                {/* Sección inferior con icono */}
                <div className="h-12 flex items-center justify-end">
                    <p className="text-justify text-black text-lg font-light pr-10">
                        {data.description}
                    </p>
                    <span className="text-lg rotate-315">
                        <FaArrowRightLong />
                    </span>
                </div>
            </div>


        </div>
    );
};

export default CardComingSoon;