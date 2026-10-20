import Link from "next/link";
import { works } from "@/data/works";

export default function HomePage() {
  const featuredWorks = works.slice(0, 3);

  return (
    <>
      <section className="px-5 pb-20 pt-8  md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-[#6b6b6b]">
          Street Art Collective
        </p>

        <img src="../assets/logo.png" alt="" />

        <p className="mt-7 max-w-xl text-lg text-[#6b6b6b]">
          PGM adalah kolektif yang mendokumentasikan street art dan vandalisme—
          dari karya yang disetujui pemilik media hingga karya yang muncul
          tanpa izin.
        </p>
      </section>

      <section className="border-t border-[#d8d4cc] px-5 py-20 md:px-10">
        <div className="mb-8 flex gap-3 text-xs uppercase tracking-widest text-[#6b6b6b]">
          <span>Archive</span>
          <span>—</span>
          <span>Street Culture</span>
        </div>

        <h2 className="max-w-4xl text-4xl font-extrabold uppercase leading-tight md:text-7xl">
          Gambar di tembok <span className="text-[#ff3b00]">|</span> jejak di
          kota
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

      <section className="border-t border-[#d8d4cc] px-5 pb-24 pt-20 md:px-10">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-4xl font-extrabold uppercase md:text-6xl">
            Featured Works
          </h2>

          <Link
            href="/gallery"
            className="text-xs uppercase tracking-widest hover:text-[#ff3b00]"
          >
            Semua foto
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredWorks.map((work) => (
            <Link key={work.id} href={`/work/${work.id}`} className="group">
              <div className="aspect-4/5 overflow-hidden">
                <img
                  src={work.cover}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
                />
              </div>

              <div className="mt-3 flex justify-between">
                <h3 className="text-sm font-bold uppercase">{work.title}</h3>
                <p className="text-xs text-[#6b6b6b]">{work.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}