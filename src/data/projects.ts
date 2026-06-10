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
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "mentorconnect",
    title: "MentorConnect",
    summary: "A campus-focused social networking platform that helps students connect, collaborate, and build mentor-student communities.",
    technologies: ["ReactJS", "Node.js", "Express.js", "MongoDB"],
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
    summary: "A sustainable waste management platform that improves recycling participation through clear tracking and simple community workflows.",
    technologies: ["Web Development", "Database Management"],
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
    summary: "A UI/UX redesign case study that improves menu navigation, ordering flow, and checkout usability in a modern mobile interface.",
    technologies: ["Figma", "UI/UX Design"],
    overview:
      "This redesign focuses on cleaner visual hierarchy and smoother user journeys from menu exploration to checkout, with an emphasis on consistency, accessibility, and usability.",
    highlights: [
      "Wireframes, user flows, prototypes, and high-fidelity screens",
      "Optimized menu navigation for faster browsing",
      "Improved ordering and checkout process",
      "Modern UI system with consistent component behavior",
    ],
    screenshot: burgerKingRedesignScreenshot,
  },
];

export const getProjectBySlug = (slug: string) => portfolioProjects.find((project) => project.slug === slug);
