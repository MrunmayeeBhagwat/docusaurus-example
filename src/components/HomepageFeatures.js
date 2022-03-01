import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Creativity',
    Svg: require('../../static/img/undraw_creativity_re_8grt.svg').default,
    description: (
      <>
        Creativity skills help me in being effective at workplace.
        Some of the creativity skills I possess include:<code> Making connections,
        Asking questions, Making observations, Networking, Experimenting</code>
      </>
    ),
  },
  {
    title: 'Problem Solving Ability',
    Svg: require('../../static/img/problem_solving.svg').default,
    description: (
      <>
        Unlike conceptual skills, which are about abstract thinking and ideation, problem-solving skills are to be a big part connected to being proactive when it comes to the implementation of my ideas.
      </>
    ),
  },
  {
    title: 'Team Player',
    Svg: require('../../static/img/teamplayer.svg').default,
    description: (
      <>
       I possess the following good qualities of a team teamplayer
       <code> 1)Commitment to ensuring the team succeeds with all tasks, duties and projects. </code>
       <code> 2)Willingness to help a team member in need. </code>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
       <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="#">
                  My Personal Skills
                </Link>
              </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
