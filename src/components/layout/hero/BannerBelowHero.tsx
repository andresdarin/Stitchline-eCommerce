import CTA from "@/components/ui/CTA";
import CurvedLoop from "@/components/ui/CurvedLoop";

const BannerBelowHero = () => {
    return (
        <div className="relative border-[var(--color1)] z-10 flex flex-col items-center text-center justify-center h-full gap-8 text-[var(--color1)]">

            {/* Contenido centrado pero alineado a la izquierda */}
            <section className="flex flex-col mt-[7rem] items-center text-center justify-center px-4 md:px-0">
                <h2 className="text-4xl">Discover Our New Collection</h2>
                <p className="mt-6 text-lg max-w-6xl font-extralight">
                    Discover a unique fashion experience: exclusive pieces, modern designs, and details that make a difference. Our collection is crafted to inspire you, highlight your style, and elevate every moment. Because fashion is not just about clothing... It’s about expressing who you really are!
                </p>
            </section>
            {/* Loop abajo */}
            <section className="h-16 w-full">
                <CurvedLoop
                    marqueeText="Step ✦ Into ✦ Your ✦ Dream ✦ Wardrobe ✦ and ✦ Own ✦ Every ✦ Moment ✨"
                    speed={0.5}
                    curveAmount={70}
                    direction="right"
                    interactive={true}
                    className="custom-text-style text-[1.2rem] font-semibold uppercase"
                />
            </section>

        </div>
    );
};

export default BannerBelowHero;
