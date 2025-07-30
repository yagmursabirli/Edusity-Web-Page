import React from 'react'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='my-[80px] mx-auto w-[90%] flex flex-col md:flex-row items-center justify-between pl-[10%] pr-[10%] gap-4' id='program'>

        <div className='md:basis-[31%] relative group'>
            <img src={program1} alt="program1" className='w-full rounded-lg block'/>

            <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0 bg-bgDegrees flex flex-col items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out '>
                <img src={program_icon_1} alt="program_icon_1" className='w-[60px] mb-[10px]'/>
                <p>Graduation Degree</p>
            </div>

        </div>

        <div className='md:basis-[31%] relative group'>
            <img src={program2} alt="program2" className='w-full rounded-lg block '/>

           <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0  bg-bgDegrees flex flex-col items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                <img src={program_icon_2} alt="program_icon_2" className='w-[60px] mb-[10px] ' />
                <p>Masters Degree</p>
            </div>

        </div>

        <div className='md:basis-[31%] relative group'>
            <img src={program3} alt="program3" className='w-full rounded-lg block'/>

            <div className='rounded-xl absolute top-0 left-0 bottom-0 right-0  bg-bgDegrees flex flex-col items-center justify-center text-white cursor-pointer opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out'>
                <img src={program_icon_3} alt="program_icon_3" className='w-[60px] mb-[10px]'/>
                <p>Post Graduation</p>
            </div>

        </div>
    </div>
  )
}

export default Programs