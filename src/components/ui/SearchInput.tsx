import type { SearchInputProps } from '@/types/SearchInput'
import React from 'react'

export const SearchInput: React.FC<SearchInputProps> = ({
    onChange,
    placeholder = "SEARCH",
    className
}) => {
    return (
        <input
            type="text"
            placeholder={placeholder}
            onChange={(e) => onChange?.(e.target.value)}
            className={`${className}`}
        />
    )
}
