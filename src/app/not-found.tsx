// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#003be2] px-6 py-16 text-center text-white">
      {/* Grid lines: 96px squares, a vertical line runs through the exact center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.12) 2px, transparent 2px),
      linear-gradient(to bottom, rgba(255,255,255,0.12) 2px, transparent 2px)
    `,
          backgroundSize: "110px 110px",
          backgroundPosition: "0 0",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Giant 404 with lime -> transparent fade */}
        <h1
          aria-label="404"
          className="select-none bg-gradient-to-b from-[#d4ff1f] from-35% to-transparent bg-clip-text text-[clamp(120px,31vw,440px)] font-semibold leading-[0.78] tracking-[-0.03em] text-transparent"
        >
          404
        </h1>

        {/* Heading overlaps the faded bottom of the 404 */}
        <h2 className="-mt-2 max-w-[750px] text-[clamp(30px,5vw,58px)] font-semibold leading-[1.18] tracking-tight text-white sm:-mt-4">
          The page you are looking for doesn&rsquo;t exist
        </h2>

        <p className="mt-9 text-sm font-light text-white/90 sm:text-base">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="mt-7 inline-flex h-9 items-center justify-center rounded-full bg-[#d4ff1f] px-5 text-base text-black transition-all hover:bg-[#c6ee00] active:scale-95"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
