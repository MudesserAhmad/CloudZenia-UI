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
      <div className="rounded-card min-h-[600px]">
        <div className="w-full  bg-white rounded-2xl shadow-md p-8 border border-gray-100 relative h-[500px] mx-auto">
          {/* From & To Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* From Section */}
            <div>
              <label className="block text-[27px] text-[#444444] ml-[145px] mb-[50px]">
                From : {fromUnit}
              </label>
              <input
                type="number"
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value)}
                className="mb-[20px] h-[80px] w-[480px] p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
                placeholder=""
              />
              <select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="h-[80px] w-[480px] text-[27px] text-[#444444] mt-3 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
              >
                {units.map((unit, idx) => (
                  <option key={idx} value={unit}>
                    {unit}
                  </option>
                ))}
              </select>
            </div>

            {/* To Section */}
            <div>
              <label className="block text-[27px] text-[#444444] ml-[145px] mb-[50px]">
                To : {toUnit}
              </label>
              <input
                type="number"
                value={toValue}
                onChange={(e) => setToValue(e.target.value)}
                className="mb-[20px] h-[80px] w-[480px] p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
                placeholder=""
              />
              <select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="h-[80px] w-[480px] text-[27px] text-[#444444] mt-3 p-3 border border-gray-400 rounded-lg focus:ring-2 focus:ring-orange-400 outline-none text-black"
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

        {/* Swap Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-[100%] -translate-y-[80%]">
          <button
            onClick={handleConvert}
            className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-4 rounded-full shadow hover:scale-105 transition"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-5 rounded-full shadow hover:scale-105 transition text-xl">
            ◀
          </button>

          <div className="bg-[#F7E6E4] px-10 py-5 rounded-md text-gray-800 font-semibold text-xl">
            Length Converter | Volume & Capacity Converter | Temperature
            Converter
          </div>

          <button className="bg-gradient-to-r from-orange-400 to-red-500 text-white p-5 rounded-full shadow hover:scale-105 transition text-xl">
            ▶
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
    </section>
  );
}
