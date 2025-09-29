import { SearchInput } from "@/components/ui/SearchInput"
import { Search, Handbag, Bookmark, UserRound } from "lucide-react"
import { useState } from "react"

export const UserIcons = () => {
    const [searchTerm, setSearchTerm] = useState("")


    return (
        <div className="flex items-center text-[var(--color4)] gap-4">
            <button className="p-2 flex items-center gap-1 rounded hover:bg-gray-200">
                <SearchInput value={searchTerm} onChange={setSearchTerm} className="h-6 w-20 text-[var(--color4)] " />
                <Search size={20} />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
                <Handbag size={20} />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
                <Bookmark size={20} />
            </button>
            <button className="p-2 rounded hover:bg-gray-200">
                <UserRound size={20} />
            </button>
        </div>
    )
}
