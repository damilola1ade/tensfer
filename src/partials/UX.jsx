import React from "react";
import userexperience from '../images/userexperience.svg'

const UX = () => (
  <section id='' className='flex md:flex-row flex-col sm:py-16 py-6'>
    <div className='flex-1 pl-5 lg:pl-20 flex justify-center items-start flex-col'>
      <h2 className='font-semibold text-3xl sm:text-2xl lg:text-4xl text-black xs:leading-[76.8px] w-full'>
        Beautiful User<br className='sm:block hidden' /> Experience
      </h2>
      <p className='font-normal text-black text-[18px] leading-[30.8px] max-w-[370px] mt-5'>
        Our easy front-end integration smoothens your onboarding experience.  
      </p>
  </div>

  <div className='flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative'>
    <img src={userexperience} alt='billing' className='w-[90%] h-[90%] relative z-[5]' />
  </div>
</section>
)

export default UX

