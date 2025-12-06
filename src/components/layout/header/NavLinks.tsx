// NavLinks.tsx
import Link from "next/link";

const navItems = [
    { label: 'Man', href: '/Man' },
    { label: 'Woman', href: '/Woman' },
    { label: 'Accessories', href: '/Accessories' },
    { label: 'About Us', href: '/About' },
];

type NavLinksProps = {
    mobile?: boolean;
    className?: string;
}

export const NavLinks = ({ mobile = false, className = '' }: NavLinksProps) => {
    const base = mobile ? 'flex flex-col space-y-4' : 'hidden md:flex space-x-6';

    return (
        <nav className={`${base} ${className}`}>
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl font-thin text-[var(--color3)] hover:text-[var(--color4)] transition"
                >
                    {item.label.toUpperCase()}
                </Link>
            ))}
        </nav>
    );
};

export default NavLinks;
