import React from 'react'
import TimeLine from './TimeLine';
import Dot3Logo from "../Assests/Images/dot3_logo.jpg";
import MegascaleLogo from "../Assests/Images/megascale_logo.jpg";

const data = [
    {
        date: "April 2024 - June 2024",
        title: "Backend Intern",
        subtitle: "Tech Stack: Node.js, MongoDB",
        logo: MegascaleLogo,
        desc: [`• Led the development as part of a team of 4 backend developers using Node.js; managed client interactions and
presentations, ensuring requirements were met.`,`• Developed APIs that reduced paper usage by 99%, created an online helpdesk, integrated QR code-based attendance scanning, and enabled online submission of suggestions for resolutions.`]
    },
    {
        date: "April 2023 - June 2023",
        logo: Dot3Logo,
        title: "Frontend Intern",
        subtitle: "Tech Stack: React JS, JavaScript",
        desc: ["• Worked on Admin panel of Unlock fit using ReactJS.",`• Successfully integrated APIs using Axios, enabling seamless communication between the front-end and back-end
systems.`]
    }

];

const Experience = React.forwardRef(({ expRef }) => {
    return (
        <section className='p-5 outline outline-blue-400' ref={expRef}>
            <h2 className='px-5 font-semibold text-3xl text-blue-500 underline'>Experience</h2>
            <TimeLine data={data} />
        </section>
    );
});

export default Experience;