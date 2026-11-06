type SectionTitleProps = {
  title: string;
  action?: {
    label: string;
    href: string;
  };
};

export default function SectionTitle({ title, action }: SectionTitleProps) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6">
      <h2 className="text-4xl font-extrabold uppercase leading-none md:text-6xl">
        {title}
      </h2>

      {action && (
        <a
          href={action.href}
          className="shrink-0 text-xs uppercase tracking-widest hover:text-[#ff3b00]"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}
