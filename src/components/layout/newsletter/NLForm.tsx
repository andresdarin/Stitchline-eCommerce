'use client'

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { NewsletterProps } from "@/types/newsLetter";

export const NewsletterForm = ({ onSubmit }: NewsletterProps) => {
    const [email, setEmail] = useState("");

    const handleSubmit = () => {
        if (onSubmit) onSubmit(email);
    };

    return (
        <div className="flex w-full max-w-md">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail address"
                className="flex-grow px-4 py-2 text-white bg-transparent border border-white/50 focus:outline-none"
            />
            <button onClick={handleSubmit} className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition">
                <ArrowRight size={20} />
            </button>
        </div>
    );
};
export default NewsletterForm;
