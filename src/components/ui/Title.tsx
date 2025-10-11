// src/components/ui/Title.tsx
interface TitleProps {
    children: string;
    className?: string;
}

export const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
    return (
        <h1 className={`flex items-center pl-10 text-[40px] font-thin border-b border-black tracking-widest uppercase py-6 ${className}`}>
            {children}
        </h1>
    );
};