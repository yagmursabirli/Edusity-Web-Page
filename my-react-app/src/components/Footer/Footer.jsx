import React from 'react'

const Footer = () => {
  return (
    <div className='footer my-[10px] mx-auto flex items-center justify-between border-t-[1px] border-borderTop py-[15px] px-[25px]'>
        <p className=' '>2024 Edusity. All rights reserved.</p>
        <ul>
            <li className='list-none inline-block ml-[20px]'>Terms of Services</li>
            <li className='list-none inline-block ml-[20px]'>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer