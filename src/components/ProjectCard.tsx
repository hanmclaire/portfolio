import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  tags?: string[];
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectCard = ({ title, description, tags, githubUrl, demoUrl }: ProjectCardProps) => (
  <div className="block rounded-lg p-5 bg-black border border-gray-800 hover:scale-[1.01] hover:border-gray-700 transition-all duration-300 ease-in-out">
    <div className="flex justify-between items-start mb-1">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="flex items-center gap-3">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="View source on GitHub"
          >
            <FaGithub size={20} />
          </a>
        )}
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="View live demo"
          >
            <FaExternalLinkAlt size={18} />
          </a>
        )}
      </div>
    </div>
    <p className="text-sm text-gray-300 mb-3">{description}</p>
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag) => (
        <span
          key={tag}
          className="text-xs bg-gray-900 text-gray-300 px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;