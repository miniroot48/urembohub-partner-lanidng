"use client"
import CircledSpan from '@/components/UI/circled-span'
import CustomLinkBtn from '@/components/UI/custom_cta_button';
import React, { useState } from 'react'
type PaternerType = {
    title: string,
    description: string,
    icon: React.ReactNode,
    benefits: string[],
}
export default function PaternWithUs() {

    const paterners: PaternerType[] = [
        {
            title: "Retailers",
            icon:<svg width="30" height="33" viewBox="0 0 30 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.2486 11.5413C8.96094 10.9569 9.95387 10.988 10.6496 11.5919C11.6743 12.4807 13.3688 14.0204 15.7567 16.4083C18.144 18.7949 19.6836 20.4907 20.5732 21.514C21.177 22.2105 21.2074 23.2034 20.6238 23.9157C19.9115 24.7836 18.7464 26.1113 16.9775 27.8803C16.0724 28.7902 15.1402 29.6729 14.1824 30.5271C12.8032 31.7493 10.8268 31.6944 9.46355 30.4548C8.11436 29.221 6.79442 27.9555 5.50482 26.6595C4.20906 25.3699 2.94385 24.05 1.71025 22.7008C0.469983 21.3369 0.415744 19.3611 1.63793 17.9827C2.49215 17.0246 3.37483 16.0922 4.2848 15.1869C6.05372 13.4179 7.38005 12.2529 8.2486 11.5413Z" stroke="#FFE8F5" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M20.4502 21.3744C21.6668 20.2217 22.8685 19.0537 24.0553 17.8705C26.1779 15.7487 27.3871 14.4021 28.0488 13.6145C28.5463 13.023 28.8096 12.2774 28.7387 11.5079C28.4133 7.96427 26.2162 4.00843 24.1978 1.45341C23.5035 0.574008 22.2416 0.523385 21.4106 1.2755C20.0358 2.51938 17.6869 4.71137 14.2916 8.10674C13.1057 9.29144 11.9312 10.4874 10.7682 11.6945M12.8611 26.2045C14.026 25.0913 15.1546 23.9406 16.2449 22.7542" stroke="#FFE8F5" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M14.2923 8.10815C14.2923 8.10815 16.4893 9.81633 19.4183 12.746C22.3472 15.6749 24.0561 17.8719 24.0561 17.8719" stroke="#FFE8F5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                ,
            description: "Sell tangible beauty products with ease. As a retailer, you can upload and showcase physical products such as cosmetics, skincare, and wellness items directly on Urembo Hub. Manage inventory, pricing, and fulfillment from a single dashboard. Our platform connects you with verified manufacturers and vendors, ensuring you get genuine products and seamless restocking option.",
            benefits:[
                "Upload and sell tangible products only",
                "Access verified suppliers and manufacturers",
                "Real-time inventory and stock management",
                "Integrated Paystack payments with T+2 payouts",
                "Automated shipping through trusted logistics partners"
            ]
        },
        {
            title: "Vendors",
            icon:<svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.187 15.1195C14.4957 14.477 17.7692 13.6633 20.9946 12.6818V2.81818C20.9946 2.81818 11.8875 0 7.68429 0C5.81314 0.00529702 4.00782 0.695131 2.60525 1.94077C1.20268 3.1864 0.298673 4.90273 0.06194 6.76946C-0.174793 8.6362 0.27192 10.5258 1.31871 12.0856C2.36551 13.6454 3.94086 14.7689 5.75079 15.2464L6.98375 23.9545H8.38483C8.44086 24.6262 8.65576 25.2746 9.01159 25.8457C9.36743 26.4168 9.8539 26.8941 10.4304 27.2377C11.0804 27.6264 11.6202 28.1765 11.9981 28.8353C12.3759 29.4941 12.5791 30.2395 12.5881 31H13.9892C13.9828 30.0293 13.7345 29.0757 13.267 28.2264C12.7995 27.3771 12.1277 26.6593 11.3131 26.1386C10.3323 25.3636 9.78591 24.8423 9.78591 23.9545H11.187M2.7805 7.75C2.7805 6.442 3.29714 5.18757 4.21678 4.26268C5.13642 3.33778 6.38372 2.81818 7.68429 2.81818C11.2502 3.15575 14.7717 3.86408 18.1924 4.93182V10.5682C14.7717 11.6359 11.2502 12.3442 7.68429 12.6818C6.38372 12.6818 5.13642 12.1622 4.21678 11.2373C3.29714 10.3124 2.7805 9.058 2.7805 7.75ZM28 9.86364C26.9126 9.89243 25.8378 9.62462 24.8896 9.08864C24.1318 8.65126 23.2691 8.4319 22.3957 8.45455V7.04545C23.483 7.01666 24.5578 7.28447 25.5061 7.82045C26.2638 8.25783 27.1266 8.47719 28 8.45455M28 5.63636C27.1266 5.65901 26.2638 5.43964 25.5061 5.00227C24.5578 4.46628 23.483 4.19848 22.3957 4.22727V5.63636C23.2691 5.61372 24.1318 5.83308 24.8896 6.27045C25.8378 6.80644 26.9126 7.07425 28 7.04545M28 11.2727C27.1266 11.2954 26.2638 11.076 25.5061 10.6386C24.5578 10.1026 23.483 9.83484 22.3957 9.86364V11.2727C23.2691 11.2501 24.1318 11.4694 24.8896 11.9068C25.8378 12.4428 26.9126 12.7106 28 12.6818M9.78591 7.75C9.78591 8.16804 9.66265 8.57669 9.43173 8.92427C9.2008 9.27186 8.87257 9.54277 8.48854 9.70275C8.10452 9.86272 7.68196 9.90458 7.27428 9.82302C6.86661 9.74147 6.49213 9.54016 6.19821 9.24457C5.9043 8.94897 5.70414 8.57236 5.62304 8.16235C5.54195 7.75234 5.58357 7.32736 5.74264 6.94115C5.90171 6.55493 6.17108 6.22482 6.51669 5.99258C6.8623 5.76033 7.26863 5.63636 7.68429 5.63636C8.24167 5.63636 8.77623 5.85905 9.17036 6.25543C9.56449 6.65182 9.78591 7.18943 9.78591 7.75Z" fill="white"/>
                </svg>,
            description: "Offer your beauty services to a wider audience and grow your client base through UremboHub. As a vendor, you can list and promote your services, from hairstyling and makeup to spa treatments, massages, nail artistry, and grooming. Customers can book appointments directly, pay securely online, and even review your work, helping you build credibility and repeat business. UremboHub gives you the tools to focus on what you do best, creating beauty, while we handle the visibility and bookings.",
            benefits:[
                "List and promote your beauty services to thousands of customers.",
                "Get direct online bookings and secure payments via Paystack.",
                "Manage your appointments, availability, and customer reviews in one dashboard.",
                "Build a strong digital presence with your portfolio and ratings."
            ]

        },
        {
            title: "Manufacturers",
            icon:<svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M31.0016 8.04587L16.9216 0.238653C16.639 0.0820697 16.3221 0 16 0C15.6779 0 15.361 0.0820697 15.0784 0.238653L0.9984 8.04587C0.696351 8.21324 0.4443 8.4598 0.268648 8.75971C0.0929963 9.05962 0.000207245 9.40185 0 9.75055V25.2483C0.000207245 25.597 0.0929963 25.9392 0.268648 26.2392C0.4443 26.5391 0.696351 26.7856 0.9984 26.953L15.0784 34.7602C15.3607 34.9175 15.6778 35 16 35C16.3222 35 16.6393 34.9175 16.9216 34.7602L31.0016 26.953C31.3036 26.7856 31.5557 26.5391 31.7314 26.2392C31.907 25.9392 31.9998 25.597 32 25.2483V9.75055C31.9998 9.40185 31.907 9.05962 31.7314 8.75971C31.5557 8.4598 31.3036 8.21324 31.0016 8.04587ZM15.6928 1.37619C15.7867 1.32312 15.8925 1.29526 16 1.29526C16.1075 1.29526 16.2133 1.32312 16.3072 1.37619L30.1872 9.07322L24.08 12.4583C24.051 12.434 24.02 12.4123 23.9872 12.3935L9.9072 4.58626L15.6928 1.37619ZM16 16.9323L1.8128 9.07322L8.5696 5.32517L22.7568 13.1907L16 16.9323ZM1.6128 25.8122C1.51228 25.7565 1.42836 25.6745 1.36982 25.5747C1.31128 25.475 1.28026 25.3611 1.28 25.2451V10.2545L15.36 18.0585V33.4379L1.6128 25.8122ZM30.3872 25.8122L16.64 33.4282V18.0585L23.04 14.5114V21.3885C23.04 21.5604 23.1074 21.7252 23.2275 21.8468C23.3475 21.9683 23.5103 22.0366 23.68 22.0366C23.8497 22.0366 24.0125 21.9683 24.1325 21.8468C24.2526 21.7252 24.32 21.5604 24.32 21.3885V13.8016L30.72 10.2545V25.2483C30.7197 25.3644 30.6887 25.4782 30.6302 25.578C30.5716 25.6777 30.4877 25.7598 30.3872 25.8155V25.8122Z" fill="white"/>
                </svg>,
            description: "Showcase your beauty and wellness products to a network of active retailers and service vendors. As a manufacturer, UremboHub helps you expand your market reach, manage partnerships, and ensure your products are easily discoverable within Africa’s growing beauty industry. Gain access to verified partners, transparent transactions, and actionable data to scale your operations efficiently.",
            benefits:[
                "Display your full range of manufactured beauty products",
                "Connect directly with verified retailers.",
                "Strengthen your brand visibility across the UremboHub marketplace.",
                "Get analytics on orders, engagement, and product performance."
            ]

        }
    ];

    const [activeSection, setActiveSection] = useState(0);
  return (
    <div id='about' className="flex items-center justify-center flex-col gap-5 py-20 px-5 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-black leading-none text-[44px] md:text-[54px] lg:text-[64px] font-semibold flex items-center flex-wrap gap-2">
            Patern With
            <span className="text-[#9B4B6A]">
                Urembo Hub
            </span>
        </h2>
        <p className="texl-lg sm:text-xl w-full lg:max-w-4xl md:text-center">
            Join Africa’s leading beauty and lifestyle ecosystem where Retailers, Vendors, and Manufacturers come together to sell, supply, and grow. Urembo Hub empowers businesses across the beauty value chain with the tools, visibility, and reach they need to scale digitally.
        </p>

        {/* section with drops */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pt-10">
            <div className="lg:h-full rounded-[50px] md:flex-2/5">
                <img
                    src="/images/patern-with-us-img.jpg"
                    alt=""
                    className="h-[476px] md:h-[776px] object-cover rounded-[50px]"
                    loading={"lazy"}
                />
            </div>

            <div className="contantents flex flex-col gap-5 items-start justify-start flex-3/5">
                {paterners.map((paterner, idx) =>(
                    <div key={idx} className={`p-0 md:p-3 flex ${activeSection == idx ? `items-start` : `items-center`} justify-start gap-5 w-full`}>
                        <div className="flex">
                            <CircledSpan>
                                {paterner.icon}
                            </CircledSpan>
                        </div>
                        <div className="paterner-descs flex-1">
                            <div
                                onClick={() => {
                                    if(idx === activeSection){
                                        setActiveSection(-1)
                                    }else{
                                        setActiveSection(idx)
                                    }
                                }}
                                className="head flex items-center justify-between gap-5 w-full cursor-pointer"
                            >
                                <h2 className="text-lg font-semibold">
                                    For {paterner.title}
                                </h2>
                                <button type="button" className={`flex h-8 w-8 flex items-center justify-center transform transition-transform duration-300 ${activeSection == idx ? `rotate-0`:`rotate-180`}`}>
                                    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.7667 11.8899L3.43323e-05 10.1216L9.62837 0.489917C9.78265 0.33466 9.96611 0.211445 10.1682 0.127365C10.3703 0.0432855 10.587 0 10.8059 0C11.0247 0 11.2415 0.0432855 11.4435 0.127365C11.6456 0.211445 11.8291 0.33466 11.9834 0.489917L21.6167 10.1216L19.85 11.8883L10.8084 2.84825L1.7667 11.8899Z" fill="#9B4B6A"/>
                                    </svg>
                                </button>
                            </div>
                            <div className={`about-paterners overflow-hidden transition-all duration-500 ease-in-out ${activeSection == idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <p className="text-lg pt-5">
                                    {paterner.description}
                                </p>
                                <div className="flex flex-col gap-2 text-lg py-5 gap-5">
                                    <span className="text-lg font-semibold">Key Benefits</span>
                                    <ul className="list-disc flex flex-col gap-4 ml-7">
                                        {paterner.benefits.map((point, id) => (
                                            <li key={id} className="list-item m-0 text-black">
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex">
                                    <CustomLinkBtn
                                        href='/signup'
                                    >
                                        Become A {paterner.title.substring(0, paterner.title.length-1)}
                                    </CustomLinkBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
