'use client'

import { useState } from "react";
import { Product } from "@/types/product";
import { Eye, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { FavoriteButton } from "./FavButton";
import { Modal } from "./Modal";

interface ProductCardProps {
    product: Product;
    addToCart: (product: Product) => void;
}

export const Card: React.FC<ProductCardProps> = ({ product, addToCart }) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="group flex flex-col relative w-full h-full bg-white border border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-200">
            {/* Image Container */}
            <div className="relative aspect-[3/4] w-full overflow-hidden border-b border-black">
                {/* TAG */}
                {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-0 left-0 z-20 p-2">
                        {product.tags.slice(0, 1).map(tag => (
                            <span
                                key={tag}
                                className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Image
                    src={product?.images?.[0] || '/img/bg-hero.webp'}
                    alt={product?.name || 'Product'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay Actions */}
                <div className="absolute top-2 right-2 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="bg-white border border-black p-2 hover:bg-black hover:text-white transition-colors cursor-pointer">
                         <FavoriteButton product={product} />
                    </div>
                    <button
                        className="bg-white border border-black p-2 hover:bg-black hover:text-white transition-colors cursor-pointer"
                        onClick={() => setModalOpen(true)}
                        aria-label="Quick View"
                    >
                        <Eye size={18} />
                    </button>
                </div>
            </div>

            {/* Info Container */}
            <div className="flex flex-col flex-1 p-4 justify-between">
                <div>
                    <h2 className="text-sm font-bold uppercase tracking-widest mb-1 line-clamp-1" title={product.name}>
                        {product?.name}
                    </h2>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                        {product.category} / {product.subcategory}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-baseline gap-2">
                        <span className="text-lg font-bold">${product?.price}</span>
                        {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
                        )}
                    </div>
                    <button
                        className="p-2 border border-black hover:bg-black hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={() => addToCart(product)}
                        disabled={!product.inStock}
                        title={product.inStock ? "Add to Cart" : "Out of Stock"}
                    >
                        <ShoppingBag size={18} />
                    </button>
                </div>
            </div>

            {/* Modal de detalle (Simplified for better structure) */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full p-4 md:p-8 bg-white">
                    {/* Imagen */}
                    <div className="relative aspect-square w-full border border-black">
                        <Image
                            src={product?.images?.[0] || '/img/bg-hero.webp'}
                            alt={product?.name || 'Product'}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Textos */}
                    <div className="flex flex-col h-full">
                        <div className="mb-auto">
                            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">{product?.name}</h2>
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-2xl font-bold">${product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through">${product.originalPrice}</span>
                                )}
                            </div>

                            <div className="space-y-2 text-sm text-gray-600 mb-8 border-t border-b border-gray-200 py-4">
                                <p><span className="font-bold text-black uppercase w-24 inline-block">Category:</span> {product.category}</p>
                                <p><span className="font-bold text-black uppercase w-24 inline-block">Stock:</span> {product.inStock ? "In Stock" : "Sold Out"}</p>
                                {product.sizes?.length > 0 && (
                                    <p><span className="font-bold text-black uppercase w-24 inline-block">Sizes:</span> {product.sizes.join(", ")}</p>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8">{product?.description}</p>
                        </div>

                        <button
                            className="w-full bg-black text-white uppercase font-bold tracking-widest py-4 border border-black hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => {
                                addToCart(product);
                                setModalOpen(false);
                            }}
                            disabled={!product.inStock}
                        >
                            {product.inStock ? "Add to Cart" : "Sold Out"}
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
