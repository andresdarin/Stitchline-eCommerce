import React from 'react';
import CardComingSoon from './CardComingSoon';
import { cardsData } from '@/data/cardData';
import Image from 'next/image';

const CardGrid: React.FC = () => {
    return (
        <div className="bg-white w-full border-t border-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
                {/* Sidebar izquierdo - Cards en columna */}
                <div className="lg:col-span-4 border-r border-black flex flex-col">
                    <div className="flex-grow">
                        {cardsData.map((card, index) => (
                            <CardComingSoon
                                key={card.id}
                                data={card}
                                isFirst={index === 0}
                            />
                        ))}
                    </div>

                    {/* Card "Soon..." */}
                    <div className="bg-black text-white p-12 border-t border-black mt-auto">
                        <div className="text-center">
                            <h3 className="text-3xl font-thin uppercase tracking-widest mb-2">Stay Tuned</h3>
                            <p className="font-light italic text-gray-400">more projects appearing soon...</p>
                        </div>
                    </div>
                </div>

                {/* Área derecha - Imagen */}
                <div className="lg:col-span-8 relative min-h-[50vh] lg:min-h-full bg-gray-100 flex items-center justify-center p-12 overflow-hidden">
                     {/* Decorative pattern or texture could go here */}
                    <div className="relative w-full max-w-2xl aspect-[4/3] shadow-2xl hover:scale-105 transition-transform duration-700">
                        <Image
                            src="/img/coming_soon.png"
                            alt="Feature Image"
                            fill
                            sizes="(max-width: 1024px) 100vw, 60vw"
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardGrid;