// Pagination.tsx
import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

interface PaginationProps {
    page: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ page, totalPages, onPageChange }) => {
    const generatePages = () => {
        const pages: (number | string)[] = [];
        const delta = 2; // cuántas páginas mostrar alrededor del actual

        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - delta && i <= page + delta)) {
                pages.push(i);
            } else if (
                i === page - delta - 1 ||
                i === page + delta + 1
            ) {
                pages.push("...");
            }
        }

        return Array.from(new Set(pages));
    };

    return (
        <div className="flex justify-center items-center mt-6 gap-2">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page <= 1}
                className="px-3 py-1 h-8 border border-black disabled:opacity-50"
            >
                <FaArrowLeftLong />
            </button>

            {generatePages().map((p, i) =>
                typeof p === "number" ? (
                    <button
                        key={i}
                        onClick={() => onPageChange(p)}
                        className={`px-3 py-1 h-8 border border border-black ${p === page ? "bg-black text-white" : ""}`}
                    >
                        {p}
                    </button>
                ) : (
                    <span key={i} className="px-2">...</span>
                )
            )}

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page >= totalPages}
                className="px-3 py-1 h-8 border border-black disabled:opacity-50"
            >
                <FaArrowRightLong />
            </button>
        </div>
    );
};
export default Pagination;
