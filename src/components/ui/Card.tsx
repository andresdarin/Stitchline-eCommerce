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
        <div className="flex flex-col overflow-hidden cursor-default h-[620px]">
            <div className="relative h-[100%] w-full">
                {/* TAG arriba a la izquierda */}
                {product.tags && product.tags.length > 0 && (
                    <div className="absolute top-2 left-2 z-20">
                        {product.tags.slice(0, 1).map(tag => (
                            <span
                                key={tag}
                                className="bg-black text-white px-2 py-1 text-xs font-semibold"
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
                    className="border border-[var(--color1)] border-b-0"
                />

                <div className="absolute top-2 right-2 flex flex-col items-center gap-2 text-gray-400">                    <button
                    className=" hover:text-[var(--color1)] cursor-pointer">
                    <FavoriteButton product={product} />
                </button>
                    <button
                        className=" hover:text-[var(--color1)] cursor-pointer"
                        onClick={() => setModalOpen(true)}
                    >
                        <Eye size={20} />
                    </button>
                </div>

            </div>

            {/* Modal de detalle */}
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <div className="flex flex-row gap-12 items-start max-w-4xl w-full min-h-[400px]">
                    {/* Imagen a la izquierda */}
                    <div className="min-w-[320px] max-w-[600px]">
                        <Image
                            src={product?.images?.[0] || '/img/bg-hero.webp'}
                            alt={product?.name || 'Product'}
                            width={500}
                            height={500}
                            objectFit="cover"
                            className="border border-[var(--color1)]"
                        />
                    </div>
                    {/* Textos a la derecha */}
                    <div className="flex flex-col h-full flex-1 pr-6">
                        <h2 className="text-2xl font-bold mb-3">{product?.name}</h2>
                        <div className="flex items-baseline gap-2 mb-3">
                            <span className="text-lg text-black font-bold">${product.price}</span>
                            {product.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">${product.originalPrice}</span>
                            )}
                        </div>
                        <p className="mb-1 text-xs text-gray-600">
                            <span className="font-semibold">Categoría:</span> {product.category} / {product.subcategory}
                        </p>
                        <p className="mb-1 text-xs text-gray-600">
                            <span className="font-semibold">Stock:</span>{" "}
                            {product.inStock ? "Disponible" : "Sin stock"}
                        </p>
                        {product.sizes?.length > 0 && (
                            <p className="mb-1 text-xs text-gray-600">
                                <span className="font-semibold">Talles:</span> {product.sizes.join(", ")}
                            </p>
                        )}
                        {product.colors?.length > 0 && (
                            <p className="mb-1 text-xs text-gray-600">
                                <span className="font-semibold">Colores:</span> {product.colors.join(", ")}
                            </p>
                        )}
                        {product.tags && product.tags.length > 0 && (
                            <div className="mb-2 flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-gray-100 text-gray-500 px-2 py-1 rounded text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                        <p className="mb-4 text-gray-500 text-sm">{product?.description}</p>
                        <div className="flex-1" />
                        <button
                            className="bg-white text-black border border-black px-6 py-3 hover:bg-black hover:text-white cursor-pointer mt-auto disabled:opacity-60"
                            onClick={() => {
                                addToCart(product);
                                setModalOpen(false);
                            }}
                            disabled={!product.inStock}
                        >
                            {product.inStock ? "Agregar al carrito" : "Sin stock"}
                        </button>
                    </div>
                </div>
            </Modal>
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
                        <ShoppingBag className="w-5 h-5 cursor-pointer" />
                    </button>
                </div>
            </div>
        </div>
    );
}