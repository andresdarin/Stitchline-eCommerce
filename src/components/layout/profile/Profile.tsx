'use client'

import { User } from '@/types/user';
import CTA from '@/components/ui/CTA';
import { UserRound, Mail, Calendar } from 'lucide-react';

interface ProfileProps {
    user: User | null;
    onEdit?: () => void;
    onLogout?: () => void;
}

export const Profile = ({ user, onEdit, onLogout }: ProfileProps) => {
    if (!user) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] p-30 font-light">
                <p className="text-xl mb-6">No hay usuario autenticado</p>
                <CTA href="/login" variant="tertiary">
                    Iniciar Sesión
                </CTA>
            </div>
        );
    }

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="flex flex-col p-30 font-light min-h-[60vh]">
            <div className="flex flex-col md:flex-row gap-10 pb-30">
                <div className="flex flex-col items-center md:items-start p-24 border border-[var(--color1)] bg-[var(--color4)]">
                    <div className="mb-6 p-8 border border-[var(--color1)] rounded-full bg-[var(--color3)]">
                        <UserRound size={64} className="text-[var(--color1)]" />
                    </div>
                    <h1 className="text-2xl font-bold uppercase pb-2 text-center md:text-left">
                        {user.name}
                    </h1>
                    <p className="text-sm font-thin text-[var(--color2)] text-center md:text-left">
                        Miembro desde {formatDate(user.createdAt)}
                    </p>
                </div>

                <div className="flex flex-col justify-center p-24 flex-1">
                    <h2 className="text-xl font-bold uppercase pb-6">Información del Perfil</h2>
                    
                    <div className="space-y-6 pb-6">
                        <div className="flex flex-row items-center gap-4 pb-4 border-b border-[var(--color3)]">
                            <Mail size={20} className="text-[var(--color2)]" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase font-semibold text-[var(--color2)]">
                                    Email
                                </span>
                                <span className="text-base font-light">
                                    {user.email}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-4 pb-4 border-b border-[var(--color3)]">
                            <Calendar size={20} className="text-[var(--color2)]" />
                            <div className="flex flex-col">
                                <span className="text-xs uppercase font-semibold text-[var(--color2)]">
                                    Fecha de Registro
                                </span>
                                <span className="text-base font-light">
                                    {formatDate(user.createdAt)}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-6">
                        {onEdit && (
                            <CTA 
                                onClick={onEdit} 
                                variant="tertiary" 
                                className="w-full sm:w-auto"
                            >
                                Editar Perfil
                            </CTA>
                        )}
                        {onLogout && (
                            <CTA 
                                onClick={onLogout} 
                                variant="secondary" 
                                className="w-full sm:w-auto"
                            >
                                Cerrar Sesión
                            </CTA>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

