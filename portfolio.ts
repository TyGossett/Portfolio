import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  StarQuestion,
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

export const skillsSection: SkillsSectionType = {
  title: 'Some of my projects',
  subTitle: 'Data Scientist with a passion for work that helps people.',
  data: [
    {
      title: 'Job Scoring',
      lottieAnimationFile: '/lottie/skills/JobScoring.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡Collaborated with business leaders to assess tech stack capabilities and identified opportunities to improve job matching for a top ten travel nursing and medical staffing agency.'
        ),
        emoji('⚡Developed a high-performing job scoring algorithm using Python and Salesforce data that exceeded traditional matching methods, resulting in a 30% increase in candidate placement rates and $1M in cost savings.'
        ),
        emoji('⚡Conducted data cleaning and preprocessing to ensure data quality and consistency, improving the accuracy and reliability of the algorithm.'
        ),
        emoji('⚡Presented findings and recommendations to executives and stakeholders, demonstrating the value of data science in driving business outcomes and gaining support for future data-driven initiatives.'
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
        emoji('⚡Implementation of a comprehensive data governance framework, ensuring that data is managed ethically and in compliance with relevant laws and regulations.'
        ),
        emoji('⚡Development of effective data integration processes, allowing the agency to extract insights from diverse sources of data and use them to inform business decisions.'
        ),
        emoji('⚡Creation of interactive and informative data visualizations that enable stakeholders to easily access and interpret complex information.'
        ),
        emoji('⚡Implementation of secure and scalable data storage architecture, ensuring the safe and efficient storage of the agency\'s data.'
        ),
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
          skillName: 'Talend',
          fontAwesomeClassName: 'simple-icons:talend',
        },
        {
          skillName: 'Tableau',
          fontAwesomeClassName: 'logos:tableau-icon',
        },
      ],
    },
    {
      title: 'Psychometric Survey Evaluation',
      lottieAnimationFile: '/lottie/skills/EmployeSatSurvey.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡Designed and implemented a psychometrically sound employee satisfaction survey using a variety of validated scales and measures, such as the Job Diagnostic Survey, the Organizational Commitment Questionnaire, and the Maslach Burnout Inventory.'
          ),
        emoji(
          '⚡Conducted data cleaning, preprocessing, and exploratory data analysis to ensure data quality and identify key drivers of employee satisfaction, engagement, and retention.'
          ),
        emoji('⚡Utilized statistical techniques, such as factor analysis and regression analysis, to identify and prioritize key factors that impact employee satisfaction and retention.'
        ),
        emoji('⚡Collaborated with cross-functional teams, including HR, talent management, and organizational development, to ensure successful implementation and adoption of survey results.'
        ),
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
          '⚡Designed and developed engaging lesson plans for high school students on complex mathematical concepts such as abstract algebra, graph theory, and logic.'
          ),
        emoji('⚡Utilized a student-centered approach to tailor lessons to the needs and abilities of individual learners, incorporating differentiated instruction, real-world applications, and interactive activities to make learning fun and engaging.'
        ),
        emoji('⚡Conducted formative assessments and utilized data-driven decision-making to measure student learning and adjust lesson plans to ensure student success.'
        ),
        emoji('⚡Demonstrated measurable results through assessments and evaluations, showcasing significant improvement in student achievement and engagement.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Canvas',
          fontAwesomeClassName: 'mdi:canvas',
        },
        {
          skillName: 'Desmos',
          fontAwesomeClassName: 'arcticons:desmos',
        },
        {
          skillName: 'Excel',
          fontAwesomeClassName: 'vscode-icons:file-type-excel',
        },
        {
          skillName: 'Blackboard',
          fontAwesomeClassName: 'icon-park:blackboard',
        },
        {
          skillName: 'Multimedia Tools',
          fontAwesomeClassName: 'mdi:multimedia',
        },
      ],
    },
  ],
};


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

export const StarBox = [
  'We prioritize diversity, equity, inclusion, and accessability.',
  'Our organization fosters collaboration and teamwork.',
  'We support and promote professional development and career growth within the organization.',
  'Developing a useful solution is more important than working for the sake of work.',
]

export const experience: ExperienceType[] = [
  {
    role: 'Data Scientist',
    company: 'PARQA',
    companyLogo: '/img/icons/common/Parqa Q.png',
    date: 'Jan 2022 - Current',
    desc: 'As a client-facing data scientist in a digital transformation agency that works with staffing firms, I analyze large amounts of staffing industry data to develop predictive models and segmentation strategies that optimize the performance of clients\' marketing campaigns and recruitment initiatives. I collaborate closely with clients to understand their business goals and requirements, and regularly communicate data-driven insights and recommendations to ensure they stay informed and achieve measurable results.',
  },
  {
    role: 'Tennis Professional',
    company: 'North East Ohio Tennis',
    companyLogo: '/img/icons/common/TennisRacket.png',
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
    name: 'Head Tutor',
    desc: ' I led a team of tutors and designed and implemented a comprehensive tutoring plan for 10-20 Rochester city school students. My goal was to provide personalized instruction and guidance to help these students prepare for the SAT, ACT, and New York State Exams. I worked closely with school administrators and teachers to identify student needs and develop individualized learning plans. As a result of our efforts, we saw a 20% increase in student test scores and improved academic performance. Demonstrating my commitment to community service and education, I volunteered over 100 hours of my time to help these students achieve academic success and access higher education opportunities. Through my work as a head tutor, I learned the importance of tailoring instruction to meet individual student needs and the transformative impact of education on individuals and communities.',
  },
  {
    name: 'Mystery Hunt Participant',
    desc: 'I honed my problem-solving skills by tackling complex puzzles and challenges with little information and a high degree of uncertainty in the yearly MIT mystery hunt. I learned the value of persistence and the importance of collaborating with others to share knowledge and expertise, resulting in successful completion of several challenging puzzles. Through this experience, I developed the ability to break down problems into manageable components, apply critical thinking and creative problem-solving techniques, and work effectively in a team environment. These skills have proven valuable in my work as a data scientist, where I am often faced with complex problems and incomplete information, and must rely on my ability to work collaboratively and persist in finding solutions.',
  },
  {
    name: 'USTA Team Captain',
    desc: 'Leading a successful adult USTA team that won states multiple times and was competitive on a national level provided me with the opportunity to develop my leadership and teamwork skills. As team captain, I was responsible for motivating and inspiring a diverse group of individuals with varying skill levels and backgrounds to work together toward common goals. Through effective communication and a commitment to excellence, we built a strong team culture based on mutual respect and trust. Our hard work and collaboration paid off on the court, resulting in multiple state championships and successful competition at a high level nationally. These experiences have taught me the importance of setting clear goals, fostering a supportive and inclusive team environment, and working collaboratively to achieve shared objectives. As a data scientist, I bring these same leadership and teamwork skills to my work, working effectively with colleagues and stakeholders to drive business outcomes and achieve success.'
  },
  {
    name: 'Kaggle Competitions',
    desc: 'Participating in Kaggle data science competitions provided me with a unique opportunity to apply my skills and knowledge in a competitive and collaborative environment. Through these competitions, I was able to work on real-world data science problems, utilizing a wide range of tools and techniques to develop predictive models and uncover insights. The competition format challenged me to think creatively and approach problems from new angles, resulting in innovative solutions and improved problem-solving skills. Additionally, working alongside other data scientists from around the world taught me the value of collaboration and the power of diverse perspectives. These experiences have helped me to become a more effective data scientist, bringing a broad range of skills and techniques to my work and collaborating effectively with colleagues to achieve shared objectives.',
  }
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
  {
  name: 'Amy Vaughan',
  feedback:
    '- He super aight',
  },
  {
  name: 'Amy Vaughan',
  feedback:
    '- He the most aight',
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
  image: 'https://avatars.githubusercontent.com/TyGossett',
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
