import ProjectCard from '@/src/components/ProjectCard';
import TechMarquee from '@/src/components/TechMarquee';

export default function Home() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <header className="max-w-4xl space-y-8">
          <div className="space-y-2">
            <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              Crafting <br />
              <span className="text-spotify-green">Experiences.</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-spotify-gray font-medium leading-relaxed max-w-2xl">
            Frontend Specialist with a Full-Stack mindset. I bridge the gap
            between
            <span className="text-white"> sophisticated design</span> and
            <span className="text-white"> scalable logic</span>.
          </p>

          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
              <div className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-widest">
                Available for projects
              </span>
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about" className="scroll-mt-24 max-w-3xl">
          <h2 className="text-4xl font-black mb-8 tracking-tight">About Me</h2>
          <div className="space-y-6 text-lg text-spotify-gray leading-relaxed">
            <p>
              I&apos;m a frontend specialist who loves building products that
              feel as good as they look. With a strong foundation in full-stack
              development, I bring technical depth to every project.
            </p>
            <p>
              Currently focused on creating delightful user experiences with
              modern web technologies, always keeping performance and
              accessibility at the forefront.
            </p>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="scroll-mt-24">
          <h2 className="text-4xl font-black mb-12 tracking-tight">
            Skills & Tech Stack
          </h2>
          <TechMarquee />
        </section>

        {/* Work */}
        <section id="work" className="scroll-mt-24">
          <h2 className="text-4xl font-black mb-12 tracking-tight">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title="Kasa"
              description="Dorm-hunting marketplace for Metro Manila."
              tags={['Vite', 'Laravel', 'PostgreSQL']}
              status="Work in progress"
              repositoryUrl="https://github.com/jeffrex13/kasa"
              liveUrl="https://find-kasa-app.netlify.app/"
            />
            <ProjectCard
              title="Student ID Validation"
              description="Student access validation system with ID scanning, QR codes, and clearance-based entry statuses."
              tags={['Next.js', 'TypeScript', 'Express', 'MongoDB']}
              status="Commissioned work"
              repositoryUrl="https://github.com/jeffrex13/student-id-validation"
              apiRepositoryUrl="https://github.com/jeffrex13/student-id-validation-api"
              liveUrl="https://student-id-validation.vercel.app/"
            />
          </div>
        </section>

        {/* Contact */}
        <section className="bg-spotify-green rounded-[3rem] p-16 text-black flex flex-col md:flex-row items-center justify-between gap-10">
          <h2 className="text-5xl font-black leading-tight">
            Ready to ship <br /> your next idea?
          </h2>
          <a
            href="mailto:hello@example.com"
            className="bg-black text-white px-12 py-6 rounded-full font-bold text-xl hover:scale-105 transition-transform active:scale-95 shadow-2xl"
          >
            Let&apos;s Talk
          </a>
        </section>
      </div>
    </main>
  );
}
