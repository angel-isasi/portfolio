import CopyEmailButton from "@/components/CopyEmailButton";
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
    title: "React",
    text: "Taking Complete Intro to React v9 on Frontend Masters, building a pizza ordering app.",
  },
];

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/angel-isasi-oyolo/" },
  { label: "GitHub", href: "https://github.com/angel-isasi" },
  { label: "angelisasi2.14@gmail.com", copyEmail: true },
];

const heroLinks = [
  { label: "GitHub", href: "https://github.com/angel-isasi" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/angel-isasi-oyolo/" },
  { label: "Email", copyEmail: true },
  { label: "CV", href: "/CV_Angel_Isasi_Oyolo.pdf" },
];

function Section({
  title,
  id,
  children,
}: {
  title: string;
  id?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="grid gap-5 border-t border-line pt-10 md:grid-cols-[160px_1fr] md:gap-10"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted md:pt-1.5">
        {title}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}


export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-16 px-5 py-16 md:space-y-20 md:px-8 md:py-24">
      <header className="grid gap-10 md:grid-cols-[1fr_300px] md:gap-16">
        <div>
          <h1 className="mb-3 text-[clamp(36px,7vw,60px)] font-bold leading-[1.05] tracking-tight">
            Angel Isasi
          </h1>
          <p className="mb-8 text-lg text-muted md:text-xl">
            Systems Engineering student · Frontend development · Ica, Peru
          </p>
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
            About me
          </h2>
          <p className="max-w-[60ch] text-[17px] leading-relaxed text-foreground/85">
            I&apos;m a Systems Engineering student at Universidad Nacional San Luis
            Gonzaga (UNICA). I build web interfaces with JavaScript, React and
            Next.js, and I&apos;m now learning cloud fundamentals with AWS to grow
            toward a full stack profile.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:pt-3">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/50 px-3 py-1 text-[13px] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Open to internships · Remote / On-site (Ica)
          </span>
          <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
            {heroLinks.map((link) => (
              <li key={link.label}>
                {link.copyEmail ? (
                  <CopyEmailButton
                    label={link.label}
                    className="w-full cursor-pointer text-left flex items-center justify-between rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-line-hover"
                  />
                ) : (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg border border-line bg-card px-4 py-2.5 text-[15px] font-medium transition-colors hover:border-line-hover"
                  >
                    {link.label}
                    <span aria-hidden className="text-muted">
                      ↗
                    </span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </header>

      <Section title="Skills & learning">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Skills</h3>
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
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">Currently learning</h3>
            <div className="space-y-3">
              {learning.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-line bg-card p-5 transition-colors hover:border-line-hover"
                >
                  <strong className="mb-1 block font-semibold">{item.title}</strong>
                  <p className="text-[15px] text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section title="Projects" id="proyectos">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Contact">
        <div className="flex flex-wrap gap-3">
          {links.map((link) =>
            link.copyEmail ? (
              <CopyEmailButton
                key={link.label}
                label={link.label}
                className="cursor-pointer rounded-lg bg-foreground px-[18px] py-2.5 text-[15px] font-semibold text-background transition-colors hover:bg-accent"
              />
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-foreground px-[18px] py-2.5 text-[15px] font-semibold text-background transition-colors hover:bg-accent"
              >
                {link.label}
              </a>
            )
          )}
        </div>
      </Section>

      <footer className="border-t border-line pt-6 text-[13px] text-muted">
        © 2026 Angel Isasi · angel-isasi.com
      </footer>
    </main>
  );
}
