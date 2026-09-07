import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jeffrey | Frontend Developer',
  description:
    'Frontend developer portfolio featuring user-focused interfaces and full-stack web projects.',
  applicationName: "Jeffrey's Portfolio",
  creator: 'Jeffrey',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="overflow-x-hidden bg-black text-white antialiased"
        style={inter.style}
      >
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
          <div className="mx-auto grid min-h-24 max-w-6xl grid-cols-[1fr_auto] items-center gap-x-4 px-4 py-3 md:h-20 md:min-h-0 md:grid-cols-[1fr_auto_1fr] md:px-6 md:py-0">
            <span className="text-lg font-black text-white md:text-xl">
              JEFFREY.
            </span>

            <nav className="col-span-2 row-start-2 flex items-center justify-center gap-3 md:col-span-1 md:col-start-2 md:row-start-1 md:gap-4 lg:gap-8">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Work', href: '#work' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-h-11 items-center px-2.5 py-2 text-sm font-bold text-spotify-gray transition-colors hover:text-spotify-green"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="col-start-2 row-start-1 inline-flex min-h-10 items-center justify-self-end rounded-full bg-white px-4 py-2 text-xs font-bold text-black transition-transform hover:scale-105 md:col-start-3 md:px-5 md:text-sm"
            >
              <span className="sm:hidden">Chat</span>
              <span className="hidden sm:inline">Let&apos;s Chat</span>
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
