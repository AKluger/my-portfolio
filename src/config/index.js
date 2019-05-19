module.exports = {
  siteTitle: 'Alex Kluger | Web Developer',
  siteDescription:
    'Alex Kluger is a web developer in Philadelphia, PA who specializes in developing (and occasionally designing) exceptional, high-quality websites and applications.',
  siteKeywords:
    'Alex Kluger, Alex, Kluger, web developer, software engineer, front-end engineer, javascript, northeastern',
  siteUrl: 'https://alexkluger.com',
  siteLanguage: 'en_US',

  // googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Alex Kluger',
  location: 'Philadelphia, PA',
  email: 'aikluger@gmail.com',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/AKluger',
    },
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/akluger',
    },
    // {
    //   name: 'AngelList',
    //   url: 'https://angel.co/alex-kluger',
    // },
    // {
    //   name: 'Twitter',
    //   url: 'https://twitter.com/bchiang7',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  // twitterHandle: '@bchiang7',
  // googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#020c1b',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
