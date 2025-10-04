import { Footer } from "@/components/layout/footer/Footer"
import { Header } from "@/components/layout/header/Header";
import StoreGrid from "@/components/layout/store/StoreGrid"
import ScrollVelocity from "@/components/ui/ScrollVelocity"

export const Man = () => {
    const velocity = 40; // Set your desired velocity value here

    return (
        <>
            <h1 className="flex items-center pl-10 text-[50px] font-thin border-b border-black">MAN</h1>
            <StoreGrid />
            <ScrollVelocity
                texts={[
                    'Discover men’s essentials crafted for movement, confidence, and everyday hustle.',
                    'From classic fits to bold statements; elevate your look and own the street.'
                ]}

                velocity={velocity}
                className="custom-scroll-text text-5xl font-light"
            />
            <Footer />
        </>
    )


}
export default Man