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
    "I'Experienced data scientist skilled in predictive modeling, machine learning algorithms,and data analysis strategies. Passionate about leveraging statistical analysis, data visualization, and programming to drive revenue growth, cost savings, and process efficiencies for clientsm passionate Full Stack web developer having an experience of web applications with Python, Django, React.js, Next.js and Blockchain development on Ethereum, Solidity, Web3.js, Moralis, and Brownie Framework.",
  resumeLink:
    'https://1drv.ms/b/s!AoJRZTfHBX6ngkDoPH6vojaubAv5?e=Ql3ykU',
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
  facebook: 'https://www.facebook.com/',
  twitter: 'https://www.twitter.com/'
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'Data Scientist with a passion for work that helps people.',
  data: [
    {
      title: 'Data Science',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Machine learning with libraries like NumPy, SciKitLearn, and Pandas'
        ),
        emoji('⚡ Data visualization with BI tools and packages like Seaborn and MatPlotLib'),
        emoji('⚡ Using API\'s to better set up clients for success within applicant tracking systems.'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Python',
          fontAwesomeClassName: 'logos:python',
        },
        {
          skillName: 'Django',
          fontAwesomeClassName: 'vscode-icons:file-type-django',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Ethereum',
          fontAwesomeClassName: 'logos:ethereum',
        },
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
        {
          skillName: 'Ganache',
          fontAwesomeClassName: 'logos:ganache-icon',
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
    companylogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Apr 2022 – Jun 2022',
    desc: 'As a client-facing data scientist in a marketing agency startup that works with staffing firms, I analyze large amounts of staffing industry data to develop predictive models and segmentation strategies that optimize the performance of clients\' marketing campaigns and recruitment initiatives. I collaborate closely with clients to understand their business goals and requirements, and regularly communicate data-driven insights and recommendations to ensure they stay informed and achieve measurable results.',
    descBullets: [ 
      'Developed and implemented a highly effective machine learning algorithm using Python that matched jobs with applicants, resulting in a 200% increase in candidate engagement and leading to more successful matches while significantly improving recruiter efficiency.',
      'Collaborated with C-suite executives to align business goals and priorities, leveraging advanced statistical analysis and data visualization techniques to drive informed decision-making and foster a culture of data-driven innovation.',
      'Led development of marketing measurement plans in close partnership with enterprise marketing leaders, utilizing SQL and Salesforce to accurately track and optimize campaigns that ultimately drove a 10% increase in customer acquisition.',
      'Worked cross-functionally with strategic teams to deliver prioritized marketing strategies with estimated outcomes, leveraging A/B testing, predictive modeling, and data mining techniques.',
      'Effectively visualized complex data insights using packages such as Matplotlib and Seaborn to communicate key findings and recommendations to business stakeholders, enabling informed decision-making and driving business impact.',
      'Developed a comprehensive measurement strategy solution that\'s now standard in the first sale SOW, generating $30,000 per client.',
    ]
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

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      '- Oh Ty? He rocks',
  },
  {
    name: 'John Smith',
    feedback:
      '- I second the above comment',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Hanzla Tauqeer',
  description:
    'A passionate Full Stack Web Developer and Blockchain Developer.',
  author: 'Hanzla Tauqeer',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Hanzla',
    'Hanzla Tauqeer',
    '@1hanzla100',
    '1hanzla100',
    'Portfolio',
    'Hanzla Portfolio ',
    'Hanzla Tauqeer Portfolio',
  ],
};
