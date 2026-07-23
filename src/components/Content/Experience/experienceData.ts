type Experience = {
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  website: string;
};

export const experiences: Experience[] = [
  {
    period: "Dec 2019 — Dec 2024",
    company: "Brightcove",
    role: "Software Engineer",
    description:
      "Developed new features for the Beacon OTT platform while improving performance, code quality, and frontend architecture for Smart TV applications.",
    achievements: [
      "Reduced production bundle size by 20%.",
      "Reduced compilation times from 20 minutes to under 5 minutes.",
      "Developed features using React, Redux, React Router and custom Hooks.",
      "Implemented spatial navigation in Video.js for remote-control navigation.",
      "Improved maintainability through strategic refactoring and SonarQube.",
      "Supported TeamCity CI/CD pipelines and migration to Jenkins."
    ],
    technologies: [
      "React",
      "Redux",
      "React Router",
      "TypeScript",
      "Video.js",
      "Webpack",
      "TeamCity",
      "Jenkins",
      "SonarQube"
    ],
    website: "https://www.brightcove.com/"
  },

  {
    period: "Dec 2018 — Oct 2019",
    company: "Mobilender",
    role: "Frontend Developer",
    description:
      "Maintained fintech web applications and developed reusable frontend solutions while collaborating on backend Python features.",
    achievements: [
      "Maintained JavaScript frontend applications.",
      "Implemented backend features with Python.",
      "Built a scholarship onboarding platform.",
      "Created reusable Vue.js components."
    ],
    technologies: [
      "JavaScript",
      "Vue.js",
      "Django",
      "Python"
    ],
    website: "https://mobilender.mx/"
  },

  {
    period: "Jan 2017 — Sep 2018",
    company: "HAL 9000",
    role: "Frontend Developer",
    description:
      "Built reusable web components and responsive user interfaces for enterprise web applications.",
    achievements: [
      "Developed reusable Polymer and Vue.js components.",
      "Built responsive layouts with Flexbox.",
      "Worked with Bootstrap and Skeleton.",
      "Delivered cross-browser compatible interfaces."
    ],
    technologies: [
      "Polymer",
      "Vue.js",
      "JavaScript",
      "CSS",
      "Bootstrap",
      "Flexbox"
    ],
    website: "https://weareautomata.com/"
  }
];
