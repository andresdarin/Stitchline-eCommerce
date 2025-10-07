import { Footer } from "@/components/layout/footer/Footer"
import { Header } from "@/components/layout/header/Header";
import StoreGrid from "@/components/layout/store/StoreGrid"
import { CartIconPanel } from "@/components/ui/CartIcon";
import { FavsIconPanel } from "@/components/ui/FavIcon";
import ScrollVelocity from "@/components/ui/ScrollVelocity"
import { SearchPanel } from "@/components/ui/SearchPanel";
import { UserPanel } from "@/components/ui/UserIcon";

export const Man = () => {
    const velocity = 40; // Set your desired velocity value here

    return (
        <>
            <h1 className="flex items-center pl-10 text-[50px] font-thin border-b border-black">MAN</h1>
            <div className="absolute top-5 right-10 z-50 text-[var(--color1)] flex items-center gap-4">
                <SearchPanel />
                <CartIconPanel />
                <FavsIconPanel />
                <UserPanel />
            </div>

            <StoreGrid fixedCategory="men" />
            <ScrollVelocity
                texts={[
                    'Discover men’s essentials crafted for movement, confidence, and everyday hustle.',
                    'From classic fits to bold statements; elevate your look and own the street.'
                ]}

                velocity={velocity}
                className="custom-scroll-text text-5xl p-2 font-light"
            />
            <Footer />
        </>
    )


}
export default Man