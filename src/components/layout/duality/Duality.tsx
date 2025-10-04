import CTA from "@/components/ui/CTA";
import Image from "next/image";

export const Duality = () => {
    return (
        <div className="flex flex-row justify-center items-center h-[50rem] mb-[2rem] cursor-default">
            <div className="relative flex flex-col items-center justify-center border border-[var(--color1)] border-r-0 w-full h-full p-4">
                <Image
                    src="/img/man-shop.webp"
                    alt="Man Image"
                    fill
                    className="object-cover object-center -z-10"
                />
                <h1 className="text-white text-[4rem] font-[100] uppercase relative z-10 hover:text-[var(--color1)] ">Man</h1>
                <CTA href="Man" variant="primary" className="mt-6 relative z-10">Shop Now</CTA>
            </div>


            <div className="relative flex flex-col items-center justify-center border border-black w-full h-full p-4">
                <Image
                    src="/img/woman-shop.webp"
                    alt="Woman Image"
                    fill
                    className="object-cover object-center -z-10"
                />
                <h1 className="text-white text-[4rem] font-[100] uppercase relative z-10 hover:text-[var(--color1)]">Woman</h1>
                <CTA href="Woman" variant="primary" className="mt-6 relative z-10">Shop Now</CTA>
            </div>
        </div>
    );
};
export default Duality;