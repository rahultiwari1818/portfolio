import React from 'react'
import trophy from "../Assests/Images/Trophy.jpeg"
import dynafest from "../Assests/Images/dynafest2k23.jpg"
import mindit from "../Assests/Images/mindIT2k23.jpg"
import impetus from "../Assests/Images/impetus2k23.jpg"
import pixel from "../Assests/Images/pixel2k23.jpg"
import CodeChefLogo from "../Assests/Icons/CodechefLogo.svg"
import Card from './Card'

const Achievements = React.forwardRef(({achRef})=> {
  return (
    <section className='bg-white outline outline-blue-400 p-5' ref={achRef}>
        <h2 className='px-5 font-semibold text-3xl text-blue-500 underline '>Achievements</h2>
        <section className="">

          <section className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-10 sm:block  '>
              <Card image={CodeChefLogo} description="Secured Global Rank 162 in CodeChef's Starters 99 Contest."/>
              <Card image={trophy} description="Award for Academic Excellence during Semester 2."/>
              <Card image={trophy} description="Award for Academic Excellence during Semester 3."/>
              <Card image={dynafest} description='Winner of "Battle of C" Competition (a coding contest in C language) at an IT Event "Dyna Fest 2k23".'/>
              <Card image={pixel} description="Winner of 'Code War' Competition (coding contest in C++,Java & Python Languages) at an IT Event 'Pixels 2k23'."/>
              <Card image={mindit} description='Runner-ups of "Script-IT" competition (a SQL & PL/SQL queries and block writing competition) at an Inter-College IT Event "MInd-IT".'/>
              <Card image={impetus} description='Runner-Ups of Cspring Puzzle Competition (a coding contest in C++ Language) at an IT Event "Impetus 2k23".'/>
          </section>
        </section>
    </section>
  )
});

export default Achievements;
