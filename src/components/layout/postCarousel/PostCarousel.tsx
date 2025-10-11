'use client'
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { posts } from "@/data/posts";

export const PostCarousel: React.FC = () => {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [duration, setDuration] = useState<number>(18); // segundos por defecto
    const [isPaused, setIsPaused] = useState(false);

    // Ajusta la "velocidad" global (px por segundo)
    const SPEED_PX_PER_SEC = 120;

    useEffect(() => {
        const el = trackRef.current;
        if (!el) return;

        // scrollWidth incluye la copia (porque renderizamos posts dos veces)
        const totalWidth = el.scrollWidth;
        const singleWidth = totalWidth / 2 || 0;
        // duración proporcional al ancho; mínimo 8s para que no vaya demasiado rápido
        const computed = Math.max(8, Math.round(singleWidth / SPEED_PX_PER_SEC));
        setDuration(computed);
    }, [posts]);

    return (
        <div className="relative w-full overflow-hidden py-8">
            {/* viewport */}
            <div
                className="w-full"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* track: animación aplicada inline para controlar duration y pause */}
                <div
                    ref={trackRef}
                    className="flex items-center gap-4 will-change-transform"
                    style={{
                        // Animación CSS usando la keyframe "marquee" definida abajo
                        animation: `marquee ${duration}s linear infinite`,
                        animationPlayState: isPaused ? "paused" : "running",
                    }}

                >
                    {/* duplicamos posts para loop continuo */}
                    {[...posts, ...posts].map((post, i) => (
                        <a
                            key={`${post.id}-${i}`}
                            href={post.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 border border-black overflow-hidden shadow-sm transform-gpu transition-transform hover:scale-[1.03]"
                            style={{ width: 250, height: 250 }} // tamaño consistente
                        >
                            <div className="relative w-[250px] h-[250px]">
                                <Image
                                    src={post.img}
                                    alt={post.caption}
                                    fill
                                    sizes="(max-width: 640px) 160px, 250px"
                                    className="object-cover"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Keyframes CSS: lo ponemos aquí para no tocar tailwind.config */}
            <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          /* movemos -50% porque duplicamos los items (la segunda mitad ocupa el mismo contenido) */
          to {
            transform: translateX(-50%);
          }
        }

        /* pequeño ajuste en móviles: reducir gap/size si lo necesitás */
        @media (max-width: 640px) {
          .track {
            gap: 0.5rem;
          }
        }
      `}</style>
        </div>
    );
};

export default PostCarousel;
