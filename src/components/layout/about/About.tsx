// src/components/layout/about/About.tsx
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Title Section */}
            <div className="pt-12 px-4 md:px-12 mb-20">
                 <h1 className="text-[12vw] leading-none font-bold uppercase tracking-tighter border-b-4 border-black pb-4">
                    About Us
                </h1>
                <p className="mt-4 text-xl md:text-2xl font-mono text-gray-500 max-w-2xl">
                    Crafting stories through fabric and design since 2023.
                </p>
            </div>

            {/* Team Section - Staggered Grid */}
            <div className="px-4 md:px-12 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-12">
                    {teamMembers.map((member, index) => {
                        // Alternate positioning for "Innovation"
                        const isEven = index % 2 === 0;
                        // Clara (index 0) is vertical. Agatha (index 1) is horizontal.
                        // We'll give them specific grid spans.

                        const colSpan = member.layout === 'vertical' ? 'md:col-span-5' : 'md:col-span-7';
                        const start = isEven ? 'md:col-start-1' : 'md:col-start-6'; // Shift second item

                        return (
                            <div key={member.name} className={`${colSpan} ${start} relative`}>
                                {/* Decorative industrial element */}
                                <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-black hidden md:block" />

                                <PersonCard
                                    name={member.name}
                                    image={member.image}
                                    description={member.description}
                                    layout={member.layout}
                                    className="bg-gray-50/50 backdrop-blur-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border border-black"
                                />

                                {/* Decorative industrial element */}
                                <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-black hidden md:block" />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Card Grid Section with more space */}
            <div className="mb-32 px-4 md:px-12">
                 <h2 className="text-4xl font-bold uppercase mb-12 border-l-8 border-black pl-6">
                    Our Values
                </h2>
                <CardGrid />
            </div>

            {/* Carousel with consistent spacing */}
            <div className="mb-32">
                <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
