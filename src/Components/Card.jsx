import React from 'react'

export default function Card({image,description}) {
  return (
    <div className='flex justify-between items-center gap-3 p-5 rounded-lg shadow-lg bg-white h-[250px] w-[350px] outline outline-blue-400 sm:mt-5  '>

        <img src={image} alt="" className='bg-white h-[200px] w-[200px] outline  outline-[#FFD700] rounded-lg'/>
        <p className=''>
    {description}
        </p>
    </div>
  )
}
