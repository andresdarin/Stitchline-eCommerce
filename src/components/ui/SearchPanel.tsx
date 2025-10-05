import React, { useState } from "react";
import { Search } from "lucide-react";
import { SearchInput } from "@/components/ui/SearchInput";

export const SearchPanel: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
        <div className="flex items-center gap-1 p-2">
            <SearchInput
                value={searchTerm}
                onChange={setSearchTerm}
                className="
                    h-6 w-24 text-[var(--color4)]
                    border-0 focus:border-b
                    focus:outline-none focus:border-b-black
                "
            />
            <Search size={20} />
        </div>
    );
};