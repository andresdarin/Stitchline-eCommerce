import { selectCartItems, selectCartTotal } from "@/redux/selectors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartIconPanel } from "@/components/ui/CartIcon";
import { FavsIconPanel } from "@/components/ui/FavIcon";
import { UserPanel } from "@/components/ui/UserIcon";
import { SearchPanel } from "@/components/ui/SearchPanel";

export const UserIcons: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartOpen, setCartOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const favs = useSelector((state: RootState) => state.favs.items);
    const [favsOpen, setFavsOpen] = useState(false);

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
