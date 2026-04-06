"use client";

import { useState } from "react";
import { joinWaitlist } from "@/app/actions";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "duplicate">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const result = await joinWaitlist(email);
      if (result.status === "success") setEmail("");
      setStatus(result.status);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {status === "success" ? (
        <div className="rounded-full border border-green-500/30 bg-green-500/10 px-6 py-3.5 text-sm text-green-300 text-center">
          You&apos;re on the list! We&apos;ll notify you when we launch.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error" || status === "duplicate") setStatus("idle");
            }}
            className="flex-1 rounded-full border border-navy-500 bg-navy-800/50 px-5 py-3.5 text-sm text-white placeholder:text-navy-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 transition-colors"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-full bg-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/25 hover:bg-purple-500 transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Joining..." : "Join Waitlist"}
          </button>
        </form>
      )}

      {status === "duplicate" && (
        <p className="mt-3 text-xs text-yellow-400">You&apos;re already on the waitlist!</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-xs text-red-400">Something went wrong. Please try again.</p>
      )}
      {status !== "success" && (
        <p className="mt-4 text-xs text-navy-400">No spam. We&apos;ll only email you when we launch.</p>
      )}
    </div>
  );
}
