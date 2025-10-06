// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="py-4 md:py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between flex-wrap">
          {/* Logo + Title */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 mb-3 md:mb-0"
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              className="rounded-full"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0" stopColor="#ff7a2f" />
                  <stop offset="1" stopColor="#ff4d7e" />
                </linearGradient>
              </defs>
              <circle cx="50" cy="50" r="48" fill="url(#g1)" />
            </svg>
            <div>
              <div className="font-bold text-lg md:text-xl">CloudZenia</div>
              <div className="text-[10px] md:text-[12px] text-black">
                <span style={{ color: 'red', marginRight: '4px' }}>&lt;</span>
                Powering your cloud journey
                <span style={{ color: 'red', marginLeft: '4px' }}>/&gt;</span>
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="w-full md:w-auto">
            <ul className="nav-pill flex flex-wrap justify-center md:justify-between text-sm md:text-base font-bold">
              <li>
                <Link href="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Industry
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/" className="text-orange-500 nav-link">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/" className="nav-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
