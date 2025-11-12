import React from 'react'
type SpanProps = {
    children: React.ReactNode,    
}
export default function CircledSpan({children}:SpanProps) {
  return (
    <div
        className="rounded-full h-[66px] w-[66px] flex items-center justify-center text-[#FFE8F5E5]/90 bg-gradient-to-b from-[#9B4B6A] to-[#CD8E97]"
    >
        {children}
    </div>
  )
}
