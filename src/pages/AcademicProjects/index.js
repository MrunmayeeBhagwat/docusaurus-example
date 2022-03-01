import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTopButton from '@theme/BackToTopButton';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from '../../components/Project.module.css';
import React from 'react';
import HomepageHeader from '../../pages';
import ProjectList from '../../components/Project';
import Data from '/Users/mrunmayee.bhagwat/Documents/docusaurus-example/src/components/ProjectData.json';

function Projects() {
  return (
    <Layout>
      <section className={clsx('hero hero--primary', styles.heroBanner)}>
           <div className="container">
             <h1 className="hero__title">{Data.title}</h1>
             <p className="hero__subtitle">{Data.description}</p>
             <div className={styles.buttons}>
             </div>
           </div>
         </section>
      <ProjectList projects={Data.projects} />
      <BackToTopButton />
    </Layout>
  );
};

export default Projects;

