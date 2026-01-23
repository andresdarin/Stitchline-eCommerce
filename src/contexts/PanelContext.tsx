'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface PanelContextType {
    cartOpen: boolean
    favsOpen: boolean
    profileOpen: boolean
    setCartOpen: (open: boolean) => void
    setFavsOpen: (open: boolean) => void
    setProfileOpen: (open: boolean) => void
    toggleCart: () => void
    toggleFavs: () => void
    toggleProfile: () => void
}

const PanelContext = createContext<PanelContextType | undefined>(undefined)

export function PanelProvider({ children }: { children: ReactNode }) {
    const [cartOpen, setCartOpen] = useState(false)
    const [favsOpen, setFavsOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

    const toggleCart = () => {
        if (!cartOpen) {
            setFavsOpen(false);
            setProfileOpen(false);
        }
        setCartOpen(!cartOpen);
    }

    const toggleFavs = () => {
        if (!favsOpen) {
            setCartOpen(false);
            setProfileOpen(false);
        }
        setFavsOpen(!favsOpen);
    }

    const toggleProfile = () => {
        if (!profileOpen) {
            setCartOpen(false);
            setFavsOpen(false);
        }
        setProfileOpen(!profileOpen);
    }

    return (
        <PanelContext.Provider value={{
            cartOpen, favsOpen, profileOpen,
            setCartOpen, setFavsOpen, setProfileOpen,
            toggleCart, toggleFavs, toggleProfile
        }}>
            {children}
        </PanelContext.Provider>
    )
}

export function usePanel() {
    const context = useContext(PanelContext)
    if (!context) {
        throw new Error('usePanel must be used within PanelProvider')
    }
    return context
}
