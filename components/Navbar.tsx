// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="py-6">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg
              width="42"
              height="42"
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
              <text
                x="50"
                y="58"
                fontSize="40"
                textAnchor="middle"
                fill="white"
                fontFamily="Poppins"
              ></text>
            </svg>
            <div>
              <div className="title-text" style={{ fontWeight: 'bold' }}>
                CloudZenia
              </div>
              <div style={{ fontSize: '12px', color: 'black' }}>
                <span style={{ color: 'red', marginRight: '4px' }}>&lt;</span>
                Powering your cloud journey
                <span style={{ color: 'red', marginLeft: '4px' }}>/&gt;</span>
              </div>
            </div>
          </Link>

          <nav>
            <ul className="nav-pill ">
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  Industry
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-orange-500 text-[16px] leading-6 font-bold"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-black text-base leading-6 font-bold"
                >
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
