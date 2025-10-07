import Link from "next/link";

const navItems = [
    { label: 'Man', href: '/Man' },
    { label: 'Woman', href: '/Woman' },
    { label: 'Accessories', href: '/Accessories' },
    { label: 'New Arrivals', href: '/NewArrivals' },
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
