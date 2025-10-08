import Image from "next/image";
import { NewsletterProps } from "@/types/newsLetter";

export const NewsletterWrapper = ({ children, background }: NewsletterProps & { children: React.ReactNode }) => {
    return (
        <div className="relative w-full h-[25rem] mt-40 mb-40 flex items-center border border-black justify-center">
            <Image src={background || "/img/banner.jpg"} alt="Newsletter Banner" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-10 text-white max-w-xl">
                {children}
            </div>
        </div>
    );
};
export default NewsletterWrapper;