import Link from 'next/link'
import React from 'react'

type ButtonProps = {
    type?: "button" | "submit" | "reset",
    id?: string,
    variant?: "light" | "dark",
    onClick?: () => void,
    children: React.ReactNode,
    href?: string
}
export default function CustomLinkBtn({
    type="button",
    id,
    variant="dark",
    onClick,
    children,
    href
}: ButtonProps) {
  if(href){
    return(
        <Link
            id={id}
            href={href}
            className={`bg-gradient-to-r ${
                variant === "dark" 
                ? "from-[#9B4B6A] to-[#B46A89]" 
                : "from-[#CD8E97] to-[#B46A89]"
            } px-8 h-[60px] rounded-full flex items-center text-lg justify-center text-[#FFEFF8] font-semibold hover:opacity-80 duration-400`}
        >
            {children}
        </Link>
    )
  }else{
    return (
        <button
            id={id}
            type={type}
            onClick={onClick}
            className={`bg-gradient-to-r ${
                variant === "dark" 
                ? "from-[#9B4B6A] to-[#B46A89]" 
                : "from-[#CD8E97] to-[#B46A89]"
            } px-6 py-3 rounded-full text-[#FFEFF8] font-semibold cursor-pointer`}
        >
            {children}
        </button>
    )
  }
}
