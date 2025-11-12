import Link from 'next/link'
import React from 'react'

export default function HeaderNav() {
  return (
    <div className="flex items-center justify-center">

        {/* desktop nav */}
        <ul className="list-none flex items-center justify-center space-x-8 text-lg">
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
    </div>
  )
}
