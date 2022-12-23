import React from 'react';
import consumers1 from '../images/consumers1.svg'
import consumers2 from '../images/consumers2.svg'
import consumers3 from '../images/consumers3.svg'

function Consumers() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="flex-1 flex justify-center items-start flex-col max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
            <h5 className="font-bold h5 md:pr-4 lg:pr-12 xl:pr-16 mb-3">FOR CONSUMERS</h5>
            <h2 className="lg:w-[60%] h2 mb-4 md:pr-4 lg:pr-12 xl:pr-16">Tensfer powers the apps in your crypto journey</h2>
            <p className="w-[60%] text-xl text-black">An integration every user can trust.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
              <img src={consumers1} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight ">Connect in seconds</h4>
              <p className="lg:w-[60%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Tensfer allows you to securely connect and share data from your financial institutions with the apps you choose.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
              <img src={consumers2} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight mb-1">Designed for security</h4>
              <p className="lg:w-[60%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Tensfer Portal enables you to see the types of crypto data you've shared and control which apps have access.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
             <img src={consumers3} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight mb-1">Manage connections</h4>
              <p className="lg:w-[60%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Your data is powerful—and no one should access it without your permission. For that reason, our information security practices are designed to meet or exceed industry standards.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Consumers;
