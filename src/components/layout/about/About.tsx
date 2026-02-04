'use client';
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";
import ScrollVelocity from "@/components/ui/ScrollVelocity";

export const About = () => {
    return (
        <div className="bg-white min-h-screen text-black overflow-x-hidden">
            {/* Hero Section */}
            <div className="pt-32 pb-24 px-6 border-b border-black">
                <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-6 text-center">
                    About Us
                </h1>
                <p className="max-w-3xl mx-auto text-xl md:text-2xl font-light text-center leading-relaxed text-gray-800">
                    We are crafting the future of industrial fashion. <br className="hidden md:block"/>
                    Where raw materials meet refined aesthetics.
                </p>
            </div>

            {/* Kinetic Typography Separator */}
            <div className="py-12 border-b border-black bg-neutral-100">
                 <ScrollVelocity
                    texts={["CREATIVITY - CRAFTSMANSHIP - VISION - AESTHETICS - "]}
                    velocity={30}
                    className="text-4xl md:text-7xl font-bold uppercase tracking-tight text-black opacity-80"
                 />
            </div>

            {/* Team Section - Zig Zag Layout */}
            <div className="max-w-screen-2xl mx-auto py-32 px-4 md:px-12 flex flex-col gap-20">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        layout={index % 2 === 0 ? 'horizontal-left' : 'horizontal-right'}
                        className="border border-black shadow-none hover:shadow-2xl transition-shadow duration-500"
                    />
                ))}
            </div>

            {/* Grid Section */}
            <div className="border-t border-black bg-white">
                <CardGrid />
            </div>

            <div className="border-t border-black">
                <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
