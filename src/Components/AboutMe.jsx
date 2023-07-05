import React from 'react'
import profileImg from "../Assests/Images/IMG_3357.jpg";
export default function AboutMe() {
  return (
    <div>
        <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>About</h2>
        <div className=' block lg:flex justify-center gap-32 items-center p-10'>
            <div className='p-3 lg:w-[30vw] '>
			Hey i'm Rahul Tiwari,
A Final year student at Sutex Bank College of Computer Applications and Science,Surat.
Currently,I'm a Front-end Developer With a Stack of Languages Including HTML-5,CSS,JavaScript & React-js.
I enjoy solving problems using languages such as C++,Java&JavaScript.
Passionate about learning new technologies and getting a good command over familiar languages.

			</div>
			<img src={profileImg} alt=""  className='h-[300px] w-[200px] rounded-lg p-1 outline outline-blue-400'/>
        </div>
    </div>
  )
}
