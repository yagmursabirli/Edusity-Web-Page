import React from 'react'
import arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='w-full min-h-[100vh] bg-bgHero bg-cover bg-center text-white pl-[10%] pr-[10%] flex items-center justify-center' id='hero'>
        <div className='text-center max-w-[800px] '>

            <h1 className='text-5xl font-bold'>We Ensure better education for a better world</h1>

            <p className='max-w-[700px] mt-[10px] mx-auto mb-[20px] leading-[1.4]'>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>

            <button className='bg-white text-black py-[14px] px-[25px] rounded-3xl cursor:pointer inline-flex items-center justify-center'>Explore More 
                <img src={arrow} alt="arrow" className='w-[20px] ml-[10px]' />
                </button>
        </div>
    </div>
  )
}

export default Hero