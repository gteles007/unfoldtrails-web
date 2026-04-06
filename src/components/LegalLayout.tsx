import Link from "next/link";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="border-b border-navy-700/50 bg-navy-900/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-[0.25em] text-white uppercase">
            <svg viewBox="0 0 100 100" className="w-8 h-8" fill="none">
              <circle cx="50" cy="50" r="46" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="38" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="30" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
              <path d="M35 65 L50 35 L65 65 Z" fill="none" stroke="#b8a5e8" strokeWidth="2" strokeLinejoin="round" />
              <path d="M42 65 L50 50 L58 65" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinejoin="round" />
              <circle cx="50" cy="33" r="2.5" fill="#b8a5e8" />
            </svg>
            Unfold Trails
          </Link>
        </div>
      </nav>

      <main className="flex-1 mx-auto max-w-4xl px-6 py-12 md:py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
        <p className="text-sm text-navy-400 mb-10">Last updated: {lastUpdated}</p>

        <div className="prose-legal space-y-6 text-navy-100/80 text-sm leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-navy-100 [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-purple-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-purple-300">
          {children}
        </div>
      </main>

      <footer className="border-t border-navy-700/30 py-8 px-6">
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy-500">
          <p>&copy; {new Date().getFullYear()} Unfold Trails. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-navy-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-navy-300 transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-navy-300 transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
