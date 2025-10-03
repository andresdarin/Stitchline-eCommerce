import SplitText from "../../ui/SplitText";
import { NewsletterProps } from "@/types/newsLetter";

export const NewsletterContent = ({ title, subtitle, onAnimationComplete, children }: NewsletterProps & { children?: React.ReactNode }) => {
    return (
        <>
            <h2 className="text-3xl font-bold mb-2 uppercase">{title || "Sign up to our newsletter"}</h2>

            {subtitle && (
                <SplitText
                    text={subtitle}
                    className="text-sm mb-6 text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    onLetterAnimationComplete={onAnimationComplete}
                />
            )}

            {children}
        </>
    );
};
