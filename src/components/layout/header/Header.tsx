import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { BurguerMenu } from './BurguerMenu'
import { UserIcons } from './UserIcons'

export const Header = () => {
    return (
        <header className="w-full h-16 md:h-20 sticky top-0 z-50 shadow-sm">
            <div className="w-full px-4 sm:px-6 lg:w-19/20 mx-auto h-full flex items-center justify-between border-b border-[var(--color3)]">
                <section className="flex items-center space-x-2 sm:space-x-4 lg:space-x-8">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
                    {/* NavLinks se oculta en móvil y se muestra desde tablet */}
                    <div className="hidden md:block">
                        <NavLinks />
                    </div>
                </section>

                <section className="flex items-center space-x-2 sm:space-x-4">
                    {/* BurguerMenu se muestra solo en móvil y tablet */}
                    <div className="block lg:hidden">
                        <BurguerMenu />
                    </div>
                    <UserIcons />
                </section>
            </div>
        </header>
    )
}

export default Header;