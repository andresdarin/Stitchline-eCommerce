import { ShoppingCartIcon, Bookmark, UserRound, Search, Plus, Minus, X } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { selectCartItems, selectCartTotal } from "@/redux/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "@/redux/slices/cartSlice";
import { removeFavorite, clearFavorites } from "@/redux/slices/favSlice";
import { RootState } from "@/redux/store";

export const UserIcons: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const favs = useSelector((state: RootState) => state.favs.items);
    const [favsOpen, setFavsOpen] = useState(false);

    return (
        <div className="relative flex items-center gap-4 text-[var(--color4)]">

            {/* Buscador */}
            <div className="flex items-center gap-1 p-2">
                <SearchInput
                    value={searchTerm}
                    onChange={setSearchTerm}
                    className="
                        h-6 w-24 text-[var(--color4)]
                        border-0 focus:border-b
                        focus:outline-none focus:border-b-black
                        
                        "
                />
                <Search size={20} />
            </div>


            {/* Carrito */}
            <div className="relative">
                <button
                    className="p-2 flex items-center justify-center"
                    onClick={() => setCartOpen((prev) => !prev)}
                >
                    <ShoppingCartIcon size={20} />
                    {cart.length > 0 && (
                        <span className="ml-1 text-xs font-bold bg-black rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 -right-2">
                            {cart.length}
                        </span>
                    )}
                </button>

                {cartOpen && (
                    <div className="absolute right-0 mt-2 w-150 max-h-96 overflow-y-auto text-black bg-white border border-black rounded-none z-50 shadow-lg p-4">
                        {cart.length === 0 ? (
                            <p className="text-center py-10 text-gray-500">El carrito está vacío</p>
                        ) : (
                            <>
                                <table className="w-full text-left table-auto">
                                    <thead>
                                        <tr className="border-b border-black">
                                            <th className="p-2">Producto</th>
                                            <th className="p-2">Precio</th>
                                            <th className="p-2">Cant.</th>
                                            <th className="p-2"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id} className="border-b border-black">
                                                <td className="p-2">{item.name}</td>
                                                <td className="p-2">${item.price}</td>
                                                <td className="p-2 flex items-center gap-1">
                                                    {/* Botón - */}
                                                    <button className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer">
                                                        <Minus size={15} className="group-hover:text-white" />
                                                    </button>

                                                    <span className="w-6 text-center inline-block">{item.quantity}</span>

                                                    {/* Botón + */}
                                                    <button className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer">
                                                        <Plus size={15} className="group-hover:text-white" />
                                                    </button>
                                                </td>

                                                <td className="p-2">
                                                    {/* Botón X */}
                                                    <button className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer">
                                                        <X size={15} className="group-hover:text-red-400" />
                                                    </button>
                                                </td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div className="mt-4 flex justify-between items-center">
                                    <p className="font-bold text-right">Total: ${cartTotal}</p>
                                    <button
                                        className="border border-black rounded-none px-3 py-1 hover:bg-black hover:text-white hover:cursor-pointer "
                                        onClick={() => dispatch(clearCart())}
                                    >
                                        <span className="w-16 text-center inline-block">Vaciar</span>
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                )}
            </div>


            {/* PANEL DE FAVORITOS */}
            <div className="relative">
                <button
                    className="p-2 relative"
                    onClick={() => setFavsOpen(prev => !prev)}
                >
                    <Bookmark size={20} />
                    {favs.length > 0 && (
                        <span className="ml-1 text-xs font-bold bg-black rounded-full w-4 h-4 flex items-center justify-center absolute -top-2 -right-2">
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
            <button className="p-2  hover:bg-gray-100">
                <UserRound size={20} />
            </button>
        </div>
    );
};
