'use client'
// src/components/ui/FavoriteButton.tsx
import { Bookmark } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/redux/slices/favSlice";
import { Product } from "@/types/product";
import { RootState } from "@/redux/store";

interface FavoriteButtonProps {
    product: Product;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favs.items);
    const isFavorite = favorites.some((p: Product) => p.id === product.id);

    return (
        <div
            onClick={() => dispatch(toggleFavorite(product))}
            className={` rounded-full transition ${isFavorite ? "text-black" : "text-gray-400 hover:text-black"
                }`}
        >
            <Bookmark fill={isFavorite ? "Black" : "none"} />
        </div>
    );
};
