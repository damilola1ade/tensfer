import React from 'react';
import wallet from '../images/wallet.svg'
import tracker from '../images/tracker.svg'
import finance from '../images/finance.svg'
import digitalbanking from '../images/digitalbanking.svg'

function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-white transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="flex-1 flex justify-center items-start flex-col max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6">
            <h2 className="w-[90%] h2 mb-4 md:pr-4 lg:pr-12 xl:pr-16">Build the future of crypto services</h2>
            <p className="text-xl lg:w-[45%] text-black">Tensfer is the easiest way for your business to access exchanges, and wallets, helping you attract and retain customers and grow your business.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
              <img src={wallet} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight ">Consumer payments</h4>
              <p className="lg:w-[50%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Help people buy crypto from your app with fiat payment options.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
              <img src={finance} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight mb-1">Personal finance</h4>
              <p className="lg:w-[50%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Help people, manage, budget, and make sense of their digital assets.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
             <img src={digitalbanking} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight mb-1">Digital banking</h4>
              <p className="lg:w-[50%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Create a streamlined user onboarding process on your app.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-left pt-10 pr-12">
             <img src={tracker} className="w-28 h-28 p-1 pr-5 -mt-1 mb-2" />
              <h4 className="lg:absolute lg:ml-28 lg:pt-3 text-xl font-bold leading-snug tracking-tight mb-1">Financial Tracker</h4>
              <p className="lg:w-[50%] lg:absolute lg:ml-28 lg:pt-10 text-black text-left">Help people keep track of their digital assets in real-time.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
