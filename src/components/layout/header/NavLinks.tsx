import Link from "next/link";

const navItems = [
    { label: 'Hombre', href: '/Man' },
    { label: 'Mujer', href: '/Woman' },
    { label: 'Accesorios', href: '/Accessories' },
    { label: 'Novedades', href: '/NewArrivals' },
    { label: 'Blog', href: '/Blog' },
    { label: 'About', href: '/About' },
];

export const NavLinks = () => {

    return (
        <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm font-medium text-[var(--color4)] hover:text-[var(--color2)] transition">
                    {item.label.toUpperCase()}
                </Link>
            ))}
        </nav>
    )
}
export default NavLinks;
