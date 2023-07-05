import React from 'react'
import profilePic from "../Assests/Images/IMG_3357.jpg"
import {ReactComponent as Github} from "../Assests/Icons/github.svg"
import {ReactComponent as Linkedin} from "../Assests/Icons/linkedin.svg"
import {ReactComponent as Twitter} from "../Assests/Icons/twitter.svg"
import {ReactComponent as About} from "../Assests/Icons/user-solid.svg"

export default function Sidebar({show,width}) {
  return (
	<>
	{
		show &&     <aside className={`h-screen absolute left-0 bg-black p-10 ${width?"w-[80vw]":" w-[20vw]"} z-50`}>
        <div className=' flex justify-center items-center'>

      <div className='lg:h-[150px] md:h-[100px] md:w-[100px] outline-[8px] outline outline-blue-500 lg:w-[150px] overflow-hidden rounded-full'>
            <img src={profilePic} alt="" srcset="" className='rounded-full '/>
      </div>
        </div>
        <div className='mt-5'>
            <div className='flex justify-between items-center'>
				<button onClick={()=>{
					window.open("https://github.com/rahultiwari1818","_blank");
				}}>

				<Github className='outline-white outline bg-white h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] rounded-full'/>
				</button>
				<button onClick={()=>{
					window.open("https://www.linkedin.com/in/rahul-tiwari-a1b45a238/","_blank");
				}}>

				<Linkedin className='p-[7px] outline bg-white h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] rounded-xl   '/>
				</button>
				<button>

				<Twitter className='p-1 outline bg-white h-[32px] w-[32px] lg:h-[37px] lg:w-[37px] rounded-full   '/>
				</button>
            </div>
        </div>
		<div className='mt-10 break-words break-all'>
		<div className='w-full'>
				<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full'>
					<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full'/><p> About Me</p>
				</button>
			</div>	<div className='w-full'>
				<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full'>
					<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full'/><p> Skills</p>
				</button>
			</div>	<div className='w-full'>
				<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full'>
					<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full'/><p> Academic</p>
				</button>
			</div>
			<div className='w-full'>
				<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full'>
					<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full'/><p>Projects</p>
				</button>
			</div>
			<div className='w-full'>
				<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full'>
					<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full'/><p> Achievements </p>
				</button>
			</div>
		</div>
    </aside>
	}

</>
  )
}
