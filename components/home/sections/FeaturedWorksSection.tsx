import Link from "next/link";
import { works } from "@/types/work";
import WorkCard from "@/components/shared/WorkCard";

export default function FeaturedWorksSection() {
  const featuredWorks = works.slice(0, 3);

  return (
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
        {featuredWorks.map((works) => (
          <WorkCard key={works.id} work={works} />
        ))}
      </div>
    </section>
  );
}
