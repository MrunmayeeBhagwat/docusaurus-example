// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const projectName = 'docusaurus-example';
const userName = 'MrunmayeeBhagwat';

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Mrunmayee Bhagwat',
  tagline: 'QA Consultant at Thoughtworks | Aspiring Developer | Philomath ',
  url: 'https://MrunmayeeBhagwat.github.io',
  baseUrl: '/docusaurus-example/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/favicon.ico',
  organizationName:'MrunmayeeBhagwat',
  projectName: projectName, // Usually your repo name.
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: ['@docusaurus/plugin-ideal-image'],
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Mrunmayee Bhagwat',
        logo: {
                alt: 'Site Logo',
                src: 'img/logo-image.png',
                target: '_self',
                width: 32,
                height: 32,
              },
        items: [

           {
                                position: 'right',
                                to: '/Certifications',
                                label: 'Certifications'
                              },


          {to: '/AcademicProjects', label: 'Academic Projects', position: 'right'},
//          {
//                      position: 'right',
//                      to: '/PapersPresented',
//                      position: 'right',
//                      label: 'Papers Presented',
//          },
//          {to: '/Extracurricular', label: 'Extracurricular Activities', position: 'right'},
          {

                        href:`https://github.com/${userName}`,
                        'aria-label': 'GitHub profile',
                        className: 'header-github-link',
                        position: 'right',

          },
        ],
      },
        announcementBar: {
            id: 'support_us',
            content:
              '⭐️ If you like my website , give it a star on <a href="https://github.com/MrunmayeeBhagwat/docusaurus-example"> Github</a> ⭐️',
            backgroundColor: '#D6DBDF',
            textColor: '#091E42',
            isCloseable: false,
          },
      footer: {
              style: 'dark',
              links: [
                {
                  title: 'Community',
                  items: [
                    {
                      label: 'LinkedIn',
                      href: 'https://www.linkedin.com/in/mrunmayee-bhagwat-8a1090158',
                    },
                    {
                      label: 'Twitter',
                      href: 'https://twitter.com/MrunmayeeTweets',
                    },
                  ],
                },
                {
                  title: 'More',
                  items: [
                    {
                      label: 'Blogs',
                      to: '/blog',
                    },
                    {
                      label: 'GitHub',
                      href: `https://github.com/${userName}`,
                    },
                  ],
                },
              ],
              copyright: `Copyright © ${new Date().getFullYear()} Mrunmayee Bhagwat`,
              logo: {
                  alt: 'Some logo',
                  src: '/img/black-background-and-white-letter-m-grunge-vector-27974010.jpeg',
                  width: 100,
                  height: 120,// with respect to static dir
                },
            },
            prism: {
              theme: lightCodeTheme,
              darkTheme: darkCodeTheme,
              additionalLanguages: ['java', 'yaml'],
            },
          }),
        scripts: ['https://buttons.github.io/buttons.js'],
};


