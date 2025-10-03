// types/newsletter.ts
export interface NewsletterProps {
    title?: string;
    subtitle?: string;
    background?: string;
    showForm?: boolean; // por si a veces no querés el form
    onSubmit?: (email: string) => void; // callback para el form
    onAnimationComplete?: () => void;
}
