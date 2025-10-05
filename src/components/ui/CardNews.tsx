import Image from "next/image";
import { New } from "../../types/new";

interface NewsProps {
    newsItem: New;
}

export const NewsCard: React.FC<NewsProps> = ({ newsItem }: NewsProps) => {
    return (
        <article className="flex flex-col mt-8 overflow-hidden">
            {/* Imagen */}
            <div className="relative w-full h-[50rem] ">
                <span className="z-2 absolute text-xs border border-[var(--color1)] p-2 m-2 hover:text-white hover:bg-black">{newsItem.date}</span>
                <Image
                    src={newsItem.img || "/img/bg-hero.webp"}
                    alt={newsItem.title}
                    layout="fill"
                    objectFit="cover"
                    className="-z-1 border border-[var(--color1)]"
                />
            </div>

            {/* Contenido */}
            <div className="p-4 flex flex-col text-center justify-between h-full">
                <div>
                    <h3 className="text-lg font-semibold uppercase text-[var(--color1)]">
                        {newsItem.title}
                    </h3>
                    <p className="border border-var(--color1)] m-2"></p>
                    <p className="text-sm text-gray-600 mt-2">{newsItem.description}</p>
                </div>
            </div>
        </article>
    );
};
