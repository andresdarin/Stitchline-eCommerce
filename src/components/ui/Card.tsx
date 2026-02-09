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
        <div className="group flex flex-col overflow-hidden cursor-default h-[620px] transition-all hover:shadow-xl">
            <div className="relative h-[100%] w-full overflow-hidden">
                {/* TAG arriba a la izquierda */}
                {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-2 left-2 z-20">
                        {product.tags.slice(0, 1).map(tag => (
                            <span
                                key={tag}
                                className="bg-black text-white px-2 py-1 text-xs font-semibold uppercase tracking-wider"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                <Image
                    src={product?.images?.[0] || '/img/bg-hero.webp'}
                    alt={product?.name || 'Product'}
                    layout="fill"
                    objectFit="cover"
                    className="border border-[var(--color1)] border-b-0 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                <div className="absolute top-2 right-2 flex flex-col items-center gap-2 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="hover:text-black bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-sm transition-colors"
                        aria-label="Add to favorites"
                    >
                        <FavoriteButton product={product} />
                    </button>
                    <button
                        className="hover:text-black bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-sm transition-colors"
                        onClick={() => setModalOpen(true)}
                        aria-label="Quick view"
                    >
                        <Eye size={20} />
                    </button>
                </div>
            </div>

            {/* Modal de detalle */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start max-w-4xl w-full md:min-h-[400px]">
                    {/* Imagen a la izquierda */}
                    <div className="w-full md:w-1/2 md:max-w-[400px]">
                        <Image
                            src={product?.images?.[0] || '/img/bg-hero.webp'}
                            alt={product?.name || 'Product'}
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="border border-[var(--color1)] w-full h-auto"
                        />
                    </div>
                    {/* Textos a la derecha */}
                    <div className="flex flex-col h-full flex-1 pr-6 w-full">
                        <h2 className="text-2xl font-bold mb-3 uppercase">{product?.name}</h2>
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-lg text-black font-bold">${product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                            )}
                        </div>
                        <p className="mb-1 text-xs text-gray-600">
                            <span className="font-semibold">Category:</span> {product.category} / {product.subcategory}
                        </p>
                        <p className="mb-1 text-xs text-gray-600">
                            <span className="font-semibold">Stock:</span>{" "}
                            {product.inStock ? "Available" : "Out of Stock"}
                        </p>
                        {product.sizes?.length > 0 && (
                            <p className="mb-1 text-xs text-gray-600">
                                <span className="font-semibold">Sizes:</span> {product.sizes.join(", ")}
                            </p>
                        )}
                        {product.colors?.length > 0 && (
                            <p className="mb-1 text-xs text-gray-600">
                                <span className="font-semibold">Colors:</span> {product.colors.join(", ")}
                            </p>
                        )}
                        {product.tags && product.tags.length > 0 && (
                            <div className="mb-2 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs uppercase"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="mb-6 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4 mt-2">{product?.description}</p>
                        <div className="flex-1" />
                        <button
                            className="bg-black text-white border border-black px-6 py-3 uppercase font-bold tracking-wider hover:bg-white hover:text-black transition-colors w-full disabled:opacity-60 disabled:cursor-not-allowed"
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

            <div className="grid grid-cols-6 border border-black bg-white relative z-10">
                <div className="p-4 col-span-5 border-r border-transparent">
                    <h2 className="text-sm uppercase font-bold truncate pr-2">{product?.name}</h2>
                    <p className="text-sm text-gray-600">${product?.price}</p>
                </div>
                <div className="flex items-center justify-center border-l border-black group-hover:bg-black group-hover:text-white transition-colors">
                    <button
                        className="flex items-center justify-center w-full h-full"
                        onClick={() => addToCart(product)}
                        aria-label={`Add ${product.name} to cart`}
                    >
                        <ShoppingBag className="w-5 h-5 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
}
