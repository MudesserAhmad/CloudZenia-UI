import { Ruler, Weight, FlaskConical, Square } from 'lucide-react';
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black">Unit Converter Tools</h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Simplify Conversions with Scalable, Secure, and Cloud-Powered
          Efficiency With Unit Converter Tools
        </p>

        <div className="w-300 h-56 mt-12 ml-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <Link key={idx} href="/converter">
              <div className="relative p-6 rounded-2xl border border-dashed border-gray-200 shadow-sm hover:shadow-md transition text-left card-hover min-h-[220px]">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full ${tool.bg}`}
                >
                  {tool.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-black">
                  {tool.title}
                </h3>
                <p className="mt-2 text-gray-500 text-sm">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
