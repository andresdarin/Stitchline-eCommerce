// src/components/main/about/About.tsx
import { teamMembers } from "@/data/teamData";
import { PersonCard } from "@/components/ui/PersonCard";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero / Manifesto Section */}
            <div className="pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b border-black">
                <div className="max-w-[1920px] mx-auto">
                    <h1 className="text-7xl md:text-9xl font-thin uppercase tracking-tighter mb-12 leading-[0.8]">
                        Sobre <br /> <span className="ml-12 md:ml-32 italic font-normal">Nosotros.</span>
                    </h1>
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                        <div className="w-full md:w-1/3">
                            <p className="text-sm font-mono uppercase tracking-widest border-l border-black pl-4">
                                Est. 2024 <br/>
                                Colectivo de Diseño <br/>
                                Industrial
                            </p>
                        </div>
                        <div className="w-full md:w-2/3">
                            <p className="text-xl md:text-3xl font-light leading-snug">
                                Somos un colectivo creativo redefiniendo la intersección de la estética industrial y la moda moderna.
                                Nacidos de una pasión compartida por los materiales crudos y las estructuras refinadas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="px-6 md:px-12 lg:px-24 py-32">
                <div className="max-w-[1920px] mx-auto flex flex-col gap-32">
                    {teamMembers.map((member, index) => (
                        <PersonCard
                            key={member.name}
                            name={member.name}
                            image={member.image}
                            description={member.description}
                            imagePosition={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>

            <div className="border-t border-black">
                <CardGrid />
            </div>

            <PostCarousel />
            <Footer />
        </div>
    );
};

export default About;
