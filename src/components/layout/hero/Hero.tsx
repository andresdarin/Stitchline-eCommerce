import Image from 'next/image';
import React from 'react';
import { Header } from '../header/Header';

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-[900px] border-b border-black">
                <Header />
                <Image
                    src="/img/bg-hero-light.webp"
                    alt="Hero Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute inset-0"
                />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h1 className="text-6xl">Mixed Textiles</h1>
                    <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non molestias possimus id quisquam?</p>
                </div>
            </section>
        </>

    );
};

export default Hero;
