import React from 'react'
type SpanProps = {
    children: React.ReactNode,    
}
export default function CircledSpan({children}:SpanProps) {
  return (
    <div
        className="rounded-full h-[46px] w-[46px] sm:h-[66px] sm:w-[66px] flex items-center justify-center text-[#FFE8F5E5]/90 bg-linear-to-b from-[#9B4B6A] to-[#CD8E97]"
    >
        {children}
    </div>
  )
}
