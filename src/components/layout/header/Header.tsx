import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { BurguerMenu } from './BurguerMenu'
import { UserIcons } from './UserIcons'

export const Header = () => {

    return (
        <header className="w-full h-20 sticky top-0 z-50">
            {/*Wrapper*/}
            <div className="w-19/20 mx-auto h-full flex items-center justify-between border-b border-black">

                <section className="flex items-center space-x-8">
                    <Logo />
                    <NavLinks />
                </section>

                <section className="flex items-center space-x-4">
                    <BurguerMenu />
                    <UserIcons />
                </section>
            </div>
        </header>

    )
}
