import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-xl border border-line bg-card p-5">
      {project.image && (
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className="mb-4 rounded-lg border border-line"
        />
      )}
      {(project.client || project.course || project.inProgress) && (
        <div className="mb-2 flex flex-wrap gap-2">
          {project.client && (
            <span className="inline-block rounded-full border border-accent px-2.5 py-0.5 text-xs text-accent">
              Client project
            </span>
          )}
          {project.course && (
            <span className="inline-block rounded-full border border-accent px-2.5 py-0.5 text-xs text-accent">
              Course project
            </span>
          )}
          {project.inProgress && (
            <span className="inline-block rounded-full border border-accent px-2.5 py-0.5 text-xs text-accent">
              In progress
            </span>
          )}
        </div>
      )}
      <strong className="mb-1 block">{project.title}</strong>
      <p className="mb-4 text-muted">{project.description}</p>
      <div className="mb-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-lg border border-line px-2.5 py-1 text-[13px] text-muted"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-3">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent"
        >
          Demo
        </a>
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line px-4 py-2 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}
