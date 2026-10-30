import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python",
  "Git & GitHub",
  "Vercel",
];

const learning = [
  {
    title: "AWS cloud fundamentals",
    text: "Completed AWS Cloud Practitioner Essentials on AWS Skill Builder. Now doing hands-on labs with Lambda, API Gateway and DynamoDB.",
  },
  {
    title: "Deploying to the cloud",
    text: "I made my first hands-on deployment with AWS Amplify. This site now runs on Vercel, and I'll keep improving it as I learn.",
  },
  {
    title: "React",
    text: "Taking Complete Intro to React v9 on Frontend Masters, building a pizza ordering app.",
  },
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/angel-isasi-oyolo/" },
  { label: "GitHub", href: "https://github.com/Angel-Isasi" },
  { label: "angelisasi2.14@gmail.com", href: "mailto:angelisasi2.14@gmail.com", external: false },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-[760px] px-5 py-16">
      <header className="mb-12">
        <span className="mb-4 inline-block rounded-full border border-accent px-3 py-0.5 text-[13px] text-accent">
          Open to internships · Remote
        </span>
        <h1 className="mb-2 text-[clamp(32px,6vw,48px)] font-bold leading-[1.1]">
          Angel Isasi
        </h1>
        <p className="text-lg text-muted">
          Frontend Developer · Systems Engineering student · Ica, Peru
        </p>
      </header>

      <section className="mb-10">
        <h2 className="mb-3.5 text-xl font-bold">About me</h2>
        <p className="text-muted">
          I&apos;m a Systems Engineering student at Universidad Nacional San Luis
          Gonzaga (UNICA). I build web interfaces with JavaScript, React and
          Next.js, and I&apos;m now learning cloud fundamentals with AWS to grow
          toward a full stack profile.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-3.5 text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-line bg-card px-3 py-1.5 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3.5 text-xl font-bold">Currently learning</h2>
        <div className="space-y-3">
          {learning.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-line bg-card p-5"
            >
              <strong className="mb-1 block">{item.title}</strong>
              <p className="text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="mb-10">
        <h2 className="mb-3.5 text-xl font-bold">Projects</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="mb-3.5 text-xl font-bold">Contact</h2>
        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external !== false && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="rounded-lg bg-foreground px-[18px] py-2.5 text-[15px] font-semibold text-background transition-colors hover:bg-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-line pt-5 text-[13px] text-muted">
        © 2026 Angel Isasi · angel-isasi.com
      </footer>
    </main>
  );
}