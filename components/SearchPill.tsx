// components/SearchPill.tsx
'use client';
import { Search } from 'lucide-react';

export default function SearchPill() {
  return (
    <form className="flex items-center bg-white pill rounded-full p-2 sm:p-2.5 shadow-md w-full max-w-[450px] mx-auto sm:mx-0 sm:ml-auto md:ml-8 lg:ml-32">
      <div className="flex items-center pl-2 sm:px-3">
        <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
      </div>

      <input
        aria-label="Search tools"
        className="flex-1 bg-transparent outline-none px-1 sm:px-2 text-sm sm:text-base text-gray-600 placeholder-gray-400 min-w-0"
        placeholder="Search tools..."
      />

      <button
        type="submit"
        className="ml-1 sm:ml-2 btn-gradient text-white font-semibold py-1.5 sm:py-2 px-3 sm:px-5 rounded-full text-sm sm:text-base whitespace-nowrap"
      >
        Search
      </button>
    </form>
  );
}
