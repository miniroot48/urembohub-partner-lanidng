import CircledSpan from '@/components/UI/circled-span'
import CustomLinkBtn from '@/components/UI/custom_cta_button'
import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
  return (
    <div className="bg-gradient-to-b from-[#FFFFFF] to-[#FFE8F5] min-h-screen w-full p-20">
        <div className="grid grid-cols-2 grid-rows-1 gap-0 space-x-10">
            <div className="content p-10 flex flex-col items-start justify-center gap-8">
                <h2 className="text-black font-semibold text-[64px] flex flex-col leading-none">
                    Empowering
                    <b className="text-[#9B4B6A]">African Beauty</b>
                    Entrepreneurs
                </h2>
                <p className="text-black text-[24px]">
                    Join Kenya's leading beauty-tech platform and transform your salon, spa, or beauty business into a digital powerhouse.
                </p>

                <div className="">
                    <CustomLinkBtn
                        href='/signup'
                    >
                        Start Your Journey
                    </CustomLinkBtn>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <h5 className="text-black text-lg">
                            5,000+
                        </h5>
                        <p className="text-gray-600">
                            Active Entrepreneurs
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <h5 className="text-black text-lg">
                            5,000+
                        </h5>
                        <p className="text-gray-600">
                            Bookings Monthly
                        </p>
                    </div>
                </div>
            </div>

            {/* image section */}
            <div className="flex items-center justify-center relative">
                <div className="rounded-[50px] w-full">
                    <img
                        src={`/images/hero-image.png`}
                        height={614}
                        width={582}
                        loading='lazy'
                        className='object-cover w-full rounded-[50px]'
                    />
                </div>
                <div className="absolute -bottom-10 -left-10 z-1">
                    <div className="rounded-2xl bg-white shadow-xl shadow-[#9B4B6A4D]/30 p-5 flex items-center gap-5 justify-center">
                        <div className="flex">
                            <CircledSpan>
                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 13.2369H32M1 13.2369V30.3684C1 30.8012 1.1719 31.2162 1.47788 31.5221C1.78386 31.8281 2.19886 32 2.63158 32H30.3684C30.8011 32 31.2161 31.8281 31.5221 31.5221C31.8281 31.2162 32 30.8012 32 30.3684V13.2369M1 13.2369V5.07897C1 4.64624 1.1719 4.23125 1.47788 3.92527C1.78386 3.61929 2.19886 3.44739 2.63158 3.44739H30.3684C30.8011 3.44739 31.2161 3.61929 31.5221 3.92527C31.8281 4.23125 32 4.64624 32 5.07897V13.2369" stroke="#FFE8F5" strokeOpacity="0.9" strokeWidth="2" strokeLinejoin="round"/>
                                    <path d="M9.97368 1V7.52632M23.0263 1V7.52632M19.7632 25.4737H24.6579M8.3421 25.4737H13.2368M19.7632 18.9474H24.6579M8.3421 18.9474H13.2368" stroke="#FFE8F5" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </CircledSpan>
                        </div>
                        <div className="content flex flex-col">
                            <span className="text-black text-lg">
                                Today’s Booking
                            </span>
                            <span className="text-[#9B4B6A]">
                                24 Appointments
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
