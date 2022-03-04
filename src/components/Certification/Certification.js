import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './certification.module.css';
import Data from './CertificationsData.json';


function Certification({name,
description,
image,
organisation,
date}) {
  return (
         <article className={clsx(styles.Certification, 'col col--4')}>
               <div className={styles.CertificationImage}>
                 <img src={useBaseUrl(image)} alt={name} />
               </div>
               <div className={styles.CertificationInfo}>
                 <h3 className={styles.CertificationTitle}>
                     {name}
                     <h4 className={styles.CertificationDuration}>{date}</h4>
                 </h3>
               </div>
                <h4 className={styles.CertificationDuration}>{organisation}</h4>
             </article>
  );

};
export default function CertificationList() {
const {certifications}=Data
  return (
    <section className={styles.CertificationsContainer}>
      <div className='container'>
        <div className='row'>
          {certifications.map((certification, idx) => (
            <Certification key={idx}  {...certification}/>
          ))}
        </div>
      </div>
    </section>
  );
};






