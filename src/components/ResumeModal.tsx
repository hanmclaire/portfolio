"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ResumeModal({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    if (open) {
      document.addEventListener("keydown", onKey);
      // focus the dialog container when opened
      setTimeout(() => dialogRef.current?.focus(), 0);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  function downloadResume() {
    const text = `Claire Han\n\nSoftware Developer\n\nExperience\n- Example project 1\n- Example project 2\n\nSkills\n- JavaScript/TypeScript, React, Next.js\n`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Claire-Han-Resume.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
    >
      <div className="fixed inset-0 bg-black/40" onClick={onClose} aria-hidden />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative bg-white dark:bg-[#0b0b0b] max-w-2xl w-full rounded-lg p-6 shadow-2xl ring-1 ring-black/5 dark:ring-white/5 animate-fade-in"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold">Resume — Claire Han</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              A short resume summary. You can download a plain-text copy.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadResume}
              className="px-3 py-1 bg-foreground text-background rounded hover:brightness-95 focus:outline-none focus:ring-2"
            >
              Download
            </button>
            <button
              onClick={onClose}
              aria-label="Close resume"
              className="px-3 py-1 border rounded focus:outline-none focus:ring-2"
            >
              Close
            </button>
          </div>
        </div>

        <div className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          <strong>About</strong>
          <p className="mt-2">I build web applications with emphasis on maintainability and performance.</p>
          <strong className="mt-4 block">Selected Experience</strong>
          <ul className="list-disc list-inside mt-2">
            <li>Built customer-facing dashboards and tools using React and Next.js.</li>
            <li>Improved app startup time and bundle sizes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
