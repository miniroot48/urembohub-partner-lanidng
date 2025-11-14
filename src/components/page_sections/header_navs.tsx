"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CustomLinkBtn from '../UI/custom_cta_button'

export default function HeaderNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex items-center justify-center">

        {/* desktop nav */}
        <ul className="hidden md:flex list-none items-center justify-center space-x-8 textLg">
            <li className="list-item">
                <Link
                    href={`#about`}
                    className="text-[#FFEFF8] hover:text-[#FFEFF8]"
                >
                    About
                </Link>
            </li>
            <li className="list-item">
                <Link
                    href={`#features`}
                    className="text-[#FFEFF8] hover:text-[#FFEFF8]"
                >
                    Features
                </Link>
            </li>
            <li className="list-item">
                <Link
                    href={`#live-shopping`}
                    className="text-[#FFEFF8] hover:text-[#FFEFF8]"
                >
                    Live Shopping
                </Link>
            </li>
            <li className="list-item">
                <Link
                    href={`#contact`}
                    className="text-[#FFEFF8] hover:text-[#FFEFF8]"
                >
                    Contact
                </Link>
            </li>
        </ul> 


        {/* Mobile Nav */}
        <div className="flex md:hidden items-center justify-end">
            {/* button to toggle nav */}
            <button
                type="button"
                onClick={() => setIsNavOpen(true)}
                className="flex cursor-pointer items-center justify-center"
            >
                <span
                    className="rounded-full h-12 w-12 flex items-center justify-center text-[#FFE8F5E5]/90 bg-linear-to-b from-[#9B4B6A] to-[#CD8E97]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </span>
            </button>

            {/* nav */}            
                <div className={`flex flex-col right-0 fixed transition-all duration-400 ${isNavOpen ? `translate-x-0` : `translate-x-full`} top-0 bottom-0 bg-white p-5 items-center justify-start space-x-8 text-lg`}>
                    <div className="flex items-center justify-end pb-5 w-full">
                        <button
                            onClick={() => setIsNavOpen(false)}
                            type='button'
                            className="rounded-full cursor-pointer active:bg-gray-300 text-gray-800 text-lg flex items-center justify-center h-10 w-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col bg-white p-5 items-center justify-center space-x-8 text-lg">
                        <div className="w-full grid grid-cols-1 grid-rows-1 border-b border-b-gray-200 border-dashed">
                            <Link
                                href={`#about`}
                                onClick={()=> setIsNavOpen(false)}
                                className="text-gray-800 hover:text-[#9B4B6A] p-3 w-full"
                            >
                                About
                            </Link>
                        </div>
                        <div className="w-full grid grid-cols-1 grid-rows-1 border-b border-b-gray-200 border-dashed">
                            <Link
                                href={`#features`}
                                onClick={()=> setIsNavOpen(false)}
                                className="text-gray-800 hover:text-[#9B4B6A] p-3 w-full"
                            >
                                Features
                            </Link>
                        </div>
                        <div className="w-full grid grid-cols-1 grid-rows-1 border-b border-b-gray-200 border-dashed">
                            <Link
                                href={`#live-shopping`}
                                onClick={()=> setIsNavOpen(false)}
                                className="text-gray-800 hover:text-[#9B4B6A] p-3 w-full"
                            >
                                Live Shopping
                            </Link>
                        </div>
                        <div className="w-full mb-8 grid grid-cols-1 grid-rows-1 border-b border-b-gray-200 border-dashed">
                            <Link
                                href={`#contact`}
                                onClick={()=> setIsNavOpen(false)}
                                className="text-gray-800 hover:text-[#9B4B6A] p-3 w-full"
                            >
                                Contact
                            </Link>
                        </div>

                        <CustomLinkBtn
                            href={`/signup`}
                        >
                            Signup Today
                        </CustomLinkBtn>
                    </div>
                </div>
        </div>
    </div>
  )
}
