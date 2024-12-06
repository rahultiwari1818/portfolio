import React from 'react';
import Achievements from './Achievements';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';
import Academic from './Academic';

const  MainPage = React.forwardRef(( {width , skillRef,aboutRef,achRef,projectRef,aceRef})=> {
  return (
	<>
	<section className={`${width?"w-full":"absolute left-[20vw] w-[80vw]"} p-1 h-screen overflow-scroll`}>
		<AboutMe aboutRef={aboutRef}/>
		<Skills skillRef={skillRef}/>
		<Academic aceRef={aceRef}/>
		<Project projectRef={projectRef}/>
		<Achievements achRef={achRef}/>
	</section>
	</>
  )
})

export default MainPage;