import React from 'react'
import profilePic from "../Assests/Images/IMG_3357.jpg"
import { ReactComponent as Github } from "../Assests/Icons/github.svg"
import { ReactComponent as Linkedin } from "../Assests/Icons/linkedin.svg"
import { ReactComponent as Twitter } from "../Assests/Icons/twitter.svg"
import { ReactComponent as About } from "../Assests/Icons/user-solid.svg"

const  Sidebar = React.forwardRef(({ show, width,skillRef,aboutRef,achRef,projectRef,aceRef }) =>{

	const navigateTo = (section) =>{
		if(section === "skills"){
			skillRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		else if(section === "about"){
			aboutRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		else if(section === "achievement"){
			achRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		else if(section === "project"){
			projectRef.current.scrollIntoView({ behavior: 'smooth' });
		}
		else if(section === "academic"){
			aceRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	}

	return (
		<>
			{
				show && <aside className={`h-screen absolute left-0 bg-black p-10 ${width ? "w-[80vw]" : " w-[20vw]"} z-50`}>
					<section className=' flex justify-center items-center'>

						<section className='lg:h-[150px] h-[100px] w-[100px] outline-[8px] outline outline-blue-500 lg:w-[150px] overflow-hidden rounded-full'>
							<img src={profilePic} alt="" srcSet="" className='rounded-full ' />
						</section>
					</section>
					<section className='mt-5'>
						<section className='flex justify-between items-center'>
							<button onClick={() => {
								window.open("https://github.com/rahultiwari1818", "_blank");
							}}>

								<Github className='outline-white outline bg-white h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] rounded-full' />
							</button>
							<button onClick={() => {
								window.open("https://www.linkedin.com/in/rahultiwari1218/", "_blank");
							}}>

								<Linkedin className='p-[7px] outline bg-white h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] rounded-xl   ' />
							</button>
							<button>

								<Twitter className='p-1 outline bg-white h-[32px] w-[32px] lg:h-[37px] lg:w-[37px] rounded-full   ' />
							</button>
						</section>
					</section>
					<section className='mt-10 break-words break-all'>
						<section className='w-full'>
							<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full' onClick={()=>navigateTo("about")}>
								<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full' /><p> About Me</p>
							</button>
						</section>
							<section className='w-full'>
							<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full' onClick={()=>navigateTo("skills")}>
								<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full' /><p> Skills</p>
							</button>
						</section>
							<section className='w-full'>
							<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full' onClick={()=>navigateTo("academic")}>
								<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full' /><p> Academic</p>
							</button>
						</section>
						<section className='w-full'>
							<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full' onClick={()=>navigateTo("project")}>
								<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full' /><p>Projects</p>
							</button>
						</section>
						<section className='w-full'>
							<button className='flex justify-start gap-[2vw] items-center text-white   p-5 w-full' onClick={()=>navigateTo("achievement")}>
								<About className='outline-white outline bg-white h-[20px] w-[20px] p-[2px] rounded-full' /><p> Achievements </p>
							</button>
						</section>
					</section>
				</aside>
			}

		</>
	)
});

export default Sidebar;