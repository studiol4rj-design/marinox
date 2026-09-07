type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-zinc-600">{description}</p> : null}
    </div>
  );
}
