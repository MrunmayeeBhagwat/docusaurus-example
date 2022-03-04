import useBaseUrl from '@docusaurus/useBaseUrl';
import BackToTopButton from '@theme/BackToTopButton';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React from 'react';
import HomepageHeader from '../../pages';
import CertificationList from '../../components/Certification';
import PageHero from '../../components/PageHero/PageHero';

function Certifications() {
  return (
    <Layout>
     <PageHero title={"Technical Certifications"} />
      <CertificationList />
      <BackToTopButton />
    </Layout>
  );
};

export default Certifications;

