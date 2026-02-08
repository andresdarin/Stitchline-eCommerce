'use client';
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import { Footer } from "@/components/layout/footer/Footer";
import CardGrid from "@/components/ui/CardGrid";
import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export const About = () => {
    return (
        <div className="bg-white font-thin min-h-screen border border-black">
            {/* Hero Section */}
            <div className="py-24 border-b border-black">
                <ScrollVelocity
                    texts={["STITCHLINE • EST. 2024 • CRAFTSMANSHIP •"]}
                    velocity={50}
                    className="font-mono uppercase text-black"
                />
                 <ScrollVelocity
                    texts={["DESIGN • INNOVATION • QUALITY • TIMELESS •"]}
                    velocity={-50}
                    className="font-mono uppercase text-black"
                />
            </div>

            {/* Team Section - Zig Zag Layout */}
            <div className="flex flex-col">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        // Force alternating layout for Zig-Zag effect on desktop
                        // On mobile, PersonCard handles responsiveness (hopefully, or we check)
                        layout={index % 2 === 0 ? 'horizontal-left' : 'horizontal-right'}
                        className="min-h-[60vh]"
                    />
                ))}
            </div>

            <div className="py-24 border-b border-black text-center">
                 <h2 className="text-4xl md:text-6xl font-thin uppercase tracking-widest mb-8">
                    Our Philosophy
                 </h2>
                 <p className="max-w-4xl mx-auto text-xl font-light px-6">
                    We believe in the power of good design to transform everyday life.
                    Structure meets fluidity. Industrial precision meets human touch.
                 </p>
            </div>

            <CardGrid />
            <PostCarousel />
            <Footer />
        </div>
    );
};

export default About;
