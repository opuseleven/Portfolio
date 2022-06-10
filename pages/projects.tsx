import type { NextPage } from 'next';
import { Banner, Toolbar, ProjectSelector } from '../components';
import { Project } from '../types';
import { useState, useEffect } from 'react';

const Projects: NextPage = () => {

  const projectData = require('../data/projects.json');

  const [projects, setProjects] = useState<Project[]>(projectData);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [selectedId, setSelectedId] = useState(selectedProject.id);

  useEffect(() => {
    setSelectedProject(projects[selectedId - 1]);
  }, [selectedId])


  return (
    <div>

      <Banner />

      <Toolbar />

      <h3>Projects</h3>

      <div>

        <ProjectSelector selectedId={selectedId} setSelectedId={setSelectedId} />

      </div>

    </div>
  )
}
export default Projects;
