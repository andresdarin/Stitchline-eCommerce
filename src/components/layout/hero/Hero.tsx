import Image from 'next/image';
import React from 'react';
import { Header } from '../header/Header';
import CTA from '@/components/ui/CTA';

const Hero = () => {
    return (
        <>
            <section className="relative w-full h-screen md:h-[750px] lg:h-[900px] border-b border-black">
                <Header />
                <Image
                    src="/img/bg-hero-light.webp"
                    alt="Hero Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="absolute inset-0"
                />
                <div className="relative z-10 flex flex-col items-start justify-end h-screen pb-16 px-6 sm:pb-20 sm:px-8 md:pb-28 md:px-12 lg:pb-48 lg:pl-16 text-left text-white">
                    <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-thin">
                        Stitchline
                    </h1>
                    <p className="mt-3 w-full sm:w-[70%] md:w-[60%] lg:w-[30%] font-thin text-sm sm:text-base md:text-lg leading-relaxed">
                        Discover timeless fashion crafted with care, designed to fit your lifestyle and express your individuality.
                    </p>
                    <CTA href="Store" variant="primary" className="mt-6 sm:mt-7 md:mt-8">
                        Shop Now
                    </CTA>
                </div>
            </section>
        </>
    );
};

export default Hero;