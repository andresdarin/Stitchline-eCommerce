import React from 'react';
import CardComingSoon from './CardComingSoon';
import { cardsData } from '@/data/cardData';
import Image from 'next/image';

const CardGrid: React.FC = () => {
    return (
        <div className=" bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 h-full">
                {/* Sidebar izquierdo - Cards en columna */}
                <div className="lg:col-span-3">
                    {cardsData.map((card, index) => (
                        <CardComingSoon
                            key={card.id}
                            data={card}
                            isFirst={index === 0}
                        />
                    ))}

                    {/* Card "Soon..." */}
                    <div className="bg-white text-black border-l border-r border-b border-black p-8 hover:bg-neutral-50 transition-colors">
                        <div className="text-center">
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-2">Stay tuned!</h3>
                            <p className="text-sm font-light text-gray-500 italic">More projects coming soon...</p>
                        </div>
                    </div>
                </div>

                {/* Área derecha - Imagen */}
                <div className="lg:col-span-9 flex items-center justify-center p-8 border-b border-black">
                    <div className=" shadow-2xl overflow-hidden max-w-4xl hover:shadow-3xl transition-shadow duration-300">
                        <Image
                            src="/img/coming_soon.png"
                            alt="Feature Image"
                            width={2000}
                            height={1200}
                            className="object-cover w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;