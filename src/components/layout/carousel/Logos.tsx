import Image from "next/image";
import type { Logo } from "@/types/logo";
import type { logos } from "@/data/logos";

interface LogosProps {
    logos: Logo[];
}


export const Logos: React.FC<LogosProps> = ({ logos }) => {
    return (
        <div className="logos flex gap-6 items-center justify-center">
            {logos.map((logo) => (
                <Image
                    key={logo.id}
                    src={logo.src}
                    alt={logo.alt}
                    width={120}   // ajusta según necesites
                    height={60}   // ajusta según necesites
                />
            ))}
        </div>
    );
};

export default Logos;
