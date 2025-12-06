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
    const [cartOpen, setCartOpen] = useState(false)
    const [favsOpen, setFavsOpen] = useState(false)
    const [profileOpen, setProfileOpen] = useState(false)

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

