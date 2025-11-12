import Link from 'next/link'
import React from 'react'

export default function CTASection() {
  return (
    <div className="flex flex-col-reverse md:grid grid-cols-1 md:grid-cols-2 gap-7 bg-[#984967]">
        <div className="img h-[500px] md:h-[664px]">
            <img
                src="/images/cta-section.png"
                alt="" className="object-cover transform -rotate-y-180 -w-200 w-full h-full"
            />
        </div>
        <div className="flex items-start justify-center flex-col gap-5 py-16 max-sm:pb-0 md:py-20 px-6 md:px-12 lg:px-20 text-white">
             <h2 className="text-[40px] leading-tight font-semibold gap-2">
                Ready to Transform Your Beauty Business?
            </h2>
            <p className="text-xl max-w-4xl">
                Engage directly with customers through live shopping sessions, showcase products in real-time, and build authentic connections that drive sales.
            </p>
            <div className="pt-6">
                <Link
                    href={'/signup'}
                    className='border-2 border-white/60 hover:border-white/80 text-white text-lg font-semibold px-10 py-4 rounded-full'
                >
                    Register Now
                </Link>
            </div>
        </div>
    </div>
  )
}
