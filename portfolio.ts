import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Ty Gossett',
  title: "Hi all, I'm Ty Gossett",
  description:
    "I'm an experienced data scientist skilled in predictive modeling, machine learning algorithms, and data analysis strategies. Passionate about leveraging statistical analysis, data visualization, and programming to drive revenue growth, cost savings, and process efficiencies for clients. Effective communicator and collaborative team player committed to solving complex business challenges through the power of data science.",
  resumeLink:
    'https://1drv.ms/b/s!AoJRZTfHBX6ngkAqa0JZWPgBbvEb?e=7gyVMq',
};

export const openSource = {
  githubUserName: 'TyGossett',
};

export const contact = {};

export const socialLinks = {
  url: 'https://ty-portfolio-7omflpmtx-twg2767-ritgit-page.vercel.app/',
  linkedin: 'https://www.linkedin.com/in/ty-gossett-254382a5/',
  github: 'https://github.com/TyGossett',
  instagram: 'https://www.instagram.com/gossettty/',
};

export const projects: ProjectType[] = [
  {
    name: 'Job Scoring',
    desc: 'Collaborated with business leaders of a top ten travel nursing and medical staffing agency to assess their tech stack capabilities and develop a high-performing job scoring algorithm using Python and Salesforce data. The algorithm aimed to match candidates with relevant contracts and exceeded traditional matching methods.',
  },
  {
    name: 'Data Strategy',
    desc: 'Developed and implemented a comprehensive data strategy for a New York-based medical staffing firm, collaborating closely with stakeholders to ensure data privacy, integrity, and quality. The cross-functional initiative included implementing a data model that better aligned the firm\'s database with their ongoing business and marketing objectives.',
  },
  {
    name: 'Employee Satisfaction Survey',
    desc: 'Conducted research and utilized advanced statistical analysis techniques, such as factor analysis and item response theory, to develop an employee satisfaction survey for a large organization. Developed analysis tools in Python to streamline data processing and improve accuracy, resulting in a 20% increase in employee satisfaction and retention.',
  },
  {
    name: 'Lesson Plan Development',
    desc: 'Simplified and visualized complex mathematical concepts such as abstract algebra, graph theory, and logic for high school students, incorporating real-world applications and interactive activities to make learning engaging and fun. ',
  },
];

export const skillsSection: SkillsSectionType = {
  title: 'Some of my projects',
  subTitle: 'Data Scientist with a passion for work that helps people.',
  data: [
    {
      title: 'Job Scoring',
      lottieAnimationFile: '/lottie/skills/JobScoring.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Collaborated with business leaders of a top ten travel nursing and medical staffing agency to assess their tech stack capabilities and develop a high-performing job scoring algorithm using Python and Salesforce data. The algorithm aimed to match candidates with relevant contracts and exceeded traditional matching methods.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Salesforce',
          fontAwesomeClassName: 'logos:salesforce',
        },
        {
          skillName: 'LaTex',
          fontAwesomeClassName: 'skill-icons:latex-dark',
        },
        {
          skillName: 'Machine Learning',
          fontAwesomeClassName: 'carbon:machine-learning-model',
        },
        {
          skillName: 'numpy',
          fontAwesomeClassName: 'logos:numpy',
        },
        {
          skillName: 'SciKitLearn',
          fontAwesomeClassName: 'simple-icons:scikitlearn',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        }
      ],
    },
    {
      title: 'Data-Strategy',
      lottieAnimationFile: '/lottie/skills/DataStrategy.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Conducted research and utilized advanced statistical analysis techniques, such as factor analysis and item response theory, to develop an employee satisfaction survey for a large organization. Developed analysis tools in Python to streamline data processing and improve accuracy, resulting in a 20% increase in employee satisfaction and retention.'),
        emoji('⚡ Successfully implemented a data model that better aligned their database with their ongoing business and marketing objectives.'),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'HubSpot',
          fontAwesomeClassName: 'logos:hubspot',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'SQL',
          fontAwesomeClassName: 'logos:mysql',
        },
        {
          skillName: 'Client training',
          fontAwesomeClassName: 'material-symbols:on-device-training',
        },
      ],
    },
    {
      title: 'Psychometric Survey Evaluation',
      lottieAnimationFile: '/lottie/skills/EmployeSatSurvey.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Conducted research and utilized advanced statistical analysis techniques, such as factor analysis and item response theory, to develop an employee satisfaction survey for a large organization. Developed analysis tools in Python to streamline data processing and improve accuracy, resulting in a 20% increase in employee satisfaction and retention.'),
        emoji(
          '⚡ Developed analysis tools in Python to streamline data processing and improve accuracy, resulting in a 20% increase in employee satisfaction and retention.'),
      ],
      softwareSkills: [
        {
          skillName: 'SPSS',
          fontAwesomeClassName: 'carbon:ibm-cloud-pak-manta-automated-data-lineage',
        },
        {
          skillName: 'Slack',
          fontAwesomeClassName: 'logos:slack-icon',
        },
        {
          skillName: 'Asana',
          fontAwesomeClassName: 'logos:asana-icon',
        },
        {
          skillName: 'Measurement',
          fontAwesomeClassName: 'gis:measure-line',
        },
        {
          skillName: 'SurveyMonkey',
          fontAwesomeClassName: 'simple-icons:surveymonkey',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'MatLab',
          fontAwesomeClassName: 'vscode-icons:file-type-matlab',
        },
      ],
    },
    {
      title: 'Lesson Plan Development',
      lottieAnimationFile: '/lottie/skills/LessonPlan.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Simplified and visualized complex mathematical concepts such as abstract algebra, graph theory, and logic for high school students, incorporating real-world applications and interactive activities to make learning engaging and fun.'),
      ],
      softwareSkills: [
        {
          skillName: 'Tennis',
          fontAwesomeClassName: 'emojione:tennis',
        },
        {
          skillName: 'Effective Communication',
          fontAwesomeClassName: 'icon-park:communication',
        },
        {
          skillName: 'Measureable Results',
          fontAwesomeClassName: 'tabler:ruler-measure',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Data Visualization', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Machine Learning',
    progressPercentage: '70',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo = [
  {
    schoolName: 'Rochester Institute of Technology',
    subHeader: 'Bachelor of Science in Applied Mathematics',
    duration: 'August 2013 - December 2018',
    desc: '',
    descBullets: [
      'Head Tutor: RIT youth outreach high school tutor program',
      'Member: Rock climbing club, Club tennis, Juggling Club, Debate Club',
    ],
  },
  {
    schoolName: 'Kent State University',
    subHeader: 'Masters of Education in Research, Measurement, and Statistics',
    duration: 'Auguts 2020 - current',
    desc: '',
  }
];

export const experience: ExperienceType[] = [
  {
    role: 'Data Scientist',
    company: 'PARQA',
    companyLogo: '/img/icons/common/ParqaLogo.png',
    date: 'Apr 2022 – Jun 2022',
    desc: 'As a client-facing data scientist in a marketing agency startup that works with staffing firms, I analyze large amounts of staffing industry data to develop predictive models and segmentation strategies that optimize the performance of clients\' marketing campaigns and recruitment initiatives. I collaborate closely with clients to understand their business goals and requirements, and regularly communicate data-driven insights and recommendations to ensure they stay informed and achieve measurable results.',
  },
  {
    role: 'Tennis Professional',
    company: 'North East Ohio Tennis',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'May 2014 – January 2022',
    desc: 'Developed and implemented measurable solutions that improved tennis players\' physical fitness, game knowledge, technique, and teamwork while fostering an inclusive learning environment that effectively communicated the intricacies of tennis to individuals with varying levels of experience and from diverse socioeconomic backgrounds.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
];


export const feedbacks: FeedbackType[] = [
  {
    name: 'Ty\'s Mom',
    feedback:
      '- He\'s cool and knows data science.',
  },
  {
    name: 'Amy Vaughan',
    feedback:
      '- He aight',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Ty Gossett',
  description:
    'A portfolio site of Data Scientist Ty Gossett',
  author: 'Ty Gossett',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://ty-portfolio-cfp94mtzq-twg2767-ritgit-page.vercel.app/',
  keywords: [
    'Ty',
    'Ty Gossett',
    'GossettTy',
    'Portfolio',
    'Ty Portfolio ',
    'Ty Gossett Portfolio',
  ],
};
