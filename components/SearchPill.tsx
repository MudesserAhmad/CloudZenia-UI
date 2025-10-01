// components/SearchPill.tsx
'use client';
import { Search } from 'lucide-react';

export default function SearchPill() {
  return (
    <form className="flex items-center bg-white pill rounded-full p-2.5 shadow-md w-[450px] ml-32">
      <div className="flex items-center px-3">
        <Search className="w-5 h-5 text-gray-400" />
      </div>

      <input
        aria-label="Search tools"
        className="flex-1 bg-transparent outline-none px-2 text-gray-600 placeholder-gray-400"
        placeholder="Search tools..."
      />

      <button
        type="submit"
        className="ml-2 btn-gradient text-white font-semibold py-2 px-5 rounded-full"
      >
        Search
      </button>
    </form>
  );
}
