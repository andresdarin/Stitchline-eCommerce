import React, { useState, useEffect } from 'react'
import { NavLinks } from './NavLinks'

export const BurguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Cerrar menú al cambiar el tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Prevenir scroll cuando el menú está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>
            {/* Botón Hamburguesa */}
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                />
                <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''
                        }`}
                />
                <span
                    className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={closeMenu}
                />
            )}

            {/* Menú Lateral */}
            <div
                className={`fixed top-0 right-0 h-full w-80 max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Header del menú */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-900">Menú</h2>
                    <button
                        onClick={closeMenu}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                        aria-label="Close menu"
                    >
                        <svg
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Contenido del menú */}
                <div className="flex flex-col h-full">
                    <nav className="flex-1 p-6">
                        <div onClick={closeMenu}>
                            <NavLinks />
                        </div>
                    </nav>

                    {/* Footer del menú (opcional) */}
                    <div className="p-6 border-t border-gray-200">
                        <div className="text-sm text-gray-500 text-center">
                            Stitchline eCommerce
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}