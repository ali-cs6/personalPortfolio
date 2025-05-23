import React from 'react'
import SingleBottomExperince from './SingleBottomExperince.jsx';
import { FaLongArrowAltRight } from "react-icons/fa";

const experiences = [
  {
    job: "Front-End Developer",
    company: "Alex Apps",
    date: "2022 - Present",
    responsibilities: [
      "Implementing reusable components.",
      "Participating in large scale application.",
      "Working on the performance of web applications.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Nucamp",
    date: "2023 - Present",
    responsibilities: [
      "Explaining and facilitating web development concepts.",
      "Help students with their assignments and grade them weekly.",
      "Provide support for students through their learning journey.",
    ],
  },
  {
    job: "Course Instructor",
    company: "Sprints",
    date: "2024 - Present",
    responsibilities: [
      "Teaching JavaScript, React and TailwindCSS.",
      "Participating in preparing course materials.",
      "Helping students through their way in learning web development technologies.",
    ],
  },
];

function AllBottomExperiences() {
  return (
    <div className="mx-6 flex flex-col lg:flex-row lg:gap-10">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleBottomExperince key={index} experience={experience}/>
            {index < 2 ? (
              <div className="flex items-center justify-center">
                <FaLongArrowAltRight className="text-6xl text-orange hidden lg:block" />
              </div>
            ) : ("")}
          </>
        )
      })}
    </div>
  )
}

export default AllBottomExperiences