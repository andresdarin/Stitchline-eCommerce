import { ArrowRight } from "lucide-react";
import Image from "next/image";
import SplitText from "../../ui/SplitText";
import { NewsletterWrapper } from "./NLWrapper";
import { NewsletterContent } from "./NLContent";
import { NewsletterForm } from "./NLForm";

export const Newsletter = () => {
    const handleAnimationComplete = () => {
        // acción al terminar la animación
    };

    return (
        <NewsletterWrapper background="/img/banner.jpg">
            <NewsletterContent
                title="Join Our Style Club"
                subtitle="Be the first to get fresh drops, special offers, and insider perks."
            >
                <NewsletterForm onSubmit={(email) => console.log("Nuevo suscriptor:", email)} />
            </NewsletterContent>
        </NewsletterWrapper>
    );
};
