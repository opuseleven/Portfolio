import type { NextPage } from 'next';
import Head from 'next/head';
import { Banner, Toolbar, ProjectSelector, ProjectInfo, DisplayProject } from '../components';
import { Project } from '../types';
import { getProjectById } from '../services';
import { useState, useEffect } from 'react';
import styles from '../styles/Projects.module.css';

const Projects: NextPage = () => {

  const projectData = require('../data/projects.json');

  const [projects, setProjects] = useState<Project[]>(projectData);
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  const [selectedId, setSelectedId] = useState(selectedProject.id);

  useEffect(() => {
    setSelectedProject(getProjectById(projects, selectedId));
  }, [selectedId])


  return (
    <div className={styles.container}>

      <Head>
        <title>Cody Clark's Development Portfolio - Projects</title>
        <meta name="description" content="Cody Clark's Development Portfolio Projects page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

        <h3 className={styles.projectstitle}>Projects</h3>

        <div className={styles.projectcontainer}>

          <ProjectSelector selectedId={selectedId} setSelectedId={setSelectedId} />

          <ProjectInfo project={selectedProject} />

          <DisplayProject project={selectedProject} />

        </div>

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="" target="_blank">here</a></p>

      </footer>

    </div>
  )
}
export default Projects;
