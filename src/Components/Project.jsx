import React from 'react'
import ProjectDetails from './ProjectDetails';
import qpgImage from "../Assests/Images/QPGImage.png"

const Project = React.forwardRef(({ projectRef }) => {
    return (
        <section className='p-5 outline outline-blue-400' ref={projectRef}>
            <h2 className='px-5 font-semibold text-3xl text-blue-500 underline '>Projects</h2>
            <section className="">
                <section className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-[2vw] block  '>
                <ProjectDetails imgSrc={qpgImage} projectName={"Question Paper Generator System"} techStack={" HTML,Tailwind-Css , J-Query , PHP , MYSQL"} projectLink={""}/>
                </section>
            </section>
        </section>
    );
});

export default Project;