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
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-black to-transparent z-10" />
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{
          x: [0, -1000], // Adjust -1000 based on your content width
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
        {/* We render the list twice for the infinite loop effect */}
        {[...techStack, ...techStack].map((tech, i) => (
          <span
            key={i}
            className="text-5xl font-black text-white/10 hover:text-spotify-green transition-colors cursor-default uppercase"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
