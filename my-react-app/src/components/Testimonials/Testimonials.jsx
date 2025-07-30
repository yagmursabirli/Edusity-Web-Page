import React, { useRef, useState, useEffect } from 'react'
import nextIcon from '../../assets/next-icon.png'
import backIcon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    const txRef = useRef(0); 
    const totalCards = 4;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);


    const isMobile = window.innerWidth < 768; 
    const visibleCards = isMobile ? 1 : 2;
    const step = 100 / totalCards; 
    const maxTx = -100 + (visibleCards * 25); 

    const slideForward = () => {
    if (txRef.current > maxTx) {
        txRef.current -= step;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
    };

    const slideBackward = () => {
    if (txRef.current < 0) {
        txRef.current += step;
    }
    slider.current.style.transform = `translateX(${txRef.current}%)`;
    };


  return (
    <div className='my-[80px] mx-auto py-0 px-[80px] relative ' id='testimonials'>
        <img src={nextIcon} alt="nextIcon" className='absolute top-[50%] right-0 translate-y-[-50%] p-[15px] w-[50px] rounded-full cursor-pointer bg-title mx-[25px]' onClick={slideForward}/>

        <img src={backIcon} alt="backIcon" className='absolute top-[50%] right-auto left-0 translate-y-[-50%] p-[15px] w-[50px] rounded-full cursor-pointer bg-title mx-[25px]' onClick={slideBackward}/>
        <div className='overflow-hidden'>
         <ul
  className='flex overflow-x-hidden transition duration-500 ease-in-out'
  style={{ width: isMobile ? '400%' : '200%' }}
  ref={slider}>


                <li className='list-style-none w-full md:w-[50%] p-[20px]'>

                    <div className='slide h-[450px] md:h-auto bg-white rounded-lg shadow-md p-[20px] flex flex-col justify-between'>

                        <div  className='flex items-center mb-[20px] text-[15px] '>
                            <img src={user1} alt="user1" className='images' />
                            <div>
                                <h3 className='text-title'>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>

                 <li className='list-style-none w-full md:w-[50%] p-[20px]'>


                   <div className='slide h-[450px] md:h-auto bg-white rounded-lg shadow-md p-[20px] flex flex-col justify-between'>

                        <div className='flex items-center mb-[20px] text-[15px] '>
                            <img src={user2} alt="user2"  className='images'/>
                            <div>
                                <h3 className='text-title'>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>

                 <li className='list-style-none w-full md:w-[50%] p-[20px]'>

                   <div className='slide h-[450px] md:h-auto bg-white rounded-lg shadow-md p-[20px] flex flex-col justify-between'>

                        <div  className='flex items-center mb-[20px] text-[15px] '>
                            <img src={user3} alt="user3" className='images' />
                            <div>
                                <h3 className='text-title'>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>


                 <li className='list-style-none w-full md:w-[50%] p-[20px]'>

                   <div className='slide h-[450px] md:h-auto bg-white rounded-lg shadow-md p-[20px] flex flex-col justify-between'>

                        <div  className='flex items-center mb-[20px] text-[15px] '>
                            <img src={user4} alt="user4" className='images' />
                            <div>
                                <h3 className='text-title'>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations. </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials