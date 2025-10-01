// components/FloatingBot.tsx


export default function FloatingBot() {
  return (
    <div className="fixed right-6 bottom-6 z-50">
      <button
        aria-label="Support chat"
        className="w-14 h-14 rounded-full btn-gradient flex items-center justify-center shadow-xl"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C6.48 2 2 5.58 2 10c0 1.91.78 3.66 2.04 5.07L4 22l6.06-3.02C11.35 19.11 11.67 19 12 19c5.52 0 10-3.58 10-8s-4.48-9-10-9z"/>
        </svg>
      </button>
    </div>
  );
}
