export type CTAProps = {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
    href?: string;
    className?: string;
}