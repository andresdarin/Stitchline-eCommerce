export type New = {
    id: number;
    title: string;
    description: string;
    img: string;       // ruta de la imagen en /public
    link?: string;     // enlace opcional para "ver más"
    date: string;
}