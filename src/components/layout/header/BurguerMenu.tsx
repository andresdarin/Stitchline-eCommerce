import React, { useState, useEffect } from 'react'
import { NavLinks } from './NavLinks'
import { CartIconPanel } from "@/components/ui/CartIcon"
import { FavsIconPanel } from "@/components/ui/FavIcon"
import { UserPanel } from "@/components/ui/UserIcon"
import { SearchPanel } from "@/components/ui/SearchPanel"
import Locations from '../footer/Locations'

export const BurguerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    // Cerrar menú al cambiar el tamaño de pantalla
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Prevenir scroll cuando el menú está abierto + soporte iOS + Escape
    useEffect(() => {
        const origHtmlOverflow = document.documentElement.style.overflow
        const origBodyOverflow = document.body.style.overflow

        const preventTouch = (e: TouchEvent) => { if (isOpen) e.preventDefault() }
        const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsOpen(false) }

        if (isOpen) {
            document.documentElement.style.overflow = 'hidden'
            document.body.style.overflow = 'hidden'
            document.addEventListener('touchmove', preventTouch, { passive: false })
            window.addEventListener('keydown', handleKey)
        } else {
            document.documentElement.style.overflow = origHtmlOverflow || ''
            document.body.style.overflow = origBodyOverflow || ''
        }

        return () => {
            document.documentElement.style.overflow = origHtmlOverflow || ''
            document.body.style.overflow = origBodyOverflow || ''
            document.removeEventListener('touchmove', preventTouch)
            window.removeEventListener('keydown', handleKey)
        }
    }, [isOpen])

    const toggleMenu = () => setIsOpen((s) => !s)
    const closeMenu = () => setIsOpen(false)

    return (
        <div className="relative">
            {/* Botón Hamburguesa */}
            <button
                onClick={toggleMenu}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none rounded transition-all duration-200"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-6 bg-black transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[9998] md:hidden transition-opacity duration-300"
                    onClick={closeMenu}
                />
            )}

            {/* Menú Lateral: flex column para header / main(scroll) / footer */}
            <aside
                aria-hidden={!isOpen}
                className={`fixed inset-y-0 right-0 w-[85vw] max-w-sm bg-white/95 backdrop-blur-lg border-l border-black z-[9999] transform transition-transform duration-300 ease-in-out md:hidden flex flex-col h-full ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                style={{
                    paddingTop: 'env(safe-area-inset-top, 16px)',
                    paddingBottom: 'env(safe-area-inset-bottom, 16px)'
                }}
            >
                {/* Header (fijo, fuera del scroll) */}
                <div className="flex items-center justify-between p-6 border-b border-black">
                    <h2 className="text-lg font-medium text-black">Menú</h2>

                    <div className="hidden sm:block w-full max-w-xs mx-4">
                        {/* Search en header si querés (opcional). Puedes moverlo al main si preferís) */}
                        <SearchPanel />
                    </div>

                    <button onClick={closeMenu} className="p-2 rounded hover:bg-black/5 transition-colors duration-200" aria-label="Close menu">
                        <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Main: contenido scrollable */}
                <main className="flex-1 overflow-y-auto p-6 min-h-0">
                    {/* Opcional: Search en main para móviles (mueve o duplica según UX) */}
                    <div className="block sm:hidden mb-4">
                        <SearchPanel />
                    </div>

                    {/* Icons Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="flex flex-col items-center gap-2 p-3 rounded border border-black hover:bg-black/5 transition-colors duration-200 text-black bg-white">
                            <CartIconPanel />
                            <span className="text-xs text-black/70">Carrito</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded border border-black hover:bg-black/5 transition-colors duration-200 text-black bg-white">
                            <FavsIconPanel />
                            <span className="text-xs text-black/70">Favoritos</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-3 rounded border border-black hover:bg-black/5 transition-colors duration-200 text-black bg-white">
                            <UserPanel />
                            <span className="text-xs text-black/70">Perfil</span>
                        </div>
                    </div>

                    {/* NavLinks en modo mobile (vertical) */}
                    <div className="mb-6">
                        <NavLinks mobile />
                    </div>

                    {/* Aquí podés agregar más contenido que quieras que scrollee */}
                    <div className="text-sm text-black/60">
                        <Locations />
                    </div>
                </main>

                {/* Footer (pegado abajo, fuera del scroll) */}
                <footer className="p-6 border-t border-black">
                    <div className="text-sm text-black/60 text-center">Stitchline eCommerce</div>
                </footer>
            </aside>
        </div>
    )
}
