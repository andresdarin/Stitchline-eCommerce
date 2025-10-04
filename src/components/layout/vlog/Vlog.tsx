import CTA from "@/components/ui/CTA"
import Image from "next/image"

export const Vlog = () => {
    return (
        <div className=" flex flex-row p-24 pt-10 font-light">
            <div className="flex flex-row gap-10">
                <Image
                    src="/img/Clara.jpg"
                    alt="Newsletter Banner"
                    width={450}
                    height={100}
                    className="object-cover pl-10"

                />
                <Image
                    src="/img/Agatha.jpg"
                    alt="Newsletter Banner"
                    width={450}
                    height={100}
                    className="object-cover pr-10"

                />
            </div>
            <div className="flex flex-col justify-center p-24 ml-40">
                <h1 className="text-xl font-bold pb-6 font-light uppercase"> Meet The Artists Behind Stitchline Agatha & Clara</h1>
                <p>Two timeless souls who stitch elegance and tradition into every fabric, always with a cup of Earl Grey at hand.</p>
                <CTA href="#" variant="tertiary" className="mt-6">Get Inspired...</CTA>
            </div>

        </div>
    )
}