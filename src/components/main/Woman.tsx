import { Footer } from "@/components/layout/footer/Footer";
import StoreGrid from "@/components/layout/store/StoreGrid";
import { CartIconPanel } from "@/components/ui/CartIcon";
import { FavsIconPanel } from "@/components/ui/FavIcon";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { SearchPanel } from "@/components/ui/SearchPanel";
import { UserPanel } from "@/components/ui/UserIcon";

export const Woman = () => {
    const velocity = 40; // Set your desired velocity value here

    return (
        <>
            <h1 className="flex items-center pl-10 text-[50px] font-thin border-b border-black">WOMAN</h1>
            <div className="absolute top-5 right-10 z-50 text-[var(--color1)] flex items-center gap-4">
                <SearchPanel />
                <CartIconPanel />
                <FavsIconPanel />
                <UserPanel />
            </div>
            <StoreGrid fixedCategory="women" />
            <ScrollVelocity
                texts={[
                    'Timeless designs crafted for modern women who redefine elegance in their own way.',
                    'Soft textures, clean lines, and the freedom to express who you are.'
                ]}

                velocity={velocity}
                className="custom-scroll-text text-5xl p-2 font-light"
            />
            <Footer />
        </>
    )


}
export default Woman