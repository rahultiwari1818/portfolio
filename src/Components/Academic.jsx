import React from 'react'
import TimeLine from './TimeLine';

import  DaiictLogo  from "../Assests/Images/daiict-logo.jpg";
import   VnsguLogo  from "../Assests/Images/vnsgu.png";

const data = [
  {
    title :"Masters of Science - Information Technology",
    subtitle:"Dhirubhai Ambani Institute of Information and Communication Technology",
    desc :"Gandhinagar , Gujarat",
    logo : DaiictLogo,
    date :"July 2024 - Present"
  },
  {
    title :"Bachelors of Computer Application",
    subtitle:"Veer Narmad South Gujarat University",    
    desc :"Surat , Gujarat",
    logo : VnsguLogo,
    date :"2021 - 2024"
  },
]

const Academic = React.forwardRef(({aceRef})=>{
  return(
    <section className='p-5 outline outline-blue-400' ref={aceRef}>
        <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>Academic</h2>
        <TimeLine data={data}/>
    </section>
  )
});

export default Academic;