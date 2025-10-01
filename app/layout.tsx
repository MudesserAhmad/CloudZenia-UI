// app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import FloatingBot from '../components/FloatingBot';
import UnitConverters from '../components/UnitConverterSection';

export const metadata = {
  title: 'CloudZenia Tools',
  description: 'Utilize cloud tech to achieve scalability',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen font-sans">
        <div className="bg-peach relative min-h-screen overflow-hidden">
          {/* subtle hex SVG overlay */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-8">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
              {/* very faint hex pattern — you can replace with a pattern SVG */}
              <defs>
                <pattern
                  id="hex"
                  width="60"
                  height="52"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M30 0 L60 15 L60 37 L30 52 L0 37 L0 15 Z"
                    fill="none"
                    stroke="#f6e6e4"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hex)"></rect>
            </svg>
          </div>

          <Navbar />
          <main className="container mx-auto px-6 py-24">{children}</main>
          <FloatingBot />
        </div>
        <section className="py-20 bg-white">
          <UnitConverters></UnitConverters>
        </section>
      </body>
    </html>
  );
}
