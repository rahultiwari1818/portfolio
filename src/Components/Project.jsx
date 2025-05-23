import React from 'react'
import ProjectDetails from './ProjectDetails';
import qpgImage from "../Assests/Images/QPGImage.png"
import CEMS from "../Assests/Images/CEMS.png"
import Notekeeper from "../Assests/Images/NoteKeeper.png"
import NewsApp from "../Assests/Images/Newsapp.png"
import NexusApp from "../Assests/Images/nexus.png";
import Vartalaap from "../Assests/Images/vartalaap.png";

const Project = React.forwardRef(({ projectRef }) => {
    return (
        <section className='p-5 outline outline-blue-400' ref={projectRef}>
            <h2 className='px-5 font-semibold text-3xl text-blue-500 underline '>Projects</h2>
            <section className="">
                <section className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2vw] block  '>
                    <ProjectDetails imgSrc={Vartalaap} projectName={"Vartalaap - The Chat App"} techStack={"React-JS, Express , MongoDB , Node-JS,Scoket-IO  , Redis"} projectLink={"https://github.com/rahultiwari1818/MERN_ChatApp"}  />
                    <ProjectDetails imgSrc={NexusApp} projectName={"Nexus - Smart and Secure Library Management System "} techStack={"Java , Postgres ,Design Patterns"} projectLink={"https://github.com/rahultiwari1818/Nexus"}  />
                    <ProjectDetails imgSrc={CEMS} projectName={"College Event Management System"} techStack={"React-JS, Express , MongoDB , Node-JS , Redux , Redis"} projectLink={"https://github.com/rahultiwari1818/CollegeEventManagementSystem"} />
                    <ProjectDetails imgSrc={qpgImage} projectName={"Question Paper Generator System"} techStack={" HTML,Tailwind-Css , J-Query , PHP , MYSQL"} projectLink={"https://github.com/rahultiwari1818/Question-paper-generator-system"} />
                    <ProjectDetails imgSrc={Notekeeper} projectName={"Note keeper"} techStack={" React-JS, Express , MongoDB , Node-JS "} projectLink={"https://github.com/rahultiwari1818/NoteKeeperApp"} />
                    <ProjectDetails imgSrc={NewsApp} projectName={"News App"} techStack={" React-JS, TailWind CSS "} projectLink={"https://github.com/rahultiwari1818/The-News-App"} />
                </section>
            </section>
        </section>
    );
});

export default Project;