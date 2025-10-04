import { Footer } from "@/components/layout/footer/Footer";
import { UserIcons } from "@/components/layout/header/UserIcons";
import StoreGrid from "@/components/layout/store/StoreGrid";
import ScrollVelocity from "@/components/ui/ScrollVelocity";

export const Woman = () => {
    const velocity = 40; // Set your desired velocity value here

    return (
        <>
            <h1 className="flex items-center pl-10 text-[50px] font-thin border-b border-black">WOMAN</h1>
            <StoreGrid />
            <ScrollVelocity
                texts={[
                    'Timeless designs crafted for modern women who redefine elegance in their own way.',
                    'Soft textures, clean lines, and the freedom to express who you are.'
                ]}

                velocity={velocity}
                className="custom-scroll-text text-5xl font-light"
            />
            <Footer />
        </>
    )


}
export default Woman