import React, { Suspense } from 'react'

const Title = ({subTitle, title}) => {
  return (
    <div className='text-center text-title text-[15px] font-600 uppercase mt-[70px] mx-0 mb-[30px]'>
        <p>{subTitle}</p>
        <h2 className='text-[32px] text-titleH2 mt-[5px] normal-case'>{title}</h2>
    </div>
  )
}

export default Title