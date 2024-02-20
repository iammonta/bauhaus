import React from 'react'

const CustomButtontwo = ({text}) => {
  return (
    <div className='flex justify-center items-center p-1 relative'>
        <button className='bg-[#1A1A1A] text-white py-3 px-7 ml-6'>{text}</button>
        <img src="/icons/horizontalLine.png" alt="line" className='absolute h-auto w-auto right-[100px] bottom-0 px-4' />
        <img src="/icons/veticalLine.png" alt="line" className='absolute h-auto w-auto right-[115px] top-[4px] px-2' />
    </div>
  )
}

export default CustomButtontwo