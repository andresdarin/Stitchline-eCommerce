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
        description: "I would describe myself as curious, detail-oriented, and endlessly inspired by the quiet beauty of everyday life. I love long walks through antique markets, experimenting with classic tailoring, and the ritual of afternoon tea (Earl Grey, always!). I first met Agatha at a textile workshop in Barcelona—her energy was contagious and her ideas bold. We quickly discovered our shared dream: to create a brand where tradition meets creativity. Together, we started Stitchline as a celebration of friendship, craftsmanship, and the stories woven into every stitch. Every day, I'm grateful for this journey we share.",
        layout: "vertical"
    },
    {
        name: "Agatha",
        image: "/img/Agatha.jpg",
        description: "If I had to describe myself, I'd say I'm passionate, adventurous, and always chasing the next burst of inspiration. I adore bold patterns, late-night art shows, and exploring the hidden corners of every city. My creativity is fueled by the vibrant chaos of urban life and the quiet moments spent sketching in my favorite café. Clara and I met when I accidentally spilled paint on her vintage dress during a workshop—she just laughed, wiping away the colors, and we ended up spending the whole afternoon talking about fabrics, dreams, and the stories that clothes can tell. That day, we discovered a shared vision: to create a brand that honors tradition while fearlessly embracing the new. Founding Stitchline with Clara turned out to be the adventure of a lifetime. We pour our hearts into every collection, blending her timeless elegance with my love for the unexpected, and supporting each other through every creative challenge. Each piece we make is an invitation to express individuality and celebrate the art of craftsmanship. Together, we've built not just a brand, but a joyful journey—a partnership shaped by trust, friendship, and a shared belief in beauty. And as we look ahead, we know that our story is only just beginning!",
        layout: "horizontal-left"
    }
];