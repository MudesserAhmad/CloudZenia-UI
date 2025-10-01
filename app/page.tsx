// app/page.tsx
import SearchPill from '../components/SearchPill';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center mt-24">
      <h1 className="text-6xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
        CloudZenia Tools
      </h1>
      <p className="mt-6 max-w-3xl text-gray-500 text-2xl">
        Utilize the full potential of cloud technology and achieve scalability,
        security, and cost-efficiency with CloudZenia.
      </p>

      <div className="mt-16 w-full sm:w-2/3 md:w-1/2">
        <SearchPill />
      </div>
    </section>
  );
}
