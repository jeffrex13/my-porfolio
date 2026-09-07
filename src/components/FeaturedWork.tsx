'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Student Access Management',
    description:
      'Built a school gate-access frontend using the BioStar 2 API and WebSockets for live ID scans, access statuses, and reporting.',
    tags: [
      'Next.js',
      'TypeScript',
      'shadcn/ui',
      'WebSocket',
      'BioStar 2 API',
    ],
    status: 'Freelance · NDA',
    compactTitle: true,
  },
  {
    title: 'Kasa',
    description:
      'A roommate-matching and rental platform for finding compatible housemates or affordable spaces in Metro Manila.',
    tags: ['Vite', 'Laravel', 'PostgreSQL'],
    status: 'Work in progress',
    repositoryUrl: 'https://github.com/jeffrex13/kasa',
    liveUrl: 'https://find-kasa-app.netlify.app/',
  },
  {
    title: 'Student ID Validation',
    description:
      'Student access validation system with ID scanning, QR codes, and clearance-based entry statuses.',
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    status: 'Commissioned work',
    repositoryUrl: 'https://github.com/jeffrex13/student-id-validation',
    apiRepositoryUrl:
      'https://github.com/jeffrex13/student-id-validation-api',
    liveUrl: 'https://student-id-validation.vercel.app/',
  },
];

export default function FeaturedWork() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(2);
  const lastIndex = Math.max(0, projects.length - visibleCards);

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;

    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const nextIndex = Math.round(track.scrollLeft / (firstCard.offsetWidth + gap));
    setActiveIndex(Math.min(lastIndex, Math.max(0, nextIndex)));
  }, [lastIndex]);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 768px)');
    const updateVisibleCards = () => setVisibleCards(desktopQuery.matches ? 2 : 1);

    updateVisibleCards();
    desktopQuery.addEventListener('change', updateVisibleCards);
    window.addEventListener('resize', updateActiveIndex);

    return () => {
      desktopQuery.removeEventListener('change', updateVisibleCards);
      window.removeEventListener('resize', updateActiveIndex);
    };
  }, [updateActiveIndex]);

  useEffect(() => {
    setActiveIndex((index) => Math.min(index, lastIndex));
  }, [lastIndex]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    const firstCard = track?.firstElementChild as HTMLElement | null;

    if (!track || !firstCard) return;

    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const boundedIndex = Math.min(lastIndex, Math.max(0, index));
    track.scrollTo({
      left: boundedIndex * (firstCard.offsetWidth + gap),
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="relative min-h-10">
        <h2 className="pr-24 text-3xl font-black tracking-tight md:text-4xl">Featured Work</h2>
        <div className="absolute right-0 top-0 flex gap-2">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            aria-label="Show previous projects"
            title="Previous projects"
            className="grid size-9 place-items-center md:size-10 rounded-full border border-white/10 text-spotify-gray transition-colors hover:border-spotify-green/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex >= lastIndex}
            aria-label="Show more projects"
            title="More projects"
            className="grid size-9 place-items-center md:size-10 rounded-full border border-white/10 text-spotify-gray transition-colors hover:border-spotify-green/50 hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={updateActiveIndex}
        className="featured-work-track mt-7 flex snap-x snap-mandatory gap-8 overflow-x-auto overscroll-x-contain py-3"
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="min-w-0 w-[85%] flex-none snap-start md:w-[calc((100%-2rem)/2)]"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div
        className="mt-3 flex justify-center gap-2"
        aria-label="Project pages"
      >
        {Array.from({ length: lastIndex + 1 }, (_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => scrollToIndex(index)}
            aria-label={`Show project page ${index + 1}`}
            aria-current={activeIndex === index ? 'true' : undefined}
            className="grid h-6 w-8 place-items-center"
          >
            <span
              className={`h-1.5 w-6 rounded-full transition-colors ${
                activeIndex === index ? 'bg-spotify-green' : 'bg-white/15'
              }`}
            />
          </button>
        ))}
      </div>
    </>
  );
}
