import { ShoppingCartIcon, Plus, Minus, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "@/redux/selectors";
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from "@/redux/slices/cartSlice";
import { useState } from "react";

export const CartIconPanel: React.FC = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className="relative">
            <button
                className="p-2 flex items-center justify-center cursor-pointer relative"
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
                                                <button
                                                    className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer"
                                                    onClick={() => dispatch(decreaseQuantity(item.id))}
                                                >
                                                    <Minus size={15} className="group-hover:text-white" />
                                                </button>

                                                <span className="w-6 text-center inline-block">{item.quantity}</span>

                                                {/* Botón + */}
                                                <button
                                                    className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer"
                                                    onClick={() => dispatch(increaseQuantity(item.id))}
                                                >
                                                    <Plus size={15} className="group-hover:text-white" />
                                                </button>
                                            </td>

                                            <td className="p-2">
                                                {/* Botón X */}
                                                <button className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer"
                                                    onClick={() => dispatch(removeFromCart(item.id))}>
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
    );
};