import Image from "next/image";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-card p-5 transition-colors hover:border-line-hover">
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={360}
          className="mb-5 aspect-video w-full rounded-lg border border-line object-cover object-top"
        />
      ) : (
        <div className="mb-5 flex aspect-video w-full flex-col justify-end rounded-lg border border-line bg-placeholder p-5">
          <span className="mb-1.5 text-lg font-semibold">{project.title}</span>
          <span className="text-sm text-muted">{project.tech.join(" · ")}</span>
        </div>
      )}
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="inline-block rounded-full border border-accent px-2.5 py-0.5 text-xs text-accent">
          {project.type}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${
            project.status === "Live"
              ? "border-emerald-500/60 bg-emerald-500/10 text-emerald-400"
              : "border-amber-400/60 bg-amber-400/10 text-amber-300"
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              project.status === "Live" ? "bg-emerald-400" : "bg-amber-300"
            }`}
          />
          {project.status}
        </span>
      </div>
      <h3 className="mb-2 text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mb-5 text-[15px] text-muted">{project.description}</p>
      {project.tech.length > 0 && (
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
      )}
      <div className="mt-auto flex gap-3">
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-foreground px-4 py-2 text-sm font-semibold text-background transition-colors hover:bg-accent"
          >
            Demo
          </a>
        )}
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
