"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Compose mailto for a simple contact flow
    const subject = encodeURIComponent(`Contact from portfolio: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl">
      <div className="grid gap-3">
        <label className="flex flex-col text-sm">
          <span className="mb-1">Name</span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2"
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1">Email</span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2"
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="mb-1">Message</span>
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2"
          />
        </label>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            className="bg-foreground text-background px-4 py-2 rounded hover:-translate-y-0.5 transition-transform focus:outline-none focus:ring-2"
          >
            Send
          </button>
          {submitted && <span className="text-sm text-green-600">Opening mail client…</span>}
        </div>
      </div>
    </form>
  );
}
