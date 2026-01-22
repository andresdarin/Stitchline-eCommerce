"use client";
import React from "react";
import Image from "next/image";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white text-black min-h-screen font-sans">
             {/* Hero / Title Section */}
             <div className="w-full px-6 py-24 md:px-20 md:py-40 border-b border-black">
                <h1 className="text-6xl md:text-9xl font-thin uppercase tracking-tighter leading-none">
                    About <br/> Us
                </h1>
                <div className="mt-10 md:mt-16 max-w-2xl md:ml-auto">
                    <p className="text-xl md:text-2xl font-light leading-relaxed">
                        We are a collective of creators, designers, and engineers building the future of industrial fashion.
                        Unapologetic, raw, and authentic.
                    </p>
                </div>
             </div>

             {/* Team Members */}
             <div className="flex flex-col">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.name}
                        className={`
                            flex flex-col md:flex-row
                            ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}
                            border-b border-black
                        `}
                    >
                        {/* Image Section */}
                        <div className={`
                            w-full md:w-1/2 relative h-[500px] md:h-[80vh]
                            ${index % 2 !== 0 ? 'md:border-l' : 'md:border-r'} border-black
                        `}>
                            <Image
                                src={member.image}
                                alt={member.name}
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 p-10 md:p-24 flex flex-col justify-center bg-white z-10">
                            <h2 className="text-5xl md:text-7xl font-thin uppercase mb-10 tracking-wide">
                                {member.name}
                            </h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-justify">
                                {member.description}
                            </p>
                        </div>
                    </div>
                ))}
             </div>

             <div className="border-b border-black">
                 <CardGrid />
             </div>

             <PostCarousel />
             <Footer />
        </div>
    );
};

export default About;
