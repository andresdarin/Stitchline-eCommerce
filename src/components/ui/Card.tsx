import { Product } from "@/types/product";
import { Bookmark, Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { FavoriteButton } from "./FavButton";

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void; // <- aquí
}

export const Card: React.FC<ProductCardProps> = ({ product, addToCart }) => {
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

                <div className="absolute top-2 right-2 flex flex-col space-x-2 text-gray-400">
                    <button className="p-2 hover:text-[var(--color1)] cursor-pointer">
                        <FavoriteButton product={product} />
                    </button>
                    <button className="p-2 hover:text-[var(--color1)] cursor-pointer">
                        <Eye size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-6 border border-black">
                <div className="p-4 col-span-5">
                    <h2 className="text-sm uppercase font-bold">{product?.name}</h2>
                    <p className="text-sm text-gray-600">${product?.price}</p>
                </div>
                <div className="flex items-center justify-center p-4 border-l border-black">
                    <button
                        className="flex items-center justify-center text-[var(--color1)]"
                        onClick={() => addToCart(product)} // <- agregamos al carrito
                    >
                        <ShoppingBag className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    )
}
