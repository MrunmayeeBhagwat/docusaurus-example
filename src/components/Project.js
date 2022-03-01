import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from '/src/components/Project.module.css';


function Project({title,
description,
image,
duration}) {
  return ( 
         <article className={clsx(styles.Project, 'col col--4')}>
               <div className={styles.ProjectImage}>
                 <img src={useBaseUrl(image)} alt={title} />
               </div>
               <div className={styles.ProjectInfo}>
                 <h3 className={styles.ProjectTitle}>
                     {title}
                     <h4 className={styles.ProjectDuration}>{duration}</h4>
                 </h3>
                 <p className={styles.ProjectDescription}>{description}</p>
               </div>
             </article>
  );

};
export default function ProjectList({ projects }) {
  return (
    <section className={styles.ProjectsContainer}>
      <div className='container'>
        <div className='row'>
          {projects.map((project, idx) => (
            <Project key={idx}  {...project}/>

          ))}
        </div>
      </div>
    </section>
  );
};






