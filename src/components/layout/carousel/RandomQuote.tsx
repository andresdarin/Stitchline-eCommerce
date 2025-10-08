// components/RandomQuote.tsx
import { fashionQuotes } from "@/data/quotes";
import { useEffect, useState } from "react";

interface RandomQuoteProps {
    interval?: number;
    className?: string;
}

export const RandomQuote: React.FC<RandomQuoteProps> = ({ interval = 2500, className = "" }) => {
    const [currentQuote, setCurrentQuote] = useState<string>("");

    useEffect(() => {
        // Set initial quote
        setCurrentQuote(fashionQuotes[Math.floor(Math.random() * fashionQuotes.length)]);

        const quoteInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * fashionQuotes.length);
            setCurrentQuote(fashionQuotes[randomIndex]);
        }, interval);

        return () => clearInterval(quoteInterval);
    }, [interval]);

    return (
        <p className={`text-xl italic font-light text-gray-600 max-w-2xl min-h-15 mx-auto ${className}`}>
            {currentQuote}
        </p>
    );
};

export default RandomQuote;
