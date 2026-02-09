import { ArrowRight } from "lucide-react"
import { Features } from "./Features";
import { Support } from "./Support";
import { Company } from "./Company";
import { Locations } from "./Locations";
import { Bottom } from "./Bottom";
import { Brand } from "./Brand";

export const Footer = () => {

    return (
        <>
            <Features />
            <div className="flex flex-row justify-around p-[4rem]">
                <Brand />
                <Support />
                <Company />
                <Locations />
                <div className="relative z-10 flex flex-col p-10 text-black max-w-xl">
                    <h2 className="text-lg font-bold mb-2 uppercase">
                        Newsletter
                    </h2>

                    <div className="flex w-full max-w-md">
                        <input
                            type="email"
                            placeholder="E-mail address"
                            className="flex-grow text-black border-b-1 border-black focus:outline-none"
                        />
                        <button className="bg-white text-black px-4 py-2 hover:border hover:border-black hover:cursor-pointer ">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
            <Bottom />
        </>
    )
}
export default Footer;