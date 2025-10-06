import { Ruler, Weight, FlaskConical } from 'lucide-react';
import Link from 'next/link';

export default function UnitConverters() {
  const tools = [
    {
      icon: <Ruler className="w-10 h-10 text-indigo-600" />,
      title: 'Length Converter',
      description: 'Easily convert between different units of length.',
      bg: 'bg-indigo-100',
    },
    {
      icon: <Weight className="w-10 h-10 text-pink-600" />,
      title: 'Weight Converter',
      description: 'Convert units of weight effortlessly.',
      bg: 'bg-pink-100',
    },
    {
      icon: <FlaskConical className="w-10 h-10 text-blue-600" />,
      title: 'Volume Converter',
      description: 'Convert volumes with precision.',
      bg: 'bg-blue-100',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
          Unit Converter Tools
        </h2>

        {/* Subtext */}
        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Simplify conversions with scalable, secure, and cloud-powered
          efficiency using our Unit Converter Tools.
        </p>

        {/* Tools Grid */}
        <div
          className="
            mt-10 sm:mt-12 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-6 
            sm:gap-8 
            justify-items-center
          "
        >
          {tools.map((tool, idx) => (
            <Link
              key={idx}
              href="/converter"
              className="w-full sm:w-72 lg:w-80"
            >
              <div
                className="
                  relative p-6 rounded-2xl border border-dashed border-gray-200 
                  shadow-sm hover:shadow-md transition 
                  text-left card-hover min-h-[220px] 
                  flex flex-col items-start justify-start
                "
              >
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${tool.bg}`}
                >
                  {tool.icon}
                </div>
                <h3 className="mt-6 text-lg md:text-xl font-semibold text-black">
                  {tool.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm md:text-base">
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
