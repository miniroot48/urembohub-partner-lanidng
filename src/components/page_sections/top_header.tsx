import React from 'react'
import HeaderNav from './header_navs'
import CustomLinkBtn from '../UI/custom_cta_button'

export default function TopHeader() {
  return (
    <div className="px-20 py-3 flex items-center justify-between bg-[#9B4B6A] sticky top-0 z-20">
        <div className="logo">
            <img src="/header-logo.png" alt="" className="h-[60px]" />
        </div>

        {/* link navigation */}
        <HeaderNav />

        <div className="flex items-center justify-center">
            <CustomLinkBtn
                href='/signup'
                variant='light'
                id='anything'
            >
                Get Started
            </CustomLinkBtn>
        </div>
    </div>
  )
}
