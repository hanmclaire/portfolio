type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  url?: string;
};

export default function ProjectCard({ title, description, tags, url }: ProjectCardProps) {
  return (
    <a
      href={url ?? '#'}
      target="_blank"
      rel="noreferrer"
      className="block border rounded-lg p-5 hover:shadow-md transition-colors bg-white dark:bg-[#0b0b0b] card-hover focus:outline-none focus:ring-2 project-card-accent"
    >
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((t) => (
          <span
            key={t}
            className="text-xs bg-black/[0.06] dark:bg-white/[0.06] px-2 py-1 rounded"
          >
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
