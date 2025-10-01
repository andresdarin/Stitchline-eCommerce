import { ShoppingBag, Bookmark, Eye } from "lucide-react"
import { Product } from '../../types/product';
import Image from "next/image";

interface ProductCardProps {
    product: Product;
}

export const Card = ({ product }: ProductCardProps) => {
    return (
        <div className="flex flex-col overflow-hidden cursor-pointer h-[620px]">
            <div className="relative h-[100%] w-full">
                <Image
                    src={product?.images?.[0] || '/img/bg-hero.webp'}
                    alt={product?.name || 'Product'}
                    layout="fill"
                    objectFit="cover"
                    className="border border-[var(--color1)] border-b-0"
                />

                {/* Overlay de iconos */}
                <div className="absolute top-2 right-2 flex flex-col space-x-2 text-gray-400">
                    <button className="p-2 hover:text-[var(--color1)] cursor-pointer">
                        <Bookmark size={20} />
                    </button>
                    <button className="p-2 hover:text-[var(--color1)] cursor-pointer">
                        <Eye size={20} />
                    </button>
                </div>
            </div>

            <div className="flex flex-row border border-black justify-between">
                <div className="p-4">
                    <h2 className="text-sm uppercase font-bold">{product?.name}</h2>
                    <p className="text-sm text-gray-600">${product?.price}</p>
                </div>
                <div className="flex p-4 align-middle">
                    <button className="flex  items-center justify-center text-[var(--color1)]">
                        <ShoppingBag className="text-sm mr-2" />
                    </button>
                </div>
            </div>
        </div>
    )
}