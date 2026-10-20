import Link from "next/link";
import { works } from "@/data/works";

export default function GalleryPage() {
  return (
    <>
      <section className="px-5 pb-10 pt-24 md:px-10">
        <p className="mb-5 text-xs uppercase tracking-[0.2em] text-[#6b6b6b]">
          Photo Archive
        </p>

        <h1 className="text-6xl font-extrabold uppercase md:text-9xl">
          Gallery
        </h1>

        <p className="mt-6 max-w-xl text-[#6b6b6b]">
          Kumpulan foto street art, mural, graffiti, sticker, dan intervensi
          urban.
        </p>
      </section>

      <section className="px-5 pb-24 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          {works.map((work) => (
            <Link
              key={work.id}
              href={`/work/${work.id}`}
              className="group block"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={work.cover}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-500 md:grayscale md:group-hover:grayscale-0"
                />
              </div>

              <div className="mt-3 flex justify-between text-xs uppercase tracking-widest">
                <span>{work.title}</span>
                <span className="text-[#6b6b6b]">{work.location}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}