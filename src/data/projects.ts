import mentorConnectScreenshot from "../../mentorconnect.png";
import waste2WorthScreenshot from "../../waste2worth.png";
import burgerKingRedesignScreenshot from "../../burgerkingredesign.png";

export type PortfolioProject = {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  overview: string;
  highlights: string[];
  screenshot: string;
  liveUrl?: string;
  repositoryUrl?: string;
  prototypeUrl?: string;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "mentorconnect",
    title: "MentorConnect",
    summary: "Campus networking platform connecting students, mentors and communities.",
    technologies: ["React", "Express", "MongoDB"],
    overview:
      "MentorConnect is built for campus life. Students can create profiles, share posts, and engage with peers and mentors in one digital space designed around learning and interaction.",
    highlights: [
      "User authentication and profile management",
      "Post sharing and community engagement flows",
      "Mentor-student interactions and knowledge sharing",
      "Responsive interface optimized for student communication",
    ],
    screenshot: mentorConnectScreenshot,
  },
  {
    slug: "waste2worth",
    title: "Waste2Worth",
    summary: "AI-powered sustainability platform promoting responsible waste management.",
    technologies: ["React", "Node.js", "MongoDB", "Machine Learning"],
    overview:
      "Waste2Worth encourages responsible waste disposal and better segregation habits through a centralized interface where users can track recyclable waste and engage in eco-focused initiatives.",
    highlights: [
      "Centralized recyclable waste management",
      "Tracking system for segregation and responsible disposal",
      "Simple interface to increase community participation",
      "Awareness-first product direction for environmental impact",
    ],
    screenshot: waste2WorthScreenshot,
  },
  {
    slug: "burger-king-redesign",
    title: "Burger King Mobile App Redesign",
    summary: "A UI/UX redesign focused on improving navigation, visual hierarchy, and ordering experience.",
    technologies: ["Figma", "Wireframing", "UI Design", "Prototyping"],
    overview:
      "Burger King Mobile App Redesign is a student UI/UX redesign project focused on improving navigation, visual hierarchy, and the ordering experience through refreshed screens created in Figma.",
    highlights: [
      "Cleaner homepage",
      "Better menu discovery",
      "Improved navigation",
      "More consistent visual design",
      "Better user flow",
    ],
    screenshot: burgerKingRedesignScreenshot,
    prototypeUrl: "https://www.figma.com/design/MazJxPQ5j26R03EHKvEwiM/Burger-King-Redesign",
  },
];

export const getProjectBySlug = (slug: string) => portfolioProjects.find((project) => project.slug === slug);
