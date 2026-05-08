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
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-spotify-dark/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-spotify-green">
            Work
          </a>
          <a href="#" className="hover:text-spotify-green">
            Skills
          </a>
          <a href="#" className="hover:text-spotify-green">
            About
          </a>
          <a href="#" className="hover:text-spotify-green">
            Contact
          </a>
        </nav>

        {children}
      </body>
    </html>
  );
}
