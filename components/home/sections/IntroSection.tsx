import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="border-t border-[#d8d4cc] px-5 py-20 md:px-10">
      <div className="mb-8 flex gap-3 text-xs uppercase tracking-widest text-[#6b6b6b]">
        <span>Archive</span>
        <span>—</span>
        <span>Street Culture</span>
      </div>

      <h2 className="max-w-4xl text-4xl font-extrabold uppercase leading-tight md:text-7xl">
        Gambar di tembok <span className="text-[#ff3b00]">|</span> jejak di kota
      </h2>

      <p className="mt-7 max-w-xl text-[#6b6b6b]">
        Kami mengumpulkan foto, lokasi, dan cerita di balik karya street art.
      </p>

      <Link
        href="/gallery"
        className="mt-8 inline-block border-b border-black pb-1 text-sm uppercase tracking-widest hover:border-[#ff3b00] hover:text-[#ff3b00]"
      >
        Lihat Gallery →
      </Link>
    </section>
  );
}
