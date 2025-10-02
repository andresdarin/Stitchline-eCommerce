import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SplitText from "../../ui/SplitText";

export const Newsletter = () => {
    const handleAnimationComplete = () => {
        // acción al terminar la animación
    };

    return (
        <div className="relative w-full h-[25rem] mt-40 mb-40 flex items-center border border-black justify-center">
            {/* Fondo con la imagen */}
            <Image
                src="/img/banner.jpg"
                alt="Newsletter Banner"
                fill
                className="object-cover"
                priority
            />

            {/* Overlay para oscurecer un poco y dar contraste */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Contenido encima */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 text-white max-w-xl">
                <h2 className="text-3xl font-bold mb-2 uppercase">
                    Sign up to our newsletter
                </h2>

                <SplitText
                    text="Get the latest updates, exclusive discounts and more..."
                    className="text-lg mb-6 text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                <div className="flex w-full max-w-md">
                    <input
                        type="email"
                        placeholder="E-mail address"
                        className="flex-grow px-4 py-2 text-white focus:outline-none"
                    />
                    <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition">
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};
