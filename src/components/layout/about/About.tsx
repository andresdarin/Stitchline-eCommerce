// src/components/layout/about/About.tsx
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen">
             {/* Hero Section */}
             <div className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto">
                 <div className="mb-24 md:mb-40">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase mb-8 leading-none">
                        About <br className="hidden md:block" /> Us.
                    </h1>
                    <div className="w-24 h-2 bg-black mb-8"></div>
                    <p className="text-xl md:text-3xl text-gray-500 max-w-4xl font-light leading-snug">
                        We are a collective of designers and engineers building the future of industrial fashion.
                        Raw materials, clean lines, and functional aesthetics defining a new era of style.
                    </p>
                 </div>

                {/* Team Section */}
                <div className="flex flex-col gap-32 md:gap-48 mb-32">
                    {teamMembers.map((member, index) => (
                        <PersonCard
                            key={member.name}
                            name={member.name}
                            image={member.image}
                            description={member.description}
                            // Force horizontal layout for variety and impact, alternating sides
                            layout={index % 2 === 0 ? 'horizontal-left' : 'horizontal-right'}
                        />
                    ))}
                </div>
            </div>

            {/* Content Grids */}
            <div className="border-t border-gray-100 py-20 bg-gray-50">
                <div className="max-w-[1920px] mx-auto px-6">
                    <h3 className="text-3xl font-bold uppercase tracking-widest mb-12">Latest Collections</h3>
                    <CardGrid />
                </div>
            </div>

            <div className="py-20 max-w-[1920px] mx-auto px-6">
                 <h3 className="text-3xl font-bold uppercase tracking-widest mb-12">From the Blog</h3>
                 <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
