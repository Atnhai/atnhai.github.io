// gitprofile.config.js

const config = {
  github: {
    username: 'atnhai', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 2, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'thawanrat-atthawiwatkul',
    twitter: '',
    mastodon: '',
    facebook: '',
    instagram: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // format: userid/username
    skype: '',
    telegram: '',
    website: 'https://atnhai.github.io/',
    phone: '092-781-7438',
    email: 'atnhai@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1PS0_U-utVK1E17cyxE2csvCLPnEQ6r52/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'React Native',
    'Java',
    'JavaScript',
    'Python',
    'HTML',
    'CSS',
    'C++',
    'C programming',
    'SQL Database',
    'Git',
    'Human-Computer Interaction',
    'Embedded System Software',
    'Computer and Network security',
    'Microprocessor (LPC1769)',
    'Arduino',
    'Raspberry Pi',
  ],
  experiences: [
    {
      company: 'Stelligence Company Limited',
      position: 'FULL STACK DEVELOPER (INTERNSHIP)',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://stelligence.com/',
    },
    {
      company: 'A T PRO CO., LTD.',
      position: 'Software Engineer',
      from: 'June 2021',
      to: 'July 2021',
      companyLink: 'http://www.atprothai.com/',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'King Mongkuts Institute of Technology Ladkrabang',
      degree: 'Bachelor of Engineering - BESoftware Engineering',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'BODINDECHA (SING SINGHASENI) 2 SCHOOL',
      degree: 'High school diploma IEP program(Science and Math)',
      from: '2016',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'KMITL Umbrella',
      description:
        '(React Native, Java, JavaScript, CSS): Created an Android application for renting umbrellas from lockers around the university.',
      imageUrl: 'https://cdn.discordapp.com/attachments/699486327493754910/1111809767942402088/Screenshot_20230526-191535_KMITL_Umbrella.jpg',
      link: 'https://docs.google.com/document/d/1484UF6LVydnd6Vfx2nzVtNMPFZu3cJxNydoEZ7W9f-E/edit?usp=sharing',
    },
    {
      title: 'Ask-It',
      description:
        'A web-based platform for students to ask and receive answers to homework questions from staff. Utilized MERN stack and GraphQL for seamless user experience.',
      imageUrl: 'https://static.vecteezy.com/system/resources/previews/004/413/153/original/outlined-icon-of-group-of-people-doing-discussion-suitable-for-design-element-of-teamwork-discussion-social-networking-and-business-forum-free-vector.jpg',
      link: 'https://github.com/Atnhai/AskIt-Webboard/tree/master',
    },
    {
      title: 'KMITL Planner',
      description:
        '(HTML, CSS, Django): Designed and implemented a website for more accessible education for students, teachers, and administration.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120609370686885938/image.png',
      link: 'https://docs.google.com/document/d/1L2JUwODkBon09mjFgF36eUFd986aqB0DFFdawcQqCHY/edit?usp=sharing',
    },
    {
      title: 'Woman and Children Safety Application',
      description:
        '(Java, Android Studio): Developed an Android application that enhances safety for women and children.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120605556969844877/Screenshot_20230620-134550_Woman_and_Children_Safety_App.jpg',
      link: 'https://docs.google.com/document/d/1Y32tLpERD5In5hx09pBboNMU7E0-OclxADZLrKHWtXA/edit?usp=sharing',
    },
    {
      title: 'Vital Monitoring Device',
      description:
        '(Java, C++, MQTT): Built a device that measures body temperature, heart rate, and SpO2 and displays data on an Android application.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120605556789493852/Screenshot_20230620-134530_Vital_Monitoring_Device.jpg',
      link: 'https://docs.google.com/document/d/1viBxLdROdFpy40gf7NayOdQl_3S9COBCxK8XA2x29ks/edit?usp=sharing',
    },
    {
      title: 'Weather',
      description:
        '(Java, Android Studio): Created an Android application that displays weather information.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120605557213122600/Screenshot_20230620-134604_Weather.jpg',
      link: 'https://github.com/Atnhai/Weather-App',
    },
    {
      title: 'Fresh',
      description:
        '(Python): Developed a platform for buying and selling vegetables.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120610288379637830/image.png',
      link: 'https://docs.google.com/document/d/1tY7aqUqvaytjkSv-ZwzxG3XThrsC5CRLIqC9SsEuirQ/edit?usp=sharing',
    },
    {
      title: 'TelloFaceTracking',
      description:
        'Face Tracking function with Tello Drone',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120615608896200794/image.png',
      link: 'https://github.com/Atnhai/Internship2021',
    },
    {
      title: 'Activities@KMITL Figma design',
      description:
        'Actvities@kmitl is developed to help KMITL students find someone who has the same purpose and wants to do the activities together.Actvities@kmitl will analyze people who posted near you and have the same purpose as you. By calculating the distance between you and the location. then analyze the nearest destination for the activities that you are interested in.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120599633232658512/image.png',
      link: 'https://www.figma.com/file/MuD9dMq9guVvUdbKPepRXJ/Activities%40KMITL-UI?type=design&node-id=0%3A1&t=odVTVP5uY0kaNWUS-1',
    },
    {
      title: 'KMITL Umbrella Figma design',
      description:
        'KMITL Umbrella strives to provide a proactive solution for students who often find themselves at the mercy of unpredictable weather. With our low-cost umbrella rental system, students can rent umbrellas from vending machines conveniently located around the campus. Our mobile application, the brainchild of a progressive software engineering project, not only guides users to the nearest vending machine but also simplifies the payment process through seamless integration with PromptPay on any preferred bank application.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120600496265248798/image.png',
      link: 'https://www.figma.com/file/kwbdWS0Xrzf7JQxFzSJY5q/UI-Draft?type=design&node-id=0%3A1&t=i8awCNfUErpRqWHU-1',
    },
    {
      title: 'Tic Tac Toe Smart AI',
      description:
        'Programmed an intelligent Tic Tac Toe game using Python and Prolog.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120614808996294727/image.png',
      link: 'https://docs.google.com/document/d/1Wh5J_FJ1N2HTOcSEPTE4i1DDvJUQQlNfF2jILkG1ylk/edit?usp=sharing',
    },
    {
      title: 'Real Price',
      description:
        '(C++, QT): Developed a GUI application that includes six different calculators for various tasks.',
      imageUrl: 'https://cdn.discordapp.com/attachments/1012386307881844847/1120616714212737024/image.png',
      link: 'https://github.com/Atnhai/RealPrice',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'wireframe',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
