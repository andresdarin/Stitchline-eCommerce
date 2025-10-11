'use client'


import { CartIconPanel } from "@/components/ui/CartIcon";
import { FavsIconPanel } from "@/components/ui/FavIcon";
import { UserPanel } from "@/components/ui/UserIcon";
import { SearchPanel } from "@/components/ui/SearchPanel";

export const UserIcons: React.FC = () => {


    return (
        <div className="relative flex items-center gap-4 text-[var(--color4)]">
            <SearchPanel />
            <CartIconPanel />
            <FavsIconPanel />
            <UserPanel />
        </div>
    );

};
export default UserIcons;
