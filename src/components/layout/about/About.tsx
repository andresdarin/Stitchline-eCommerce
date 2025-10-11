// src/components/main/about/About.tsx
import { Title } from "@/components/ui/Title";
import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";

export const About = () => {
    return (
        <div className="bg-white font-thin min-h-screen border border-black">
            <Title>About Us</Title>
            <div className="grid md:grid-cols-2">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        layout={member.layout}
                    />
                ))}
            </div>
            <PostCarousel />
            <Footer />
        </div>
    );
};

export default About;