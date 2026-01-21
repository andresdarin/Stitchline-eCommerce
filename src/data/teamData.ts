// src/components/main/about/teamData.ts
export interface TeamMember {
    name: string;
    image: string;
    description: string;
    layout: 'vertical' | 'horizontal-left' | 'horizontal-right';
}

export const teamMembers: TeamMember[] = [
    {
        name: "Clara",
        image: "/img/Clara.jpg",
        description: "Me describiría como curiosa, detallista e inspirada incesantemente por la belleza tranquila de la vida cotidiana. Me encantan los largos paseos por mercados de antigüedades, experimentar con la sastrería clásica y el ritual del té de la tarde (¡Earl Grey, siempre!). Conocí a Agatha en un taller textil en Barcelona—su energía era contagiosa y sus ideas audaces. Rápidamente descubrimos nuestro sueño compartido: crear una marca donde la tradición se encuentra con la creatividad. Juntas, iniciamos Stitchline como una celebración de la amistad, la artesanía y las historias tejidas en cada puntada. Cada día, agradezco este viaje que compartimos.",
        layout: "vertical"
    },
    {
        name: "Agatha",
        image: "/img/Agatha.jpg",
        description: "Si tuviera que describirme, diría que soy apasionada, aventurera y siempre persiguiendo el próximo estallido de inspiración. Adoro los patrones audaces, las exposiciones de arte nocturnas y explorar los rincones ocultos de cada ciudad. Mi creatividad se alimenta del caos vibrante de la vida urbana y los momentos tranquilos dibujando en mi café favorito. Clara y yo nos conocimos cuando accidentalmente derramé pintura en su vestido vintage durante un taller—ella solo rió, limpiando los colores, y terminamos pasando toda la tarde hablando de telas, sueños y las historias que la ropa puede contar. Ese día, descubrimos una visión compartida: crear una marca que honre la tradición mientras abraza valientemente lo nuevo. Fundar Stitchline con Clara resultó ser la aventura de una vida. Ponemos nuestro corazón en cada colección, mezclando su elegancia atemporal con mi amor por lo inesperado, apoyándonos mutuamente en cada desafío creativo. Cada pieza que hacemos es una invitación a expresar individualidad y celebrar el arte de la artesanía. Juntas, hemos construido no solo una marca, sino un viaje alegre—una asociación moldeada por la confianza, la amistad y una creencia compartida en la belleza. ¡Y al mirar hacia adelante, sabemos que nuestra historia apenas comienza!",
        layout: "horizontal-left"
    }
];
