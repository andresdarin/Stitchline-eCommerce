import Image from 'next/image';
import React from 'react';
import { Header } from '../header/Header';
import CTA from '@/components/ui/CTA';

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
                <div className="relative z-10 flex flex-col items-start justify-end h-full pb-[12rem] pl-[4rem] text-left text-white">
                    <h1 className="text-6xl">Stitchline</h1>
                    <p className="mt-4 w-[30%] text-lg font-thin">
                        Discover timeless fashion crafted with care, designed to fit your lifestyle and express your individuality.
                    </p>
                    <CTA href="#" variant="primary" className="mt-6">Shop Now</CTA>
                </div>

            </section>
        </>

    );
};

export default Hero;
