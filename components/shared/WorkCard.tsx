import Link from "next/link";
import type { Work } from "@/types/work";

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/work/${work.id}`} className="group block">
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={work.cover}
          alt={work.title}
          className="h-full w-full object-cover transition duration-500 md:grayscale md:group-hover:scale-105 md:group-hover:grayscale-0"
        />
      </div>

      <div className="mt-3 flex justify-between gap-4">
        <h3 className="text-sm font-bold uppercase">{work.category}</h3>
        <p className="text-xs text-[#6b6b6b]">{work.location}</p>
      </div>
    </Link>
  );
}
