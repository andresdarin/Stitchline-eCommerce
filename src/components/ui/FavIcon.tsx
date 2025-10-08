'use client'

import { Bookmark, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, clearFavorites } from "@/redux/slices/favSlice";
import { RootState } from "@/redux/store";
import { useState } from "react";

export const FavsIconPanel: React.FC<{ badgeColor?: string }> = ({ badgeColor = "bg-black text-white" }) => {
    const [favsOpen, setFavsOpen] = useState(false);
    const dispatch = useDispatch();
    const favs = useSelector((state: RootState) => state.favs.items);

    return (
        <div className="relative">
            <button className="p-2 relative cursor-pointer" onClick={() => setFavsOpen(prev => !prev)}>
                <Bookmark size={20} />
                {favs.length > 0 && (
                    <span className={`ml-1 text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 -right-2 cursor-pointer ${badgeColor}`}>
                        {favs.length}
                    </span>
                )}
            </button>
            {favsOpen && (
                <div className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto text-black bg-white border border-black rounded-none z-50 shadow-lg p-4">
                    {favs.length === 0 ? (
                        <p className="text-center py-10 text-gray-500">No tienes favoritos aún</p>
                    ) : (
                        <>
                            <table className="w-full text-left table-auto">
                                <thead>
                                    <tr className="border-b border-black">
                                        <th className="p-2">Producto</th>
                                        <th className="p-2">Precio</th>
                                        <th className="p-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {favs.map((item) => (
                                        <tr key={item.id} className="border-b border-black">
                                            <td className="p-2">{item.name}</td>
                                            <td className="p-2">${item.price}</td>
                                            <td className="p-2">
                                                <button
                                                    className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer"
                                                    onClick={() => dispatch(removeFavorite(item.id))}
                                                >
                                                    <X size={15} className="group-hover:text-red-400" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="border border-black rounded-none px-3 py-1 hover:bg-black hover:text-white hover:cursor-pointer "
                                    onClick={() => dispatch(clearFavorites())}
                                >
                                    Vaciar favoritos
                                </button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};