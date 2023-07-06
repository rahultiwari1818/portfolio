import React from 'react'
import Achievements from './Achievements'
import AboutMe from './AboutMe'

export default function MainPage({width}) {
  return (
	<>
	<div className={`${width?"w-full":"absolute left-[20vw]"} p-1 h-screen overflow-scroll`}>
		<AboutMe/>
		<Achievements/>
	</div>
	</>
  )
}
