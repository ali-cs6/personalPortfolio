import React from 'react';
import ProjectsText from './ProjectsText';
import AllProjects from './AllProjects';

function ProjectsMain() {
  return (
    <div className='mt-30' id='projects'>
      <ProjectsText />
      <AllProjects />
    </div>
  )
}

export default ProjectsMain