import React from 'react'
import profileImg from "../Assests/Images/IMG_3357.jpg";
import "../App.css";
const AboutMe = React.forwardRef(({aboutRef})=> {
  return (
    <div className='p-5 outline outline-blue-400 background' ref={aboutRef}>
      <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>About</h2>
      <div className=' block lg:flex justify-center gap-32 items-center p-10 lg:h-[90vh]'>
        <img src={profileImg} alt="" className='h-[300px] w-[200px] rounded-lg p-1 outline outline-blue-400' />
        <div className='p-3 lg:w-[30vw] lg:text-xl sm:text-base text-white'>
          Hey , i'm Rahul Tiwari.<br/>
          A Final year student at Sutex Bank College of Computer Applications and Science,Surat.<br/>
          Currently,I'm a Front-end Developer With a Stack of Languages Including HTML-5,CSS,JavaScript & React-js.<br/>
          I enjoy solving problems using languages such as C++,Java&JavaScript.<br/>
          Passionate about learning new technologies and getting a good command over familiar languages.

        </div>
      </div>
    </div>
  )
});

export default AboutMe;
