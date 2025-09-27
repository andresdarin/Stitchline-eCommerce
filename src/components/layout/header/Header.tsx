import React from 'react'
import { Logo } from './Logo'
import { NavLinks } from './NavLinks'
import { BurguerMenu } from './BurguerMenu'
import { UserIcons } from './UserIcons'

export const Header = () => {

    return (
        <header className='w-full h-20 border-b border-black flex flex-row items-center justify-between px-4 md:px-8 lg:px-16 bg-white sticky top-0 z-50'>
            <Logo />
            <NavLinks />
            <BurguerMenu />
            <UserIcons />
        </header>
    )
}
