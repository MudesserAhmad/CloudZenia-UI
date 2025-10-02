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

      <div className="mt-16 w-full sm:w-2/3 md:w-1/2">
        <SearchPill />
      </div>
      <div style={{ marginTop: '280px', width: '100%' }}>
        <UnitConverters />
      </div>
    </section>
  );
}
