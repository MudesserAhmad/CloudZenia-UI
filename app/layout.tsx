import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import FloatingBot from '../components/FloatingBot';

export const metadata = {
  title: 'CloudZenia Tools',
  description: 'Utilize cloud tech to achieve scalability',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen font-sans text-gray-900 antialiased">
        <div className="bg-peach relative min-h-screen overflow-hidden flex flex-col">
          {/* Subtle hex pattern background */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-10">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1200 600"
              preserveAspectRatio="none"
            >
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
              <rect width="100%" height="100%" fill="url(#hex)" />
            </svg>
          </div>

          {/* Navbar - fixed and responsive */}
          <header className="sticky top-0 z-50 w-full bg-peach/80 backdrop-blur-md border-b border-white/20">
            <Navbar />
          </header>

          {/* Page Content */}
          <main className="flex-1 w-full px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
            <div className="max-w-7xl mx-auto">{children}</div>
          </main>

          {/* Floating Chatbot */}
          <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8">
            <FloatingBot />
          </div>
        </div>
      </body>
    </html>
  );
}
