import React from 'react'
import trophy from "../Assests/Images/Trophy.jpeg"
import dynafest from "../Assests/Images/dynafest2k23.jpg"
import mindit from "../Assests/Images/mindIT2k23.jpg"
import impetus from "../Assests/Images/impetus2k23.jpg"
import pixel from "../Assests/Images/pixel2k23.jpg"
import Card from './Card'

const Achievements = React.forwardRef(({achRef})=> {
  return (
    <div className='bg-white outline outline-blue-400 p-5' ref={achRef}>
        <h2 className='px-5 font-semibold text-3xl text-blue-500 underline '>Achievements</h2>
        <div className="flex justify-center items-center">

        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:block  '>
            <Card image={trophy} description="Award for Academic Excellence during Semester 2."/>
            <Card image={trophy} description="Award for Academic Excellence during Semester 3."/>
            <Card image={dynafest} description='Winner of "Battle of C" Competition (a coding contest in C language) at an IT Event "Dyna Fest 2k23".'/>
            <Card image={pixel} description="Winner of 'Code War' Competition (coding contest in C++,Java & Python Languages) at an IT Event 'Pixels 2k23'."/>
            <Card image={mindit} description='Runner-ups of "Script-IT" competition (a SQL & PL/SQL queries and block writing competition) at an Inter-College IT Event "MInd-IT".'/>
            <Card image={impetus} description='Runner-Ups of Cspring Puzzle Competition (a coding contest in C++ Language) at an IT Event "Impetus 2k23".'/>
        </div>
        </div>
    </div>
  )
});

export default Achievements;
