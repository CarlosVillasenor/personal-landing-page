type Project = {
  title: string;
  description: string;
  technologies: string[];
  website: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Spatial Navigation",
    description:
      "Spatial Navigation in Video.js enhances user experience and accessibility on smart TV devices. This functionality enables seamless navigation through interactive elements within the player using remote control arrow keys.",
    technologies: ["Javascript", "Typescript"],
    website: "https://legacy.videojs.org/guides/spatial-navigation/",
    image: "spatial-navigation.png"
  },
  {
    title: "NextLevel Food",
    description: "NextLevel Food is a platform for foodies to share their favorite recipes with the world. It's a place to discover new dishes, and to connect with other food lovers.",
    technologies: ["React", "Next.js", "Tailwind CSS", "BetterSQLite"],
    website: "https://onwards-foodies-project.vercel.app/",
    image: "nextlevel-food.png"
  },
  {
    title: "Management React Project",
    description: "A basic react management app to create a set of \"projects\" as a goal represented with cards with title, description, due date & a set of tasks to complete.",
    technologies: ["React", "Tailwind CSS", "React Context", "JavaScript"],
    website: "https://management-react-project.vercel.app/",
    image: "management-react-project.png"
  },
  {
    title: "Puertas Automaticas Castillo",
    description: "Responsive business landing page for an startup company built with HTML5, SCSS, Bootstrap, JavaScript, and jQuery.",
    technologies: ["HTML5", "CSS3", "JavaScript", "SCSS", "Bootstrap", "jQuery", "Gulp"],
    website: "https://pac-landing-page-plum.vercel.app/",
    image: "puertas-automaticas-castillo.png"
  },
  {
    title: "Tic Tac Toe Game",
    description: "A classic Tic Tac Toe game, building this project helped me to improve my React skills and learn about state management, component structure, and event handling.",
    technologies: ["React", "Vite", "JavaScript", "CSS"],
    website: "https://tic-tac-toe-react-project-woad.vercel.app/",
    image: "tic-tac-toe-game.png"
  }
];
