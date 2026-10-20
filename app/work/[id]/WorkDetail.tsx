"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { works } from "@/data/works";

export default function WorkDetail() {
  const { id } = useParams();

  const work = works.find((item) => item.id === id);

  if (!work) {
    return (
      <section className="px-5 py-24 md:px-10">
        <h1 className="text-5xl font-extrabold uppercase">Not Found</h1>

        <Link
          href="/gallery"
          className="mt-6 inline-block border-b border-black pb-1 text-xs uppercase tracking-widest hover:border-[#ff3b00] hover:text-[#ff3b00]"
        >
          ← Back to Gallery
        </Link>
      </section>
    );
  }

  return (
    <section className="px-5 pb-24 pt-16 md:px-10">
      <Link
        href="/gallery"
        className="inline-block border-b border-black pb-1 text-xs uppercase tracking-widest hover:border-[#ff3b00] hover:text-[#ff3b00]"
      >
        ← Back to Gallery
      </Link>

      <div className="mt-10 flex flex-col gap-6 border-b border-[#d8d4cc] pb-8 md:flex-row md:items-end md:justify-between">
        <h1 className="text-5xl font-extrabold uppercase leading-none md:text-8xl">
          {work.title}
        </h1>

        <div className="flex gap-5 text-xs uppercase tracking-widest text-[#6b6b6b]">
          <span>{work.location}</span>
          <span>{work.category}</span>
          <span>{work.year}</span>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-lg text-[#6b6b6b]">
        {work.description}
      </p>

      <div className="mt-12">
        <img
          src={work.cover}
          alt={work.title}
          className="aspect-video w-full object-cover"
        />
      </div>

      {work.photos.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-extrabold uppercase md:text-5xl">
            Process & Other Angles
          </h2>

          <div className="grid gap-5 md:grid-cols-3">
            {work.photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`${work.title} documentation ${index + 1}`}
                className="aspect-[4/5] w-full object-cover transition duration-500 md:grayscale md:hover:grayscale-0"
              />
            ))}
          </div>
        </section>
      )}

      {work.video && (
        <section className="mt-20">
          <h2 className="mb-8 text-3xl font-extrabold uppercase md:text-5xl">
            Video Documentation
          </h2>

          <video
            controls
            poster={work.cover}
            className="aspect-video w-full bg-black object-cover"
          >
            <source src={work.video} type="video/mp4" />
          </video>
        </section>
      )}
    </section>
  );
}