'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface PanelContextType {
    cartOpen: boolean
    favsOpen: boolean
    profileOpen: boolean
    setCartOpen: (open: boolean) => void
    setFavsOpen: (open: boolean) => void
    setProfileOpen: (open: boolean) => void
}

const PanelContext = createContext<PanelContextType | undefined>(undefined)

export function PanelProvider({ children }: { children: ReactNode }) {
    const [cartOpen, _setCartOpen] = useState(false)
    const [favsOpen, _setFavsOpen] = useState(false)
    const [profileOpen, _setProfileOpen] = useState(false)

    const setCartOpen = (open: boolean) => {
        _setCartOpen(open)
        if (open) {
            _setFavsOpen(false)
            _setProfileOpen(false)
        }
    }

    const setFavsOpen = (open: boolean) => {
        _setFavsOpen(open)
        if (open) {
            _setCartOpen(false)
            _setProfileOpen(false)
        }
    }

    const setProfileOpen = (open: boolean) => {
        _setProfileOpen(open)
        if (open) {
            _setCartOpen(false)
            _setFavsOpen(false)
        }
    }

    return (
        <PanelContext.Provider value={{ cartOpen, favsOpen, profileOpen, setCartOpen, setFavsOpen, setProfileOpen }}>
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
