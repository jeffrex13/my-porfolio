'use client';
import { motion } from 'framer-motion';
import { Code, ExternalLink } from 'lucide-react'; // Swapping Github for Code

interface ProjectProps {
  title: string;
  tags: string[];
  description: string;
}

export default function ProjectCard({
  title,
  tags,
  description,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative bg-spotify-dark border border-white/5 p-8 rounded-[2.5rem] transition-all hover:border-spotify-green/40 hover:bg-spotify-light/30"
    >
      <div className="space-y-5">
        <div className="flex justify-between items-start">
          <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-spotify-green/10 transition-colors">
            <Code
              size={24}
              className="text-spotify-gray group-hover:text-spotify-green"
            />
          </div>
          <div className="flex gap-4 text-spotify-gray">
            <ExternalLink
              size={20}
              className="hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-spotify-gray text-sm leading-relaxed">
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
