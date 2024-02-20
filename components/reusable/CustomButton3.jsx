import React from 'react'

const CustomButtonthree = ({text}) => {
  return (
    <div className='flex justify-center items-center p-1 relative'>
        <button className='bg-[#1A1A1A] text-white py-3 px-4 -ml-16'>{text}</button>
        <img src="/icons/horizontalLine.png" alt="line" className='absolute h-auto w-auto right-[100px] bottom-0 px-0' />
        <img src="/icons/veticalLine.png" alt="line" className='absolute h-auto w-auto right-[115px] top-[4px] -px-7 ' />
    </div>
  )
}

export default CustomButtonthree