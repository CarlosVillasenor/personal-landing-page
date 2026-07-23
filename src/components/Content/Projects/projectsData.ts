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
  }
];