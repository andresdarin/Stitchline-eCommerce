import { ShoppingCartIcon, Bookmark, UserRound, Search } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";
import { selectCartItems, selectCartTotal } from "@/redux/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeFromCart, increaseQuantity, decreaseQuantity, clearCart } from "@/redux/slices/cartSlice";

export const UserIcons: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);


    return (
        <div className="relative flex items-center text-[var(--color4)] gap-4">
            <button className="p-2 flex items-center gap-1 rounded hover:bg-gray-200">
                <SearchInput value={searchTerm} onChange={setSearchTerm} className="h-6 w-20 text-[var(--color4)]" />
                <Search size={20} />
            </button>

            {/* Carrito */}
            <div className="relative">
                <button className="p-2 rounded hover:bg-gray-200" onClick={() => setCartOpen((prev) => !prev)}>
                    <ShoppingCartIcon size={20} />
                </button>

                {cartOpen && (
                    <div className="text-black absolute right-0 mt-2 w-80 bg-white border border-black z-50 p-4 font-light">
                        {cart.length === 0 ? (
                            <p className="text-center">El carrito está vacío</p>
                        ) : (
                            <>
                                <table className="w-full font-light table-auto text-left">
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Precio</th>
                                            <th>Cant.</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((item) => (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>${item.price}</td>
                                                <td className="flex items-center gap-1">
                                                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                                                    {item.quantity}
                                                    <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                                </td>
                                                <td>
                                                    <button onClick={() => dispatch(removeFromCart(item.id))}>X</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p className="text-right mt-2 font-light">Total: ${cartTotal}</p>
                                <button className="w-full mt-2 p-2 text-black border border-black" onClick={() => dispatch(clearCart())}>
                                    Vaciar Carrito
                                </button>
                            </>
                        )}
                    </div>
                )}
            </div>

            <button className="p-2 rounded hover:bg-gray-200">
                <Bookmark size={20} />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
                <UserRound size={20} />
            </button>
        </div>
    );
};
