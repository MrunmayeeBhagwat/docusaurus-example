import React from 'react';
import styles from './PageHero.module.css'
import clsx from 'clsx';



export default function PageHero({title, subtitle, children}) {
  return (

         <section className={clsx('hero hero--primary', styles.heroBanner)}>
              <div className="container">
                <h1 className="hero__title">{title}</h1>
                <p className="hero__subtitle">{subtitle}</p>
                {children}
              </div>
         </section>

  );
}
