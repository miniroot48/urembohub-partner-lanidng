import SignUpForm from '@/components/page_sections/signup/signup_form'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div className="bg-no-repeat relative bg-cover bg-top-right min-h-screen overflow-hidden w-full flex flex-col-reverse md:grid md:grid-cols-1 md:grid-cols-2 px-5 md:px-10 lg:px-20 py-5 md:py-10 relative" style={{backgroundImage: "url('/images/signup-bg.png')"}}>
        
        <Link
            href={'/'}
            className='absolute z-1 flex items-center justify-center gap-2 top-10 max-sm:right-10 md:left-10 bg-white rounded-lg px-5 py-3 hover:bg-white/60 text-[#9B4B6A] shadow '
        >
           <svg width="18" height="18" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.1399 18.4328C13.3399 18.6214 13.5003 18.8488 13.6115 19.1015C13.7228 19.3542 13.7826 19.627 13.7875 19.9036C13.7923 20.1802 13.742 20.455 13.6396 20.7115C13.5372 20.968 13.3848 21.201 13.1915 21.3966C12.9982 21.5922 12.768 21.7465 12.5145 21.8501C12.261 21.9537 11.9895 22.0046 11.7162 21.9997C11.4428 21.9948 11.1733 21.9343 10.9235 21.8217C10.6738 21.7091 10.4491 21.5467 10.2627 21.3443L1.44133 12.4174L0 10.9616L1.43865 9.50587L10.26 0.578965C10.6438 0.203522 11.1579 -0.0043677 11.6917 6.96005e-05C12.2254 0.0045069 12.7361 0.220917 13.1137 0.60269C13.4913 0.984463 13.7057 1.50105 13.7106 2.04119C13.7155 2.58133 13.5105 3.10181 13.1399 3.49051L7.79271 8.90159H35.9643C36.5042 8.90159 37.022 9.11863 37.4038 9.50497C37.7855 9.8913 38 10.4153 38 10.9616C38 11.508 37.7855 12.032 37.4038 12.4183C37.022 12.8047 36.5042 13.0217 35.9643 13.0217H7.79271L13.1399 18.4328Z" fill="#9B4B6A"/>
            </svg>
            Back
        </Link>

        <div className="flex items-end justify-center p-10">
            <Link
                href={'#'}
                className='flex flex-col gap-1 bg-white px-10 py-5 rounded-full'
            >
                <span className="text-black text-xl md:text-2xl">Already A Paterner?</span>
                <span className="text-[#9B4B6A] font-semibold text-2xl md:text-3xl flex items-center justify-start gap-5">
                    Sign In
                    <svg width="38" height="22" viewBox="0 0 38 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M24.8601 18.4328C24.6601 18.6214 24.4997 18.8488 24.3885 19.1015C24.2772 19.3542 24.2174 19.627 24.2125 19.9036C24.2077 20.1802 24.258 20.455 24.3604 20.7115C24.4628 20.968 24.6152 21.201 24.8085 21.3966C25.0018 21.5922 25.232 21.7465 25.4855 21.8501C25.739 21.9537 26.0105 22.0046 26.2838 21.9997C26.5572 21.9948 26.8267 21.9343 27.0765 21.8217C27.3262 21.7091 27.5509 21.5467 27.7373 21.3443L36.5587 12.4174L38 10.9616L36.5614 9.50587L27.74 0.578965C27.3562 0.203522 26.8421 -0.0043677 26.3083 6.96005e-05C25.7746 0.0045069 25.2639 0.220917 24.8863 0.60269C24.5087 0.984463 24.2943 1.50105 24.2894 2.04119C24.2845 2.58133 24.4895 3.10181 24.8601 3.49051L30.2073 8.90159H2.03571C1.49581 8.90159 0.978017 9.11863 0.596247 9.50497C0.214476 9.8913 0 10.4153 0 10.9616C0 11.508 0.214476 12.032 0.596247 12.4183C0.978017 12.8047 1.49581 13.0217 2.03571 13.0217H30.2073L24.8601 18.4328Z" fill="#9B4B6A"/>
                    </svg>

                </span>
            </Link>
        </div>

        <SignUpForm />
    </div>
  )
}
