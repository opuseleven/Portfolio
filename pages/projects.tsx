import type { NextPage } from 'next';
import { Banner, Toolbar, ProjectSelector, ProjectInfo, DisplayProject } from '../components';
import { Project } from '../types';
import { getProjectById } from '../services';
import { useState, useEffect } from 'react';

const Projects: NextPage = () => {

  const projectData = require('../data/projects.json');

  const [projects, setProjects] = useState<Project[]>(projectData);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [selectedId, setSelectedId] = useState(selectedProject.id);

  useEffect(() => {
    setSelectedProject(getProjectById(projects, selectedId));
  }, [selectedId])


  return (
    <div>

      <Banner />

      <Toolbar />

      <h3>Projects</h3>

      <div>

        <ProjectSelector selectedId={selectedId} setSelectedId={setSelectedId} />

        <ProjectInfo project={selectedProject} />

        <DisplayProject project={selectedProject} />

      </div>

    </div>
  )
}
export default Projects;
