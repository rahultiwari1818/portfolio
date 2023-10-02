import React from 'react'
import Achievements from './Achievements'
import AboutMe from './AboutMe'
import Skills from './Skills'

const  MainPage = React.forwardRef(( {width , skillRef,aboutRef,achRef})=> {
  return (
	<>
	<div className={`${width?"w-full":"absolute left-[20vw]"} p-1 h-screen overflow-scroll`}>
		<AboutMe aboutRef={aboutRef}/>
		<Skills skillRef={skillRef}/>
		<Achievements achRef={achRef}/>
	</div>
	</>
  )
})

export default MainPage;