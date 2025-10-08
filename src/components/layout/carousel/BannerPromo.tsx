import CTA from '@/components/ui/CTA'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'


export const BannerPromo = () => {
    return (
        <div className='relative flex items-center justify-center border border-black h-[35rem] w-[90%] mt-16'>
            <Image
                src="/img/bg-hero.webp"
                alt="Promotional Banner"
                width={1200}
                height={600}
                className="w-full h-full object-cover"
            />
            <div className="flex flex-col justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold text-center">
                <div className="flex flex-row justify-center items-center">
                    <span className="">ONYX</span>
                    <X className="mx-2 center" />
                    <span className="">THE FLOW</span>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <CTA href="#" variant="secondary" className="mt-6 text-sm border-black rounded-none bg-transparent text-white hover:bg-white hover:text-black"> Read More </CTA>
                </div>
            </div>

        </div>
    )
}
export default BannerPromo;
