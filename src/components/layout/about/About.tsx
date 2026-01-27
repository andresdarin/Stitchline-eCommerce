import { teamMembers } from "@/data/teamData";
import { PersonCard } from "@/components/ui/PersonCard";
import PostCarousel from "../postCarousel/PostCarousel";
import Footer from "../footer/Footer";
import CardGrid from "@/components/ui/CardGrid";

export const About = () => {
    return (
        <div className="bg-white text-black min-h-screen font-sans selection:bg-black selection:text-white">
            {/* Header / Manifesto */}
            <header className="pt-32 pb-20 px-6 md:px-12 max-w-[1920px] mx-auto border-b border-black">
                <h1 className="text-7xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 break-words">
                    About<br />Us<span className="text-gray-300">.</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="text-lg md:text-2xl font-mono leading-relaxed border-l-4 border-black pl-8 py-2">
                        <p>
                            We are a collective of designers and engineers crafting digital experiences with an industrial soul.
                            We believe in raw materials, exposed structures, and the beauty of function.
                        </p>
                    </div>
                    <div className="flex flex-col justify-end items-start md:items-end">
                         <span className="font-bold uppercase tracking-widest text-sm mb-2 border-b border-black pb-1">Established</span>
                         <span className="text-5xl font-black tracking-tighter">2024</span>
                    </div>
                </div>
            </header>

            {/* Team Section */}
            <section className="py-32 px-6 md:px-12 max-w-[1920px] mx-auto">
                <div className="flex items-center gap-4 mb-24 sticky top-0 bg-white/80 backdrop-blur py-4 z-10 border-b border-gray-100">
                    <div className="h-[2px] w-20 bg-black"></div>
                    <h2 className="text-xl font-bold uppercase tracking-widest">The Team</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-12 gap-y-32">
                    {teamMembers.map((member, index) => (
                        <div key={member.name} className={`transform transition-all duration-500 hover:-translate-y-4 ${index % 2 !== 0 ? "md:mt-32" : ""}`}>
                            <PersonCard
                                name={member.name}
                                image={member.image}
                                description={member.description}
                                layout={member.layout}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Projects / CardGrid */}
            <section className="border-t border-black">
                 <div className="opacity-90 grayscale hover:grayscale-0 transition-all duration-500">
                    <CardGrid />
                 </div>
            </section>

             {/* Footer Area */}
            <div className="bg-black text-white py-20">
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 mb-20">
                     <h3 className="text-4xl font-black uppercase tracking-tighter mb-10">Latest Stories</h3>
                     <PostCarousel />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default About;
