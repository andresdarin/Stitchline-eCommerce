// src/components/main/about/About.tsx
import { Title } from "@/components/ui/Title";
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <Title className="!pl-4 md:!pl-12 !py-12 md:!py-20 text-5xl md:text-7xl">About Us</Title>

            <div className="max-w-[1920px] mx-auto flex flex-col gap-0 border-l border-r border-black mx-4 md:mx-12">
                {teamMembers.map((member) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        layout={member.layout}
                        className="w-full !border-r-0 last:border-b-0"
                    />
                ))}
            </div>

            <div className="py-32 px-4 md:px-12">
                <h2 className="text-3xl font-thin uppercase tracking-widest mb-12 border-b border-black pb-4">Latest Stories</h2>
                <CardGrid />
            </div>

            <div className="py-24">
                <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
