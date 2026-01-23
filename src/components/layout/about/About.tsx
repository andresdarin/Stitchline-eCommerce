import { PersonCard } from "@/components/ui/PersonCard";
import { teamMembers } from "@/data/teamData";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white font-thin min-h-screen border-t border-black">
             {/* Header Section */}
             <div className="py-24 px-6 md:px-12 lg:px-24 border-b border-black bg-white">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-thin uppercase tracking-tight mb-8">About Us</h1>
                <p className="text-xl md:text-3xl font-light max-w-5xl leading-relaxed text-gray-800">
                    We are crafting more than just clothing; we are designing a movement.
                    Where industrial raw materials meet delicate craftsmanship.
                </p>
             </div>

            {/* Team Section */}
            <div className="flex flex-col w-full">
                {teamMembers.map((member, index) => (
                    <PersonCard
                        key={member.name}
                        name={member.name}
                        image={member.image}
                        description={member.description}
                        layout={member.layout}
                        className={`w-full ${index !== teamMembers.length - 1 ? 'border-b border-black' : ''} md:border-r-0`}
                    />
                ))}
            </div>

            {/* Inspiration / Grid Section */}
            <div className="border-t border-black py-20 bg-gray-50">
                 <div className="px-6 md:px-12 mb-12">
                     <h2 className="text-4xl md:text-5xl uppercase font-thin tracking-widest text-center md:text-left">Inspiration</h2>
                 </div>
                 <div className="px-6 md:px-12">
                    <CardGrid />
                 </div>
            </div>

            <div className="border-t border-black">
                <PostCarousel />
            </div>

            <Footer />
        </div>
    );
};

export default About;
