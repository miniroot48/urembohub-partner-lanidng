import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className="p-16 bg-[#111827] text-white">
        <div className="flex items-start justify-start gap-8 py-8">
            {/* section 1 */}

            <div className="flex flex-col gap-5 flex-2/5">
                <div className="img">
                    <img src="/header-logo.png" alt="" className="h-[84px]" />
                </div>
                <p className="text-lg">
                    Empowering African beauty entrepreneurs through innovative technology and community support.
                </p>

                {/* social media */}
                <div className="flex items-center justify-start gap-5">
                    <Link
                        href={'https://facebook.com/'}
                        className='h-8 w-8 bg-gradient-to-b from-[#9B4B6A] to-[#CD8E97] rounded-full flex items-center justify-center hover:from-[#CD8E97] hover:to-[#9B4B6A] text-white duration-500'
                    >
                        <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.03986 0.75H6.77899C5.77962 0.75 4.82118 1.147 4.11453 1.85366C3.40787 2.56031 3.01087 3.51875 3.01087 4.51812V6.77899H0.75V9.79348H3.01087V15.8225H6.02536V9.79348H8.28623L9.03986 6.77899H6.02536V4.51812C6.02536 4.31824 6.10476 4.12656 6.24609 3.98522C6.38743 3.84389 6.57911 3.76449 6.77899 3.76449H9.03986V0.75Z" stroke="#FFE8F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                    <Link
                        href={'https://facebook.com/'}
                        className='h-8 w-8 bg-gradient-to-b from-[#9B4B6A] to-[#CD8E97] rounded-full flex items-center justify-center hover:from-[#CD8E97] hover:to-[#9B4B6A] text-white duration-500'
                    >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.53699 5.27536C6.93737 5.27536 6.3623 5.51356 5.93831 5.93756C5.51431 6.36155 5.27612 6.93661 5.27612 7.53623C5.27612 8.13585 5.51431 8.71091 5.93831 9.13491C6.3623 9.5589 6.93737 9.7971 7.53699 9.7971C8.13661 9.7971 8.71167 9.5589 9.13566 9.13491C9.55966 8.71091 9.79786 8.13585 9.79786 7.53623C9.79786 6.93661 9.55966 6.36155 9.13566 5.93756C8.71167 5.51356 8.13661 5.27536 7.53699 5.27536ZM7.53699 3.76812C8.53635 3.76812 9.49479 4.16511 10.2014 4.87177C10.9081 5.57843 11.3051 6.53687 11.3051 7.53623C11.3051 8.5356 10.9081 9.49403 10.2014 10.2007C9.49479 10.9074 8.53635 11.3043 7.53699 11.3043C6.53762 11.3043 5.57918 10.9074 4.87253 10.2007C4.16587 9.49403 3.76887 8.5356 3.76887 7.53623C3.76887 6.53687 4.16587 5.57843 4.87253 4.87177C5.57918 4.16511 6.53762 3.76812 7.53699 3.76812ZM12.4355 3.57971C12.4355 3.82955 12.3363 4.06916 12.1596 4.24583C11.983 4.42249 11.7433 4.52174 11.4935 4.52174C11.2437 4.52174 11.0041 4.42249 10.8274 4.24583C10.6507 4.06916 10.5515 3.82955 10.5515 3.57971C10.5515 3.32987 10.6507 3.09026 10.8274 2.91359C11.0041 2.73693 11.2437 2.63768 11.4935 2.63768C11.7433 2.63768 11.983 2.73693 12.1596 2.91359C12.3363 3.09026 12.4355 3.32987 12.4355 3.57971ZM7.53699 1.50725C5.67252 1.50725 5.36806 1.51252 4.50064 1.55096C3.9098 1.57884 3.51339 1.65797 3.14562 1.80116C2.83802 1.91448 2.55985 2.09555 2.33171 2.33096C2.09603 2.55902 1.9147 2.83719 1.80116 3.14487C1.65797 3.51414 1.57884 3.9098 1.55171 4.49988C1.51252 5.33188 1.50725 5.62278 1.50725 7.53623C1.50725 9.40145 1.51252 9.70516 1.55096 10.5726C1.57884 11.1627 1.65797 11.5598 1.80041 11.9268C1.92852 12.2547 2.07925 12.4906 2.32945 12.7408C2.58342 12.994 2.8193 13.1454 3.14336 13.2705C3.51565 13.4145 3.91206 13.4944 4.49988 13.5215C5.33188 13.5607 5.62278 13.5652 7.53623 13.5652C9.40145 13.5652 9.70516 13.5599 10.5726 13.5215C11.1619 13.4936 11.5583 13.4145 11.9268 13.2721C12.2344 13.1587 12.5126 12.9777 12.7408 12.7423C12.9947 12.489 13.1462 12.2532 13.2713 11.9283C13.4145 11.5576 13.4944 11.1612 13.5215 10.5718C13.5607 9.74058 13.5652 9.44893 13.5652 7.53623C13.5652 5.67177 13.5599 5.3673 13.5215 4.49988C13.4936 3.91055 13.4137 3.51264 13.2713 3.14487C13.158 2.83727 12.9769 2.55909 12.7415 2.33096C12.5134 2.09528 12.2353 1.91395 11.9276 1.80041C11.5583 1.65722 11.1619 1.57809 10.5726 1.55096C9.74133 1.51177 9.45043 1.50725 7.53623 1.50725M7.53623 0C9.58383 0 9.8393 0.00753619 10.6434 0.0452173C11.4453 0.0828985 11.9924 0.208754 12.4725 0.395652C12.9699 0.587073 13.3889 0.846319 13.8079 1.26458C14.1912 1.64119 14.4878 2.09694 14.6768 2.6C14.863 3.08006 14.9896 3.62719 15.0272 4.4298C15.0627 5.23316 15.0725 5.48864 15.0725 7.53623C15.0725 9.58383 15.0649 9.8393 15.0272 10.6427C14.9896 11.446 14.863 11.9917 14.6768 12.4725C14.4878 12.9755 14.1912 13.4313 13.8079 13.8079C13.4313 14.1912 12.9755 14.4878 12.4725 14.6768C11.9924 14.863 11.4453 14.9896 10.6434 15.0272C9.8393 15.0627 9.58383 15.0725 7.53623 15.0725C5.48864 15.0725 5.23316 15.0649 4.42904 15.0272C3.62719 14.9896 3.08081 14.863 2.6 14.6768C2.09694 14.4878 1.64119 14.1912 1.26458 13.8079C0.881216 13.4313 0.584673 12.9755 0.395652 12.4725C0.208754 11.9924 0.0828985 11.4453 0.0452173 10.6427C0.00904343 9.8393 0 9.58383 0 7.53623C0 5.48864 0.00753619 5.23316 0.0452173 4.4298C0.0828985 3.62643 0.208754 3.08081 0.395652 2.6C0.584673 2.09694 0.881216 1.64119 1.26458 1.26458C1.64119 0.881216 2.09694 0.584673 2.6 0.395652C3.08006 0.208754 3.62643 0.0828985 4.42904 0.0452173C5.23391 0.00979706 5.48939 0 7.53699 0" fill="#FFE8F5" fillOpacity="0.9"/>
                        </svg>
                    </Link>
                    <Link
                        href={'https://facebook.com/'}
                        className='h-8 w-8 bg-gradient-to-b from-[#9B4B6A] to-[#CD8E97] rounded-full flex items-center justify-center hover:from-[#CD8E97] hover:to-[#9B4B6A] text-white duration-500'
                    >
                        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.37507 2.12522C8.86003 1.53703 8.57615 0.781808 8.57623 0H6.24754V9.34493C6.22995 9.85075 6.01657 10.33 5.65241 10.6815C5.28824 11.033 4.80178 11.2293 4.29565 11.229C3.22551 11.229 2.33623 10.3548 2.33623 9.26957C2.33623 7.97333 3.58725 7.00116 4.87594 7.40058V5.01913C2.27594 4.67246 0 6.69217 0 9.26957C0 11.7791 2.08 13.5652 4.28812 13.5652C6.65449 13.5652 8.57623 11.6435 8.57623 9.26957V4.52928C9.52052 5.20742 10.6542 5.57127 11.8168 5.56928V3.24058C11.8168 3.24058 10.4 3.30841 9.37507 2.12522Z" fill="#FFE8F5"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* section 2 */}

            <div className="grid grid-cols-3 gap-5 flex-3/5">
                {/* links 1 */}
                <div className="flex flex-col gap-7">
                    <h2 className="text-[#CD8E97] text-xl font-semibold">
                        Platform
                    </h2>
                    <ul className="list-none flex flex-col gap-3 items-start justify-start text-lg">
                        <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Features
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Pricing
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Analytics
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Live Shopping
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* links 2 */}
                <div className="flex flex-col gap-7">
                    <h2 className="text-[#CD8E97] text-xl font-semibold">
                        Support
                    </h2>
                    <ul className="list-none flex flex-col gap-3 items-start justify-start text-lg">
                        <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Community
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Help Center
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'#'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                FAQ's
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* links 3 */}
                <div className="flex flex-col gap-7" id='#contact'>
                    <h2 className="text-[#CD8E97] text-xl font-semibold">
                        Contact Us
                    </h2>
                    <ul className="list-none flex flex-col gap-3 items-start justify-start text-lg">
                        <li className="list-item">
                            <Link
                                href={`https:google.com/search?q=Westlands+Nairobi+Kenya`}
                                target='_blank'
                                className='text-white hover:text-[#CD8E97]'
                            >
                                Westlands, Nairobi, Kenya
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'mailto:info@urembohub.co.ke'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                info@urembohub.co.ke
                            </Link>
                        </li>
                         <li className="list-item">
                            <Link
                                href={'tel:+254720123456'}
                                className='text-white hover:text-[#CD8E97]'
                            >
                                +254 720 123 456
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        {/* copyright div */}

        <div className="border-t border-[#CD8E97] pt-5 flex items-center justify-between gap-5">
            <p className="">
                © 2024 UremboHub. All rights reserved.
            </p>

            <div className="flex items-center justify-center gap-3">
                <Link
                    href={'#'}
                    className='text-white underline hover:text-[#CD8E97]'
                >
                    Privacy Policy
                </Link>
                <Link
                    href={'#'}
                    className='text-white underline hover:text-[#CD8E97]'
                >
                    Terms Of Services
                </Link>
                <Link
                    href={'#'}
                    className='text-white underline hover:text-[#CD8E97]'
                >
                    Cookie Policy
                </Link>
            </div>
        </div>
    </div>
  )
}
