'use client';
import { motion } from "motion/react";
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen border-x border-black">
            {/* HERO SECTION */}
            <section className="relative h-[80vh] flex flex-col justify-between border-b border-black p-6 lg:p-12 overflow-hidden">
                <div className="mt-auto">
                    <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter">
                        We Are <br/> Stitchline
                    </h1>
                </div>

                <div className="absolute top-12 right-12 w-32 h-32 border border-black rounded-full animate-spin-slow hidden md:flex items-center justify-center">
                   <span className="text-xs font-mono">EST. 2024</span>
                </div>
            </section>

            {/* MANIFESTO / VALUES */}
            <section className="py-32 px-6 lg:px-12 border-b border-black">
                <div className="max-w-4xl mx-auto">
                    <p className="text-3xl md:text-5xl font-light leading-tight indent-24">
                        We believe in the raw beauty of construction. Every stitch tells a story of
                        <span className="font-bold italic"> precision</span>,
                        <span className="font-bold italic"> innovation</span>, and
                        <span className="font-bold italic"> timeless design</span>.
                        We don&apos;t just make clothes; we engineer style for the modern urban landscape.
                    </p>
                </div>
            </section>

            {/* TEAM SECTION */}
            <section className="border-b border-black">
                {/* Header for Team */}
                <div className="p-6 lg:p-12 border-b border-black flex justify-between items-end">
                    <h2 className="text-6xl md:text-8xl font-thin uppercase tracking-tight">The Team</h2>
                    <span className="text-sm font-mono hidden md:block">(02 MEMBERS)</span>
                </div>

                {/* Team Grid - Adding 'air' by stacking them with large padding or full width */}
                <div className="flex flex-col">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.6 }}
                            className={`${index !== teamMembers.length - 1 ? 'border-b border-black' : ''}`}
                        >
                            {/* Override layout prop to force full-width layouts for 'air' */}
                            <PersonCard
                                name={member.name}
                                image={member.image}
                                description={member.description}
                                layout={index % 2 === 0 ? 'horizontal-left' : 'horizontal-right'}
                                className="border-none" // Remove internal border since we handle it in container
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ADDITIONAL CONTENT */}
            <div className="border-b border-black">
                <CardGrid />
            </div>

            <section className="py-24">
                <div className="px-6 lg:px-12 mb-12">
                     <h2 className="text-4xl font-bold uppercase border-b border-black pb-4">Latest Stories</h2>
                </div>
                <PostCarousel />
            </section>

            <Footer />
        </div>
    );
};

export default About;
