import React, { useState } from 'react'

export default function ProjectDetails({imgSrc,projectName,projectLink,techStack}) {

    const [showDetails,setShowDetails] = useState(false);

  return (
    <section className={`p-5 rounded-lg shadow-lg bg-white  md:w-[400px] w-full h-full outline outline-blue-400 sm:mt-5 ${!showDetails && 'md:h-[330px]'} `  }>
      <img src={imgSrc} alt="" srcSet="" className='bg-white h-[220px] w-full outline  outline-black rounded-lg'/>
      <section className='flex justify-around items-center p-2  my-2'>
            <p className="font-black text-base">{projectName}</p>
            <button className='p-2 rounded shadow bg-[#FFD700] text-black cursor-pointer font-bold text-base' onClick={()=>setShowDetails((old)=>!old)}>{showDetails ? "Hide ":"Show "}Details</button>            
      </section>
      {
                showDetails && <section>
                        <p className="font-bold text-base">Tech Stack Used:</p>
                        <p className='font-bold text-base'>{techStack}</p>
                    </section>
            }
    </section>
  )
}
