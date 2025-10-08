import CTA from "@/components/ui/CTA";
import Image from "next/image";

export const Duality = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-stretch h-[30rem] mb-8 cursor-default w-full overflow-hidden shadow-lg">
            {/* Man Section */}
            <div className="relative flex-1 flex flex-col items-center justify-center border border-r-0 border-l-0 border-[var(--color1)] overflow-hidden min-h-[20rem]">
                <Image
                    src="/img/man-shop.webp"
                    alt="Man Image"
                    fill
                    className="object-cover object-center -z-10"
                />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-white text-4xl md:text-6xl text-center border border-transparent font-thin uppercase drop-shadow-md hover:text-[var(--color1)] hover:border hover:border-[var(--color1)] transition-colors duration-200 tracking-widest p-4">
                        Man
                    </h1>
                    <CTA href="Man" variant="primary" className="mt-6">Shop Now</CTA>
                </div>
            </div>
            {/* Woman Section */}
            <div className="relative flex-1 flex flex-col border border-black border-r-0 items-center justify-center overflow-hidden min-h-[20rem]">
                <Image
                    src="/img/woman-shop.webp"
                    alt="Woman"
                    fill
                    priority
                    className="object-cover object-center -z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="text-white text-4xl md:text-6xl text-center border border-transparent font-thin uppercase drop-shadow-md hover:text-[var(--color1)] hover:border hover:border-[var(--color1)] transition-colors duration-200 tracking-widest p-4">
                        Woman
                    </h1>
                    <CTA href="Woman" variant="primary" className="mt-6">Shop Now</CTA>
                </div>
            </div>
        </div>
    );
};

export default Duality;