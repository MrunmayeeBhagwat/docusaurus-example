import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTopButton from '@theme/BackToTopButton';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HomepageHeader from '../../pages';
import ProjectList from '../../components/Project';
import PageHero from '../../components/PageHero/PageHero';


function Projects() {
  return (
    <Layout>
     <PageHero title={"My Academic Projects"} subtitle={"Checkout my academic projects listed below"} />
      <ProjectList />
      <BackToTopButton />
    </Layout>
  );
};

export default Projects;

