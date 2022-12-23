import React from "react";
import code from '../images/code.svg';

const Developers = () => (
  <section id='product' className='flex md:flex-row flex-col-reverse sm:py-16 py-6'>
    <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative pb-10'>
      <img src={code} alt='billing' className='w-[90%] h-[90%] relative z-[5]' />
    </div>

    <div className='flex-1 pl-5 flex justify-center items-start flex-col'>
        <h2 className='font-semibold text-3xl sm:text-2xl lg:text-4xl text-black xs:leading-[76.8px] w-full'>
          For developers, by<br className='sm:block hidden' /> developers
        </h2>
        <p className='font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5'>
        With just a few lines of code, you can implement Tensfer in an afternoon.  
        </p>
    </div>
  </section>
)

export default Developers;