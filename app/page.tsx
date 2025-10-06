// app/page.tsx
import SearchPill from '../components/SearchPill';
import UnitConverters from '@/components/UnitConverterSection';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-60">
      <h1 className="text-6xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        CloudZenia Tools
      </h1>
      <p className="mt-6 max-w-4x text-gray-500 text-2xl">
        Utilize the full potential of cloud technology and achieve scalability,
        security and,
        <br />
        cost-efficiency with CloudZenia.
      </p>

      <div className="mt-8 sm:mt-12 md:mt-16 w-full px-4 sm:px-6 md:px-0 sm:w-4/5 md:w-2/3 lg:w-1/2 max-w-xl mx-auto">
        <SearchPill />
      </div>
      <div style={{ marginTop: '280px', width: '100%' }}>
        <UnitConverters />
      </div>
    </section>
  );
}
