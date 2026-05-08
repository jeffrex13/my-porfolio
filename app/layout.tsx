import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased" style={inter.style}>
        {/* Minimal Nav */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
            {/* Minimalist Logo/Name */}
            <span className="text-white font-black tracking-tighter text-xl">
              JEFFREY.
            </span>

            <div className="flex gap-8">
              {['Work', 'Skills', 'About'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-bold text-spotify-gray hover:text-spotify-green transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <a
              href="#contact"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform"
            >
              Let&apos;s Chat
            </a>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
