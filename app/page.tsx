import ContactForm from '@/src/components/ContactForm';
import FeaturedWork from '@/src/components/FeaturedWork';
import TechMarquee from '@/src/components/TechMarquee';

export default function Home() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-32 sm:px-6 md:pb-20">
      <div className="mx-auto min-w-0 max-w-6xl space-y-16 md:space-y-24">
        {/* Header */}
        <header className="min-w-0 max-w-4xl space-y-6 md:space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-black uppercase leading-[0.9] sm:text-6xl md:text-7xl lg:text-8xl">
              Crafting <br />
              <span className="text-spotify-green">Experiences.</span>
            </h1>
          </div>

          <p className="max-w-2xl text-lg font-medium leading-relaxed text-spotify-gray md:text-2xl">
            Frontend Specialist with a Full-Stack mindset. I bridge the gap
            between
            <span className="text-white"> sophisticated design</span> and
            <span className="text-white"> scalable logic</span>.
          </p>

          <div className="flex gap-4 pt-4">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              <div className="w-2 h-2 rounded-full bg-spotify-green animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest sm:text-sm">
                Available for projects
              </span>
            </div>
          </div>
        </header>

        {/* About */}
        <section id="about" className="min-w-0 max-w-3xl scroll-mt-28 md:scroll-mt-24">
          <h2 className="mb-6 text-3xl font-black md:mb-8 md:text-4xl">About Me</h2>
          <div className="min-w-0 space-y-4 border-l-2 border-spotify-green/60 pl-5 text-base leading-7 text-spotify-gray [overflow-wrap:anywhere] md:space-y-6 md:border-l-0 md:pl-0 md:text-lg md:leading-relaxed">
            <p className="text-white/85">
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
        <section id="skills" className="min-w-0 scroll-mt-28 md:scroll-mt-24">
          <h2 className="mb-8 text-2xl font-black sm:text-3xl md:mb-12 md:text-4xl">
            Skills & Tech Stack
          </h2>
          <TechMarquee />
        </section>

        {/* Work */}
        <section id="work" className="min-w-0 scroll-mt-28 md:scroll-mt-24">
          <FeaturedWork />
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="min-w-0 scroll-mt-28 flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-spotify-green p-6 text-black sm:p-8 md:flex-row md:gap-10 md:rounded-[3rem] md:p-16"
        >
          <h2 className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
            Ready to ship <br /> your next idea?
          </h2>
          <ContactForm />
        </section>
      </div>
    </main>
  );
}
