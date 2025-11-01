import React from 'react';
import { CardData } from '@/types/cardData';
import Image from 'next/image';
interface CardProps {
    data: CardData;
}

const CardComingSoon: React.FC<CardProps> = ({ data }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3 className="card-title">{data.title}</h3>
                <p className="card-description">{data.description}</p>
            </div>
            <div className="card-icon">
                {data.image && <Image src={data.image} alt={data.title} fill />}
            </div>
        </div>
    );
};

export default CardComingSoon;