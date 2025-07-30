import React from 'react'
import gallery1 from '../../assets/gallery-1.png'
import gallery2 from '../../assets/gallery-2.png'
import gallery3 from '../../assets/gallery-3.png'
import gallery4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='my-[80px] mx-auto w-[90%] text-center' id='campus'>
        <div className='flex flex-col md:flex-row items-center justify-between mb-[40px] gap-5'>
            <img src={gallery1} alt="photo 1" className='md:w-[23%] rounded-lg w-[85%]'/>
            <img src={gallery2} alt="photo 2" className='md:w-[23%] rounded-lg w-[85%]' />
            <img src={gallery3} alt="photo 3" className='md:w-[23%] rounded-lg w-[85%]' />
            <img src={gallery4} alt="photo 4" className='md:w-[23%] rounded-lg w-[85%]'/>
        </div>
        <button className='py-[14px] px-[25px] text-[16px] rounded-full cursor-pointer border-none outline-none inline-flex items-center justify-center bg-title text-white'>See more here <img src={white_arrow} alt="white-arrow" className='pl-[14px]'/></button>
    </div>
  )
}

export default Campus