import React, { useState, useRef, useEffect } from 'react'

type InputProps = {
    name: string,
    id?: string,
    onChange: (value: string | number) => void,
    value: string | number,
    options: string[] | number[],
    placeholder?: string,
    label: string
}

export default function CustomSelect({
    options,
    name,
    id,
    value,
    onChange,
    placeholder,
    label
}: InputProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Filter options based on search
    const filteredOptions = options.filter(option =>
        option.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
                setSearchTerm('')
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleSelect = (option: string | number) => {
        onChange(option)
        setIsOpen(false)
        setSearchTerm('')
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
        setIsOpen(true)
    }

    const displayValue = value || searchTerm

    return (
        <div className="flex items-start justify-start flex-col gap-2 w-full">
            <label htmlFor={id} className='text-lg'>
                {label}
            </label>
            <div className="relative w-full" ref={dropdownRef}>
                <input
                    type="text"
                    id={id}
                    value={isOpen ? searchTerm : displayValue}
                    onChange={handleInputChange}
                    onFocus={() => setIsOpen(true)}
                    name={name}
                    placeholder={placeholder}
                    className="rounded-full w-full border-2 border-[#9B4B6A] focus:outline-0 focus:ring-3 focus:ring-[#9B4B6A]/30 bg-transparent px-6 py-3 text-lg"
                />

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="dropdown absolute right-6 top-9 -translate-y-1/2 transition-transform"
                    style={{ transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)' }}
                >
                    <svg width="20" height="20" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.85 -2.47955e-05L21.6167 1.76831L11.9883 11.4C11.8341 11.5552 11.6506 11.6784 11.4485 11.7625C11.2464 11.8466 11.0297 11.8899 10.8108 11.8899C10.592 11.8899 10.3752 11.8466 10.1732 11.7625C9.97107 11.6784 9.78761 11.5552 9.63333 11.4L0 1.76831L1.76667 0.00164127L10.8083 9.04164L19.85 -2.47955e-05Z" fill="#9B4B6A"/>
                    </svg>
                </button>

                {isOpen && (
                    <div className="absolute bottom-full mt-2 w-full bg-white shadow-lg rounded-xl p-2 max-h-60 overflow-y-auto z-10 border border-gray-100">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSelect(option)}
                                    className="rounded-md w-full hover:bg-gray-100 cursor-pointer text-black flex items-center justify-start gap-2 px-3 py-2 text-left"
                                >
                                    {option == value && (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#9B4B6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    )}
                                    <span>{option}</span>
                                </button>
                            ))
                        ) : (
                            <div className="px-3 py-2 text-gray-500 text-center">
                                No options found
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}