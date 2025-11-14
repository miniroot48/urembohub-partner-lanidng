import React from 'react'

type SolnProps ={
    image: string,
    title: string,
    desc: string
}
export default function Solutions() {
    const solutions: SolnProps[] = [
        {
            image: "/images/relation-tool.jpg",
            title: "Client Relation Tool",
            desc: "Build lasting relationships with personalized service tracking and communication."
        },
        {
            image: "/images/smart-management.jpg",
            title: "Smart Booking Management",
            desc: "Automate appointments, reduce no-shows, and maximize your schedule efficiency."
        },
        {
            image: "/images/business-analytics.jpg",
            title: "Business Analytics",
            desc: "Make data-driven decisions with comprehensive insights and performance metrics."
        }
    ]
  return (
    <div id='features' className="flex items-center justify-center flex-col gap-5 py-20 px-5 sm:px-10 md:px-16 lg:px-20">
        <h2 className="leading-none text-black text-[44px] md:text-[54px] lg:text-[64px] font-semibold flex items-center flex-wrap gap-2">
            Efficiency
            <span className="text-[#9B4B6A]">
                Meet
            </span>
            Excellence
        </h2>
        <p className="text-xl w-full md:max-w-4xl md:text-center">
            See how technology transforms daily operations and accelerates business growth.
        </p>

        {/* section with drops */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10">
            {solutions.map((soln, idx) => (
                <div
                    key={idx}
                    className="p-3 rounded-b-[50px] shadow-xs shadow-[#B46A8959] rounded-t-md bg-[#FFEFF8] transform transition-transform hover:scale-103 duration-400"
                >
                    <div className="rounded-[20px] w-full h-[197px] overflow-hidden">
                        <img src={soln.image} alt="" className="object-cover w-full" />
                    </div>
                    <div className="content p-5 flex items-start justify-start flex-col gap-2">
                        <h2 className="text-xl font-semibold">
                            {soln.title}
                        </h2>
                        <p className="">
                            {soln.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>            
  )
}
