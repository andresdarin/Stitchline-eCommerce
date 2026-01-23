'use client'

import { UserRound, Mail, Calendar, X } from "lucide-react";
import { usePanel } from "@/contexts/PanelContext";
import { User } from "@/types/user";
import { useState, useEffect } from "react";

export const UserPanel: React.FC = () => {
    const { profileOpen, setProfileOpen, toggleProfile } = usePanel();
    const [user, setUser] = useState<User | null>(null);

    // Cargar usuario desde localStorage (mock para desarrollo)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            if (storedUser) {
                try {
                    setUser(JSON.parse(storedUser));
                } catch (e) {
                    console.error("Error parsing user data:", e);
                }
            }
        }
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const handleLogout = () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("user");
            setUser(null);
            setProfileOpen(false);
        }
    };

    return (
        <div className="relative">
            <button
                className="p-2 cursor-pointer"
                onClick={toggleProfile}
            >
                <UserRound size={20} />
            </button>
            {profileOpen && (
                <div className="absolute right-0 mt-2 w-96 max-h-[600px] overflow-y-auto text-black bg-white border border-black rounded-none z-50 shadow-lg p-6">
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-black">
                        <h2 className="text-xl font-bold uppercase">Mi Perfil</h2>
                        <button
                            className="border border-black rounded-none p-1 group hover:bg-black hover:cursor-pointer"
                            onClick={() => setProfileOpen(false)}
                        >
                            <X size={18} className="group-hover:text-white" />
                        </button>
                    </div>

                    {!user ? (
                        <div className="flex flex-col items-center justify-center py-10">
                            <UserRound size={48} className="text-gray-400 mb-4" />
                            <p className="text-center text-gray-500 mb-6">No hay usuario autenticado</p>
                            <a
                                href="/login"
                                className="border border-black rounded-none px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer transition-colors"
                            >
                                Iniciar Sesión
                            </a>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex flex-col items-center pb-6 border-b border-[var(--color3)]">
                                <div className="mb-4 p-6 border border-[var(--color1)] rounded-full bg-[var(--color3)]">
                                    <UserRound size={48} className="text-[var(--color1)]" />
                                </div>
                                <h3 className="text-lg font-bold uppercase text-center">
                                    {user.name}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                <div className="flex flex-row items-start gap-4 pb-4 border-b border-[var(--color3)]">
                                    <Mail size={20} className="text-[var(--color2)] mt-1" />
                                    <div className="flex flex-col flex-1">
                                        <span className="text-xs uppercase font-semibold text-[var(--color2)] mb-1">
                                            Email
                                        </span>
                                        <span className="text-sm font-light">
                                            {user.email}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-start gap-4 pb-4 border-b border-[var(--color3)]">
                                    <Calendar size={20} className="text-[var(--color2)] mt-1" />
                                    <div className="flex flex-col flex-1">
                                        <span className="text-xs uppercase font-semibold text-[var(--color2)] mb-1">
                                            Miembro desde
                                        </span>
                                        <span className="text-sm font-light">
                                            {formatDate(user.createdAt)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 pt-4 border-t border-[var(--color3)]">
                                <button
                                    className="border border-black rounded-none px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer transition-colors text-sm uppercase font-semibold"
                                    onClick={() => {
                                        // Aquí puedes agregar lógica para editar perfil
                                        console.log("Editar perfil");
                                    }}
                                >
                                    Editar Perfil
                                </button>
                                <button
                                    className="border border-black rounded-none px-4 py-2 hover:bg-black hover:text-white hover:cursor-pointer transition-colors text-sm uppercase font-semibold"
                                    onClick={handleLogout}
                                >
                                    Cerrar Sesión
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};