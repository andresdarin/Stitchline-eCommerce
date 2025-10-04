"use client";
import React, { useEffect, useRef, useState } from "react";

interface DropdownProps {
    options: string[];
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;           // wrapper
    buttonClassName?: string;     // botón
    optionClassName?: string;     // cada opción
    maxHeight?: string;           // por ej "max-h-60"
}

export const Dropdown: React.FC<DropdownProps> = ({
    options,
    value,
    onChange,
    placeholder = "Select",
    className = "",
    buttonClassName = "",
    optionClassName = "",
    maxHeight = "max-h-60",
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    // cerrar al click fuera (pointerdown evita problemas de orden evento)
    useEffect(() => {
        const onOutside = (e: PointerEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.addEventListener("pointerdown", onOutside);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onOutside);
            document.removeEventListener("keydown", onKey);
        };
    }, []);

    // para accesibilidad: manejar Enter/Space en el botón
    const onBtnKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen((s) => !s);
        }
    };

    return (
        <div ref={ref} className={`relative inline-block text-left ${className}`}>
            <button
                type="button"
                onClick={() => setOpen((s) => !s)}
                onKeyDown={onBtnKeyDown}
                aria-haspopup="listbox"
                aria-expanded={open}
                className={`w-full px-4 py-2 flex justify-between items-center ${buttonClassName}`}
            >
                <span className="truncate">{value || placeholder}</span>
                <span className="ml-2 text-sm select-none">▾</span>
            </button>

            {open && (
                <div
                    role="listbox"
                    className={`absolute left-0 mt-0 w-full bg-white border z-50 overflow-auto ${maxHeight}`}
                >
                    {options.map((opt) => (
                        <button
                            key={opt}
                            onClick={() => {
                                onChange(opt);
                                setOpen(false);
                            }}
                            className={`block w-full px-4 py-2 text-left hover:bg-gray-100 truncate ${optionClassName} ${opt === value ? "bg-gray-100 font-medium" : ""}`}
                        >
                            {opt}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
