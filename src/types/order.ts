// order.ts
import type { CartItem } from './cart';

export type Order = {
    id: string;
    userId: string;
    items: CartItem[];
    total: number;
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
    createdAt: string;
};
