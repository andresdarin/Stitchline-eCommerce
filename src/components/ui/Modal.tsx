import { X } from "lucide-react";
import { ReactNode, useEffect } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children }) => {
    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        if (open) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"; // bloquear scroll fondo
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = ""; // restaurar scroll
        };
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-10 backdrop-blur-sm"
            onClick={onClose}>
            <div
                className="bg-white border border-black p-6 relative"
                onClick={(e) => e.stopPropagation()} // evita cerrar al clickear contenido
            >
                {/* Botón cerrar */}
                <button
                    className="absolute top-2 right-2 text-xl font-bold"
                    onClick={onClose}
                    aria-label="Cerrar"
                >
                    <X size={20} />
                </button>
                {children}
            </div>
        </div>
    );
};