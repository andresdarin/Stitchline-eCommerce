import SplitText from "@/components/ui/SplitText"
import { TruckElectric, Undo2, Shield, MapPinned, ArrowRight } from "lucide-react"
import { FaGithub, FaInstagram, FaLaptopCode } from "react-icons/fa";

export const Footer = () => {
    const handleAnimationComplete = () => {
        // acción al terminar la animación
    };
    return (
        <>
            <div className="flex flex-row w-full justify-around p-8 mt-16 border border-black border-l-0 border-r-0">
                <div className="flex flex-row gap-2 items-center justify-center">
                    <TruckElectric />
                    <h1>Fast Delivery</h1>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <Undo2 />
                    <h1>Free Returns</h1>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <Shield />
                    <h1>Secure Checkout</h1>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                    <MapPinned />
                    <h1>Order Tracking</h1>
                </div>
            </div>
            <div className="flex flex-row justify-around p-[4rem]">
                <div>
                    <h2 className="text-4xl">Stitchline</h2>
                    <p className="mt-6 text-lg max-w-2xl">
                        Made with love. Shared with you.
                    </p>
                </div>
                {/* Support */}
                <div>
                    <h1 className="font-bold text-lg mb-4">Support</h1>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">Shipping & Returns</a></li>
                        <li><a href="#" className="hover:underline">Contact Support</a></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h1 className="font-bold text-lg mb-4">Company</h1>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Careers</a></li>
                        <li><a href="#" className="hover:underline">Press</a></li>
                        <li><a href="#" className="hover:underline">Sustainability</a></li>
                    </ul>
                </div>

                {/* Locations */}
                <div>
                    <h1 className="font-bold text-lg mb-4">Locations</h1>
                    <ul className="space-y-2">
                        <li>123 King’s Road, London, UK</li>
                        <li>45 Baker Street, Manchester, UK</li>
                        <li>78 Queen Street, Edinburgh, UK</li>
                    </ul>
                </div>
                {/* Contenido encima */}
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
            <div className="flex flex-row justify-between p-8 border border-black border-l-0 border-r-0">
                <h3>© {new Date().getFullYear()} Stitchline. All rights reserved.</h3>
                <div className="flex flex-row gap-4">
                    <FaGithub />
                    <FaInstagram />
                    <FaLaptopCode />
                </div>
            </div>
        </>
    )
}