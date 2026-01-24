// src/components/layout/about/About.tsx
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen selection:bg-black selection:text-white">
             {/* Hero Section */}
            <div className="pt-40 pb-24 px-6 md:px-20 flex flex-col items-center text-center">
                 <h1 className="text-6xl md:text-9xl font-thin uppercase tracking-tighter mb-6">About Us</h1>
                 <p className="text-sm md:text-base font-bold max-w-lg mx-auto uppercase tracking-[0.3em] text-gray-400">
                    Crafting the future of industrial fashion.
                 </p>
            </div>

            {/* Team Section */}
            <div className="flex flex-col gap-32 md:gap-48 px-6 md:px-20 pb-40 max-w-screen-2xl mx-auto">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        layout={index % 2 === 0 ? 'horizontal-left' : 'horizontal-right'}
                    />
                ))}
            </div>

            {/* Additional Content */}
            <div className="border-t border-black pt-20">
                <CardGrid />
            </div>

            <div className="py-20">
                 <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
