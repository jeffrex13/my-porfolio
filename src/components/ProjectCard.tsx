'use client';
import { motion } from 'framer-motion';
import { Code, ExternalLink, GitBranch, Server } from 'lucide-react';

interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
  status?: string;
  compactTitle?: boolean;
  repositoryUrl?: string;
  apiRepositoryUrl?: string;
  liveUrl?: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
  status,
  compactTitle = false,
  repositoryUrl,
  apiRepositoryUrl,
  liveUrl,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full rounded-[2rem] border border-white/5 bg-spotify-dark p-6 transition-all hover:border-spotify-green/40 hover:bg-spotify-light/30 md:rounded-[2.5rem] md:p-8"
    >
      <div className="min-w-0 space-y-5">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-spotify-green/10 transition-colors">
            <Code
              size={24}
              className="text-spotify-gray group-hover:text-spotify-green"
            />
          </div>
          <div className="flex gap-1 text-spotify-gray">
            {repositoryUrl ? (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} source code on GitHub`}
                title="View source code"
                className="grid size-10 place-items-center transition-colors hover:text-white"
              >
                <GitBranch size={20} />
              </a>
            ) : null}
            {apiRepositoryUrl ? (
              <a
                href={apiRepositoryUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} API source code on GitHub`}
                title="View API source code"
                className="grid size-10 place-items-center transition-colors hover:text-white"
              >
                <Server size={20} />
              </a>
            ) : null}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open the ${title} live app`}
                title="Open live app"
                className="grid size-10 place-items-center transition-colors hover:text-white"
              >
                <ExternalLink size={20} />
              </a>
            ) : null}
          </div>
        </div>

        <div>
          <div className="mb-2 flex flex-wrap items-center gap-3">
            <h3
              className={`${compactTitle ? 'text-xl' : 'text-2xl'} font-bold text-white`}
            >
              {title}
            </h3>
            {status ? (
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-spotify-gray">
                {status}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-relaxed text-spotify-gray [overflow-wrap:anywhere]">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-[0.15em] font-bold text-spotify-green bg-spotify-green/10 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
