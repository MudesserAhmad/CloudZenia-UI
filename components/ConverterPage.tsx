'use client';
import { useState } from 'react';
import { RefreshCw } from 'lucide-react';

export default function LengthConverterPage() {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState("Angstrom (A')");
  const [toUnit, setToUnit] = useState("Angstrom (A')");

  const units = [
    "Angstrom (A')",
    'Meter (m)',
    'Kilometer (km)',
    'Centimeter (cm)',
    'Millimeter (mm)',
    'Inch (in)',
    'Foot (ft)',
    'Yard (yd)',
    'Mile (mi)',
  ];
  const unitToMeters: { [key: string]: number } = {
    "Angstrom (A')": 1e-10,
    'Meter (m)': 1,
    'Kilometer (km)': 1000,
    'Centimeter (cm)': 0.01,
    'Millimeter (mm)': 0.001,
    'Inch (in)': 0.0254,
    'Foot (ft)': 0.3048,
    'Yard (yd)': 0.9144,
    'Mile (mi)': 1609.34,
  };

  const handleConvert = () => {
    const fromFactor = unitToMeters[fromUnit];
    const toFactor = unitToMeters[toUnit];

    if (!fromFactor || !toFactor || fromValue === '') {
      return; // Avoid errors on invalid input
    }

    const valueInMeters = parseFloat(fromValue) * fromFactor;
    const convertedValue = valueInMeters / toFactor;

    setToValue(convertedValue.toString());
  };

  return (
    <section className="flex flex-col items-center justify-start min-h-screen px-4 mt-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-8">
        Length Converter
      </h2>
      <div className="rounded-card min-h-[600px] w-full max-w-6xl">
        <div className="w-full bg-white rounded-2xl shadow-md p-4 sm:p-6 md:p-8 border border-gray-100 relative mx-auto">
          {/* From & To Inputs - Stacked on mobile, side by side on desktop */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 relative">
            {/* From Section */}
            <div className="flex flex-col items-center">
              <label className="block text-xl sm:text-2xl md:text-[27px] text-[#444444] mb-4 sm:mb-[30px] md:mb-[50px] text-center md:text-left">
                From : {fromUnit}
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="mb-[20px] h-[60px] sm:h-[70px] md:h-[80px] w-full max-w-[480px] p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
                placeholder=""
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="h-[60px] sm:h-[70px] md:h-[80px] w-full max-w-[480px] text-lg sm:text-xl md:text-[27px] text-[#444444] mt-3 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              >
                {units.map((unit, idx) => (
                  <option key={idx} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            {/* Convert Button for Mobile - Between From and To sections */}
            <div className="md:hidden flex justify-center my-4">
              <button
                onClick={handleConvert}
                className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-full shadow hover:scale-105 transition z-10"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </div>

            {/* To Section */}
            <div className="flex flex-col items-center">
              <label className="block text-xl sm:text-2xl md:text-[27px] text-[#444444] mb-4 sm:mb-[30px] md:mb-[50px] text-center md:text-left">
                To : {toUnit}
              </label>
              <input
                type="number"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
                className="mb-[20px] h-[60px] sm:h-[70px] md:h-[80px] w-full max-w-[480px] p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
                placeholder=""
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="h-[60px] sm:h-[70px] md:h-[80px] w-full max-w-[480px] text-lg sm:text-xl md:text-[27px] text-[#444444] mt-3 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none"
              >
                {units.map((unit, idx) => (
                  <option key={idx} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Convert Button for Desktop - Only visible on medium screens and up */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button
            onClick={handleConvert}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-full shadow hover:scale-105 transition"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2">
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 sm:p-5 rounded-full shadow hover:scale-105 transition text-xl">
            ◀
          </button>

          <div className="bg-[#F7E6E4] px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-5 rounded-md text-gray-800 font-semibold text-sm sm:text-base md:text-xl text-center">
            <span className="hidden sm:inline">
              Length Converter | Volume & Capacity Converter | Temperature
              Converter
            </span>
            <span className="sm:hidden">Length | Volume | Temperature</span>
          </div>

          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 sm:p-5 rounded-full shadow hover:scale-105 transition text-xl">
            ▶
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
    </section>
  );
}
