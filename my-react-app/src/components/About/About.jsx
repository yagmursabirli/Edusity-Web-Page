import React from 'react'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='my-[100px] mx-auto w-[90%] flex flex-col md:flex-row items-center md:justify-between gap-[40px] justify-center ' id='about'>
        <div className='md:basis-[40%] relative'>
            <img src={aboutImg} alt="about" className='md:w-full  w-[75%] mx-auto rounded-md '/>
            <img src={playIcon} alt="play-icon"  onClick={() => setPlayState(true)} className='w-[60px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer'/>
        </div>
        
        <div className='md:basis-[56%] relative'>
                <h3 className='font-600 text-[16px] text-title '>ABOUT UNIVERSITY</h3>

                <h2 className='text-[35px] text-titleH2 my-[10px] mx-0 max-w-[400px] '>Nurturing Tomorrow's Leaders Today</h2>

                <p className='text-paragraph mb-[15px] '>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education .</p>

                <p className='text-paragraph mb-[15px] '>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities. </p>

                <p className='text-paragraph mb-[15px] '>Whether you aspire to become a teacher, administrator,
                counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education . </p>
        </div>
    </div>
  )
}

export default About