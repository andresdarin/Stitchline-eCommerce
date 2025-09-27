import Link from "next/link";

const navItems = [
    { label: 'Hombre', href: '/products/hombre' },
    { label: 'Mujer', href: '/products/mujer' },
    { label: 'Accesorios', href: '/products/accesorios' },
    { label: 'Novedades', href: '/products/novedades' },
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
];

export const NavLinks = () => {

    return (
        <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-gray-700 hover:text-gray-900">
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}
export default NavLinks;
