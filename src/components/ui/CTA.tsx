import { CTAProps } from '../../types/CTA';


const CTA: React.FC<CTAProps> = ({ children, variant = 'primary', onClick, href, className }) => {
    const baseClasses = 'px-6 py-3 rounded-md font-semibold transition-colors duration-300';
    const variants = {
        primary: 'bg-transparent border rounded-none text-white border hover:transform hover:scale-105',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    };
    if (href) {
        return (
            <a href={href} className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
                {children}
            </a>
        );
    }

    return (
        <button className={`${baseClasses} ${variants[variant]} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default CTA;