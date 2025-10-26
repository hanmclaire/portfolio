import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Nav() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-5xl mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#home" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none">
            Home
          </a>
          <a href="#experience" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none">
            Experience
          </a>
          <a href="#projects" className="text-sm font-medium text-gray-400 hover:text-white transition-colors focus:outline-none">
            Projects
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:hanmclaire@gmail.com"
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="Email"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://github.com/hanmclaire"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/claire-han/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-1"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}