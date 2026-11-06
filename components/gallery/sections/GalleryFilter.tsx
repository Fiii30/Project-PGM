"use client";

import { useMemo, useState } from "react";
import { works } from "@/types/work";
import WorkCard from "@/components/shared/WorkCard";
import type { WorkCategory } from "@/types/work";

type Filter = "all" | WorkCategory;

const filters: Filter[] = [
  "all",
  "Character",
  "abstract",
  "Sign Painting",
  "Throw Up",
  "Piece",
  "Tag",
  "Blockbuster",
  "Wildstyle",
];

export default function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const visibleWorks = useMemo(() => {
    if (activeFilter === "all") return works;

    return works.filter((work) => work.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="px-5 pb-24 md:px-10">
      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`border border-black px-5 py-2 text-xs uppercase tracking-widest transition ${
              activeFilter === filter
                ? "bg-black text-[#f4f2ee]"
                : "hover:bg-black hover:text-[#f4f2ee]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {visibleWorks.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </section>
  );
}
