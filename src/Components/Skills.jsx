import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const  Skills = React.forwardRef(({skillRef})=> {
    return (
        <section className='p-5 outline outline-blue-400' ref={skillRef}>
            <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>Skills</h2>
            <p className='p-4 font-semibold text-base'>
                Comfortable with React - js when it comes to web development but also familiar and able to code in Jquery and Vanilla Javascript.
                <br />
                Familiar with CSS frameworks like Bootstrap and Tailwind.<br/>
                able to implement complex functionalities as i'm having deep interest in problem solving.
                <br />
                Also Familiar with Version Control System like Git.
            </p>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>HTML</p>
                <ProgressBar completed={95} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>CSS</p>
                <ProgressBar completed={70} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>Javascript</p>
                <ProgressBar completed={90} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>React-Js</p>
                <ProgressBar completed={80} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>Python</p>
                <ProgressBar completed={70} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>C++</p>
                <ProgressBar completed={80} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>Java</p>
                <ProgressBar completed={85} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>SQL</p>
                <ProgressBar completed={90} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>Core PHP</p>
                <ProgressBar completed={70} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
            <section className='p-2'>
                <p className='p-2 text-base font-semibold'>Node Js</p>
                <ProgressBar completed={60} bgColor='#45b6fe' animateOnRender height='16px' />
            </section>
        </section>
    )
});

export default Skills;