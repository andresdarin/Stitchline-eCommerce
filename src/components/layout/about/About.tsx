// src/components/layout/about/About.tsx
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen flex flex-col">
            {/* Industrial Header */}
            <header className="border-b border-black px-6 md:px-12 py-32 md:py-40 bg-gray-50/50">
                <div className="max-w-7xl mx-auto">
                    <span className="block text-xs font-bold tracking-[0.3em] mb-4 uppercase text-gray-500">
                        Est. 2024 — Stitchline
                    </span>
                    <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                        About<span className="text-gray-300">.</span><br/>
                        Us<span className="text-gray-300">_</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-8 md:items-end">
                        <div className="md:w-1/2">
                            <p className="text-xl md:text-2xl font-light leading-relaxed">
                                We are a collective of dreamers and makers, stitching together the fabric of tradition with the bold threads of modernity.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex md:justify-end">
                             <div className="w-24 h-24 border border-black rounded-full flex items-center justify-center animate-spin-slow">
                                <span className="text-2xl">✴</span>
                             </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Team Section - Full Width for "Air" */}
            <section className="border-b border-black">
                {teamMembers.map((member, index) => (
                    <div key={member.name} className={`relative group ${index !== teamMembers.length - 1 ? 'border-b border-black' : ''}`}>
                         {/* Hover Effect Background */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="max-w-screen-2xl mx-auto">
                            <PersonCard
                                name={member.name}
                                image={member.image}
                                description={member.description}
                                layout={member.layout}
                                className="w-full border-none" // Override internal borders if possible via class, otherwise wrapper handles structure
                            />
                        </div>
                    </div>
                ))}
            </section>

            {/* Values / Grid Section */}
            <section className="py-32 px-6 border-b border-black bg-neutral-50">
                <div className="mb-16 text-center">
                     <h2 className="text-4xl font-bold uppercase tracking-widest mb-4">Our Manifesto</h2>
                     <div className="w-16 h-1 bg-black mx-auto" />
                </div>
                <CardGrid />
            </section>

            {/* Journal / Carousel */}
            <section className="py-24">
                <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
                    <h2 className="text-5xl font-thin uppercase tracking-tight">Journal</h2>
                    <span className="hidden md:block text-sm tracking-widest font-bold">LATEST STORIES</span>
                </div>
                <PostCarousel />
            </section>

            <Footer />
        </div>
    );
};

export default About;
