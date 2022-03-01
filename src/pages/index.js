import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import GitHubButton from 'react-github-btn';
import BackToTopButton from '@theme/BackToTopButton';




function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/About">
            About Me
          </Link>
        </div>
   <GitHubButton href="https://github.com/MrunmayeeBhagwat" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @MrunmayeeBhagwat on GitHub">Follow @MrunmayeeBhagwat</GitHubButton>        </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
       <BackToTopButton />
    </Layout>
  );
}
