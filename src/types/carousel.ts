export interface Post {
    id: string | number;
    img: string;
    link: string;
    caption: string;
}

export interface PostCarouselProps {
    posts: Post[];
    speed?: number; // px/segundo, opcional
    minDuration?: number; // duración mínima en segundos
}
