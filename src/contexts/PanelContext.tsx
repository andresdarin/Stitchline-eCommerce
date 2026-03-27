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
    const [cartOpen, setCartOpenState] = useState(false)
    const [favsOpen, setFavsOpenState] = useState(false)
    const [profileOpen, setProfileOpenState] = useState(false)

    const setCartOpen = (open: boolean) => {
        setCartOpenState(open)
        if (open) {
            setFavsOpenState(false)
            setProfileOpenState(false)
        }
    }

    const setFavsOpen = (open: boolean) => {
        setFavsOpenState(open)
        if (open) {
            setCartOpenState(false)
            setProfileOpenState(false)
        }
    }

    const setProfileOpen = (open: boolean) => {
        setProfileOpenState(open)
        if (open) {
            setCartOpenState(false)
            setFavsOpenState(false)
        }
    }

    return (
        <PanelContext.Provider value={{
            cartOpen,
            favsOpen,
            profileOpen,
            setCartOpen,
            setFavsOpen,
            setProfileOpen
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
