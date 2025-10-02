export type CTAProps = {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'tertiary';
    onClick?: () => void;
    href?: string;
    className?: string;
}