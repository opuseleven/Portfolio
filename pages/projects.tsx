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
        <title>Cody Clark&#39;s Development Portfolio - Projects</title>
        <meta name="description" content="Cody Clark&#39;s Development Portfolio Projects page" />
        <meta name="viewport"content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/CCMicon.ico" />
      </Head>

      <main className={styles.main}>

        <Banner />

        <Toolbar />

        <h3 className={styles.projectstitle}>Projects</h3>

        <div className={styles.projectcontainer}>

          <ProjectSelector selectedId={selectedId} setSelectedId={setSelectedId} />

          <div className={styles.projectdetailcontainer}>

            <ProjectInfo project={selectedProject} />

            <DisplayProject project={selectedProject} />

          </div>

        </div>

      </main>

      <footer className={styles.footer}>

        <p>View the source code <a href="https://github.com/opuseleven/Portfolio/blob/main/pages/projects.tsx"
          target="_blank" rel="noreferrer">here</a>
        </p>

      </footer>

    </div>
  )
}
export default Projects;
