import React, { useState } from 'react';
import { ReactComponent as Github } from "../Assests/Icons/github.svg";

export default function ProjectDetails({ imgSrc, projectName, projectLink, techStack }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section className="p-5 rounded-lg shadow-lg bg-white md:w-[400px] relative w-full outline outline-blue-400 sm:mt-5">
      <img
        src={imgSrc}
        alt=""
        className="bg-white h-[220px] w-full outline outline-black rounded-lg"
      />
      <section className="flex justify-between items-center p-2 my-2">
        <p className="font-black text-base">{projectName}</p>
        <button
          className="p-2 rounded shadow bg-[#FFD700] text-black cursor-pointer font-bold text-base"
          onClick={() => setShowDetails((old) => !old)}
        >
          {showDetails ? "Hide " : "Show "} Details
        </button>
      </section>
      {showDetails && (
        <section className="absolute top-full left-0 w-full bg-white shadow-lg p-4 rounded-lg z-10">
          <p className="font-bold text-base">Tech Stack Used:</p>
          <p className="font-bold text-base mb-4">{techStack}</p>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white p-2 rounded-lg flex items-center font-bold"
          >
            <Github className="outline-white outline bg-white h-[30px] w-[30px] lg:h-[35px] lg:w-[35px] rounded-full mx-4" /> View on GitHub
          </a>
        </section>
      )}
    </section>
  );
}
