export type Project = {
  title: string;
  description: string;
  tech: string[];
  type: string;
  status: "Live" | "In progress";
  demoUrl?: string;
  repoUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "La Silenciosa",
    description:
      "Website for a restaurant in Guatemala with a product catalog and WhatsApp ordering. Built with Next.js and CSS, deployed on Vercel. I handle its monthly maintenance.",
    tech: ["Next.js", "CSS", "Vercel"],
    type: "Client project",
    status: "Live",
    demoUrl: "https://lasilenciosa.com",
    image: "/projects/la-silenciosa.png",
  },
  {
    title: "Sistema de turnos UNICA",
    description:
      "Queue and ticket management web app for administrative services at UNICA. I'm responsible for the architecture and frontend; backend implementation in progress.",
    tech: ["React", "Vite", "Tailwind CSS", "FastAPI", "MySQL", "JWT"],
    type: "University project",
    status: "In progress",
    demoUrl: "https://sistema-turnos-unica.vercel.app",
    repoUrl: "https://github.com/angel-isasi/sistema-turnos-unica",
    image: "/projects/sistema-turnos-unica.png",
  },
  {
    title: "Mini OneDrive on AWS",
    description:
      "Serverless file storage platform with user authentication, folders and trash, built on Cognito, S3, API Gateway, Lambda, DynamoDB and CloudFront. I took part in the architecture design and wireframes.",
    tech: ["React", "AWS CDK", "Cognito", "S3", "API Gateway", "Lambda", "DynamoDB", "CloudFront"],
    type: "Team project",
    status: "In progress",
  },
  {
    title: "Word Masters",
    description:
      "Wordle clone built with vanilla HTML, CSS and JavaScript. Consumes an API with fetch to get and validate words.",
    tech: ["HTML", "CSS", "JavaScript"],
    type: "Course project",
    status: "In progress",
    demoUrl: "https://word-masters-beta.vercel.app",
    repoUrl: "https://github.com/angel-isasi/word-masters",
    image: "/projects/word-masters.png",
  },
];
