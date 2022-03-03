import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomePageFeatures/HomepageFeatures';
import GitHubButton from 'react-github-btn';
import BackToTopButton from '@theme/BackToTopButton';
import PageHero from '../components/PageHero/PageHero';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (

        <PageHero title={siteConfig.title} subtitle={siteConfig.tagline} >
          <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/About">
                    About Me
                  </Link>
                </div>
           <GitHubButton href="https://github.com/MrunmayeeBhagwat" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @MrunmayeeBhagwat on GitHub">Follow @MrunmayeeBhagwat</GitHubButton>
        </PageHero>

  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
       <BackToTopButton />
    </Layout>
  );
}
