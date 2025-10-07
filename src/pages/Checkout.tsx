import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/redux/slices/cartSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import { selectCartItems, selectCartTotal } from "@/redux/selectors";
import { div } from "motion/react-client";

interface FormState {
    name: string;
    email: string;
    address: string;
}

export const Checkout = () => {
    const cart = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const dispatch = useDispatch();

    // Formulario simple para datos del comprador
    const [form, setForm] = useState<FormState>({ name: "", email: "", address: "" });
    const [success, setSuccess] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSuccess(true);
        dispatch(clearCart());
    };

    if (success) return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-light">
            <div className="p-8 text-center text-black text-xl border border-black">¡Gracias por tu compra, {form.name}!</div>
        </div>
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-light">
            <div className="max-w-2xl border border-black mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
                <div className="mb-4 border-b pb-4">
                    <h2 className="text-xl mb-2">Productos</h2>
                    {cart.length === 0 ? (
                        <p>Tu carrito está vacío.</p>
                    ) : (
                        <ul>
                            {cart.map(item => (
                                <li key={item.id} className="flex justify-between mb-1">
                                    <span>{item.name} x{item.quantity}</span>
                                    <span>${item.price * item.quantity}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-2 font-bold text-right">Total: ${cartTotal}</div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Nombre"
                        className="border-b border-black p-2 w-full focus:outline-none"
                    />
                    <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="Email"
                        className="border-b border-black p-2 w-full focus:outline-none"
                    />
                    <input
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        required
                        placeholder="Dirección"
                        className="border-b border-black p-2 w-full focus:outline-none"
                    />
                    <button type="submit" className="w-full bg-white border border-black text-black py-2  cursor-pointer hover:bg-black hover:text-white" disabled={cart.length === 0}>
                        Confirmar compra
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;