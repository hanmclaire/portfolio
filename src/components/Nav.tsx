import Link from "next/link";

export default function Nav() {
  return (
    <nav className="w-full border-b">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Claire Han
        </Link>
        <div className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
            Projects
          </a>
          <a href="#experience" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
            Experience
          </a>
          <a href="#contact" className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 rounded">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
