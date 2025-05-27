import React from 'react';
import SingleProject from './SingleProject';

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "left",
    image: "../../images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "right",
    image: "../../images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "left",
    image: "../../images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "right",
    image: "../../images/website-img-4.jpg",
    link: "#",
  },
];

function AllProjects() {
  return (
    <div>
      <div div className='flex flex-col mx-auto max-w-[1200px]'>
        {projects.map((project, index) => (
          <SingleProject key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default AllProjects