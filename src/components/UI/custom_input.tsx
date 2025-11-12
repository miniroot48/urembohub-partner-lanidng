import React from 'react'

type InputProps ={
    name: string,
    type: string,
    id?: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string | number,
    placeholder?: string,
    label:string
}
export default function CustomInput({
    type,
    name,
    id,
    value,
    onChange,
    placeholder,
    label
}:InputProps) {
  return (
    <div className="flex items-start justify-start flex-col gap-2 w-full">
        <label htmlFor={id} className='text-lg'>
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            name={name}
            placeholder={placeholder}
            className="rounded-full w-full border-2 border-[#9B4B6A] focus:outline-0 focus:ring-3 focus:ring-[#9B4B6A]/30 bg-transparent px-6 py-3 text-lg"
        />
    </div>
  )
}
