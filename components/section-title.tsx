type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
};

export function SectionTitle({ eyebrow, title, description, as: Heading = 'h2' }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-red-700">{eyebrow}</p>
      ) : null}
      <Heading className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-5xl">{title}</Heading>
      {description ? <p className="mt-5 text-lg leading-8 text-zinc-600">{description}</p> : null}
    </div>
  );
}
