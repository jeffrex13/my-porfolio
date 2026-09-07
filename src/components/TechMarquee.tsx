'use client';
import { motion } from 'framer-motion';

const techStack = [
  'React',
  'Next.js',
  'TypeScript',
  'Laravel',
  'Go',
  'Node.js',
  'Tailwind',
  'Figma',
];

export default function TechMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 py-8 md:py-12">
      <div className="absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-black to-transparent md:w-20" />
      <div className="absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-black to-transparent md:w-20" />
      <motion.div
        className="flex gap-8 whitespace-nowrap md:gap-12"
        animate={{
          x: [0, -1000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 20,
            ease: 'linear',
          },
        }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={i}
            className="cursor-default text-3xl font-black uppercase text-white/10 transition-colors hover:text-spotify-green md:text-5xl"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
