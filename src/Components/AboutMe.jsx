import React from 'react'
import profileImg from "../Assests/Images/IMG_3357.jpg";
import "../App.css";
import { ReactComponent as LeetCode } from "../Assests/Icons/Leetcode.svg"
import { ReactComponent as CodeChef } from "../Assests/Icons/CodechefLogo.svg"
import { ReactComponent as HackerRank } from "../Assests/Icons/HackerRank.svg"

const AboutMe = React.forwardRef(({ aboutRef }) => {
  return (
    <section className='p-5 outline outline-blue-400 background' ref={aboutRef}>
      <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>About</h2>
      <section className=' block lg:flex justify-center gap-32 items-center p-10 lg:h-[70vh]'>
        <img src={profileImg} alt="" className='h-[300px] w-[200px] rounded-lg p-1 outline outline-blue-400' />
        <section className='p-3 lg:w-[30vw] lg:text-xl sm:text-base text-white'>
          Hey, I'm Rahul Tiwari.
          Currently pursuing an MSc in Information Technology at Dhirubhai Ambani Institute of Information and Communication Technology (DAIICT).
          I specialize in the MERN stack (MongoDB, Express, React, Node.js) and Java.
          I'm passionate about learning new technologies and enjoy solving problems through coding.
        </section>
      </section>
      <section className='outline outline-white rounded-md p-3 '>
        <h2 className='px-5 font-semibold text-3xl text-white underline'>Links of my Coding Profile</h2>

        <section className='px-5 py-5 block gap-10 md:flex md:justify-center md:items-center'>
          <p className='py-3'>
            <a href="http://leetcode.com/u/lucky1218" target="_blank" rel="noopener noreferrer">
              <LeetCode className='h-16' />
            </a>
          </p>
          <p className='py-3'>
            <a href="http://codechef.com/users/lucky1218" target="_blank" rel="noopener noreferrer">
              <CodeChef className='h-10' />

            </a>
          </p>
          <p className='py-3'>
            <a href="http://hackerrank.com/profile/lucky1218" target="_blank" rel="noopener noreferrer">

              <HackerRank className='h-10 w-44' />
            </a>
          </p>
        </section>
      </section>
    </section>
  )
});

export default AboutMe;
