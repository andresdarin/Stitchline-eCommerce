'use client';

import { motion } from 'motion/react';
import { useRef } from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data/teamData';
import PostCarousel from '../postCarousel/PostCarousel';
import Footer from '../footer/Footer';
import CardGrid from '@/components/ui/CardGrid';

export const About = () => {
  const containerRef = useRef(null);

  if (!teamMembers || teamMembers.length < 2) {
    return null;
  }

  return (
    <div ref={containerRef} className="bg-white text-black font-light overflow-hidden relative">

      {/* Hero Section */}
      <section className="h-[70vh] flex flex-col justify-center items-center border-b border-black relative">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12vw] leading-none uppercase font-thin tracking-tighter"
        >
          About
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[12vw] leading-none uppercase font-thin tracking-tighter"
        >
          Us
        </motion.h1>
      </section>

      {/* Clara Section (Left Image, Right Text) */}
      <section className="min-h-screen relative border-b border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Sticky Image Container */}
          <div className="h-[50vh] lg:h-screen lg:sticky lg:top-0 border-b lg:border-b-0 lg:border-r border-black overflow-hidden group relative">
            <div className="relative w-full h-full">
              <Image
                src={teamMembers[0].image}
                alt={teamMembers[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </div>

          {/* Scrollable Text Content */}
          <div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
             <motion.h2
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-8xl lg:text-[8vw] uppercase font-thin leading-none mb-12 tracking-wide"
            >
              {teamMembers[0].name}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed text-justify indent-12 max-w-xl ml-auto"
            >
              {teamMembers[0].description}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agatha Section (Right Image, Left Text) */}
      <section className="min-h-screen relative border-b border-black">
        <div className="grid grid-cols-1 lg:grid-cols-2">

           {/* Text Content */}
           <div className="order-2 lg:order-1 flex flex-col justify-center p-12 lg:p-24 bg-white border-t lg:border-t-0 lg:border-r border-black">
             <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-8xl lg:text-[8vw] uppercase font-thin leading-none mb-12 tracking-wide lg:text-right"
            >
              {teamMembers[1].name}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg lg:text-xl leading-relaxed text-justify indent-12 max-w-xl mr-auto"
            >
              {teamMembers[1].description}
            </motion.div>
          </div>

          {/* Sticky Image Container */}
          <div className="order-1 lg:order-2 h-[50vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden group relative">
            <div className="relative w-full h-full">
              <Image
                src={teamMembers[1].image}
                alt={teamMembers[1].name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
          </div>
        </div>
      </section>

      <div className="py-20 border-b border-black">
        <CardGrid />
      </div>

      <div className="py-0">
        <PostCarousel />
      </div>

      <Footer />
    </div>
  );
};

export default About;
