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
                />

                {/* Overlay de iconos */}
                <div className="absolute top-2 right-2 flex flex-col space-x-2 text-gray-300">
                    <button className="p-2 shadow ">
                        <Bookmark size={20} />
                    </button>
                    <button className="p-2 shadow">
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
                        <ShoppingBag className="text-sm" />
                    </button>
                </div>
            </div>
        </div>
    )
}