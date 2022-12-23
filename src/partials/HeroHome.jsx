import React from 'react';
import Typed from 'react-typed'
import logo from '../images/hero.svg'

const HeroHome = () => (
  <section id='home' className='flex md:flex-row flex-col sm:py-16 pt-40'>
    <div  className='flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6'>

      <div className='flex flex-row justify-between items-center lg:w-[150%] lg:pl-20'>
        <h1 className='flex-1 font-semibold text-3xl sm:text-2xl lg:text-4xl text-black'>The {''} 
        <Typed 
          loop={Infinity}
          wrapper='b'
          strings={[
            'safest',
            'fastest',
          ]}
          typeSpeed={70}
        showCursor={false}
        />{''} way for people to <br className='sm:block hidden' /> {''}
          <span className='text-blue-900'>connect crypto accounts to an app</span> {''}
        </h1>
      </div>
      <p className='font-normal text-black text-[18px] leading-[30.8px] max-w-[470px] mt-5 lg:pl-20'>
        Tensfer allows you to quickly connect to any crypto exchange, wallet, protocol or digital assets account.
      </p>
      <a className="btn rounded-xl lg:ml-20 mt-5 text-white bg-blue-900 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0">Join Waitlist</a>
    </div>
  
    <div className='flex-1 flex justify-center lg:ml-40 items-center md:my-0 my-10 relative'>
      <img src={logo} alt="billing" className='w-[150%] h-[150%] relative z-[5]'/>
    </div>
  </section>
)


export default HeroHome;

