"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import LanguageSwitcher from "./LanguageSwitcher";
import WaitlistForm from "./WaitlistForm";
import WaitlistCounter from "./WaitlistCounter";

function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ────────────────── SVG Icons ────────────────── */

function LogoIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <circle cx="50" cy="50" r="46" stroke="rgba(139,92,246,0.3)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="38" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="30" fill="rgba(139,92,246,0.15)" stroke="rgba(139,92,246,0.6)" strokeWidth="1.5" />
      <path d="M35 65 L50 35 L65 65 Z" fill="none" stroke="#b8a5e8" strokeWidth="2" strokeLinejoin="round" />
      <path d="M42 65 L50 50 L58 65" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="50" cy="33" r="2.5" fill="#b8a5e8" />
    </svg>
  );
}

function MapPinIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function QrCodeIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8" rx="1" /><rect x="14" y="2" width="8" height="8" rx="1" /><rect x="2" y="14" width="8" height="8" rx="1" /><path d="M14 14h2v2h-2zM20 14h2v2h-2zM14 20h2v2h-2zM20 20h2v2h-2zM17 17h2v2h-2z" /></svg>;
}
function TrophyIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>;
}
function CompassIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>;
}
function ShieldIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
}
function UsersIcon() {
  return <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}
function MountainIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z" /></svg>;
}
function SunIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2m-7.07-15.07 1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2m-3.34 5.66 1.41 1.41M6.34 6.34 4.93 4.93" /></svg>;
}
function ChevronDownIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>;
}
function AppleIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>;
}
function PlayStoreIcon() {
  return <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 1.16c-.36.39-.56.94-.56 1.6v18.48c0 .66.2 1.21.56 1.6l.08.09L14.53 12v-.27L3.27 1.07l-.09.09zM18.3 15.76l-3.76-3.76v-.27l3.77-3.77.08.05 4.47 2.54c1.28.72 1.28 1.9 0 2.63l-4.47 2.53-.09.05zM14.53 12l-11.17 11.17c.43.46 1.13.49 1.93.05l13-7.38-3.76-3.84zM14.53 12L18.3 8.24 5.29.84c-.8-.44-1.5-.41-1.93.05L14.53 12z" /></svg>;
}

/* ────────────────── Page ────────────────── */

export default function LandingPage() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const featuresReveal = useScrollReveal(0.05);
  const modesReveal = useScrollReveal(0.05);
  const howReveal = useScrollReveal(0.05);
  const waitlistReveal = useScrollReveal(0.05);

  const features = [
    { icon: <MapPinIcon />, title: t.featGps, desc: t.featGpsDesc },
    { icon: <QrCodeIcon />, title: t.featQr, desc: t.featQrDesc },
    { icon: <TrophyIcon />, title: t.featChallenges, desc: t.featChallengesDesc },
    { icon: <CompassIcon />, title: t.featTrail, desc: t.featTrailDesc },
    { icon: <ShieldIcon />, title: t.featCredencial, desc: t.featCredencialDesc },
    { icon: <UsersIcon />, title: t.featCommunity, desc: t.featCommunityDesc },
  ];

  const steps = [
    { num: "01", title: t.step1Title, desc: t.step1Desc },
    { num: "02", title: t.step2Title, desc: t.step2Desc },
    { num: "03", title: t.step3Title, desc: t.step3Desc },
    { num: "04", title: t.step4Title, desc: t.step4Desc },
  ];

  return (
    <main className="flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full border-b border-navy-700/50 bg-navy-900/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon className="w-8 h-8" />
            <span className="text-sm font-semibold tracking-[0.25em] text-white uppercase">Unfold Trails</span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-navy-200">
            <a href="#features" className="hover:text-white transition-colors">{t.navFeatures}</a>
            <a href="#modes" className="hover:text-white transition-colors">{t.navModes}</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">{t.navHowItWorks}</a>
            <a href="#waitlist" className="rounded-full bg-purple-600 px-5 py-2 text-white text-sm font-medium hover:bg-purple-500 transition-colors">
              {t.navJoinWaitlist}
            </a>
            <LanguageSwitcher />
          </div>
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-navy-600 bg-navy-800/50 text-navy-200 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16" /><path d="M4 12h16" /><path d="M4 18h16" /></svg>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-navy-700/50 bg-navy-900/95 backdrop-blur-lg px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="#features" onClick={() => setMenuOpen(false)} className="text-navy-200 hover:text-white transition-colors py-2">{t.navFeatures}</a>
            <a href="#modes" onClick={() => setMenuOpen(false)} className="text-navy-200 hover:text-white transition-colors py-2">{t.navModes}</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)} className="text-navy-200 hover:text-white transition-colors py-2">{t.navHowItWorks}</a>
            <a href="#waitlist" onClick={() => setMenuOpen(false)} className="rounded-full bg-purple-600 px-5 py-2.5 text-white text-sm font-medium hover:bg-purple-500 transition-colors text-center mt-1">
              {t.navJoinWaitlist}
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 w-[400px] h-[400px] rounded-full bg-purple-800/10 blur-[100px]" />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-[20%] left-[15%] w-1 h-1 rounded-full bg-purple-400/40 animate-float" />
          <div className="absolute top-[30%] right-[20%] w-1.5 h-1.5 rounded-full bg-purple-300/30 animate-float stagger-2" />
          <div className="absolute bottom-[30%] left-[25%] w-1 h-1 rounded-full bg-purple-500/30 animate-float stagger-4" />
          <div className="absolute top-[60%] right-[15%] w-1 h-1 rounded-full bg-purple-400/20 animate-float stagger-3" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="animate-pulse-glow rounded-full p-1 mb-8">
            <LogoIcon className="w-24 h-24 md:w-28 md:h-28" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] text-white uppercase opacity-0 animate-fade-in-up">
            Unfold Trails
          </h1>
          <p className="mt-4 text-lg md:text-xl tracking-[0.3em] text-navy-200 uppercase opacity-0 animate-fade-in-up stagger-1">
            {t.tagline}
          </p>
          <p className="mt-8 max-w-xl text-navy-100/70 text-base md:text-lg leading-relaxed opacity-0 animate-fade-in-up stagger-2">
            {t.heroDesc}
          </p>

          <div className="mt-8 flex items-center gap-3 opacity-0 animate-fade-in-up stagger-3">
            <span className="flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/15 px-5 py-2.5 text-sm font-medium text-purple-200">
              <MountainIcon /> {t.adventure}
            </span>
            <span className="text-navy-400">|</span>
            <span className="flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm font-medium text-gold">
              <SunIcon /> {t.journey}
            </span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-fade-in-up stagger-4">
            <a href="#waitlist" className="rounded-full bg-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-600/25 hover:bg-purple-500 hover:shadow-purple-500/30 transition-all">
              {t.joinTheWaitlist}
            </a>
            <a href="#features" className="flex items-center gap-2 rounded-full border border-navy-500 px-6 py-3.5 text-sm text-navy-100 hover:border-purple-500/40 hover:text-white transition-all">
              {t.learnMore} <ChevronDownIcon />
            </a>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-navy-400 text-xs opacity-0 animate-fade-in stagger-5">
            <span className="flex items-center gap-1.5"><AppleIcon /> {t.appStoreSoon}</span>
            <span className="hidden sm:inline text-navy-600">|</span>
            <span className="flex items-center gap-1.5"><PlayStoreIcon /> {t.googlePlaySoon}</span>
          </div>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 flex flex-col items-center gap-2 text-navy-400 animate-bounce">
          <ChevronDownIcon />
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* Features */}
      <section id="features" ref={featuresReveal.ref} className={`relative py-16 md:py-24 px-6 ${featuresReveal.visible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">{t.featuresLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.featuresTitle}</h2>
            <p className="mt-4 text-navy-200 max-w-2xl mx-auto">{t.featuresDesc}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="glass-card rounded-2xl p-6 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/15 text-purple-400 mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-navy-200 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* Dual Mode */}
      <section id="modes" ref={modesReveal.ref} className={`relative py-16 md:py-24 px-6 ${modesReveal.visible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-700/5 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">{t.dualModeLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.dualModeTitle}</h2>
            <p className="mt-4 text-navy-200 max-w-2xl mx-auto">{t.dualModeDesc}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-[60px] group-hover:bg-gold/10 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15 text-gold text-lg"><SunIcon /></div>
                  <h3 className="text-xl font-bold text-gold">{t.journeyMode}</h3>
                </div>
                <p className="text-sm text-navy-200 mb-6 leading-relaxed">{t.journeyDesc}</p>
                <ul className="space-y-3 text-sm text-navy-100">
                  <li className="flex items-center gap-2"><span className="text-gold">&#10038;</span> {t.journeyFeat1}</li>
                  <li className="flex items-center gap-2"><span className="text-gold">&#10038;</span> {t.journeyFeat2}</li>
                  <li className="flex items-center gap-2"><span className="text-gold">&#10038;</span> {t.journeyFeat3}</li>
                  <li className="flex items-center gap-2"><span className="text-gold">&#10038;</span> {t.journeyFeat4}</li>
                  <li className="flex items-center gap-2"><span className="text-gold">&#10038;</span> {t.journeyFeat5}</li>
                </ul>
              </div>
            </div>
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-[60px] group-hover:bg-purple-500/10 transition-colors" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600/15 text-purple-400 text-lg"><MountainIcon /></div>
                  <h3 className="text-xl font-bold text-purple-300">{t.adventureMode}</h3>
                </div>
                <p className="text-sm text-navy-200 mb-6 leading-relaxed">{t.adventureDesc}</p>
                <ul className="space-y-3 text-sm text-navy-100">
                  <li className="flex items-center gap-2"><span className="text-purple-400">&#9670;</span> {t.adventureFeat1}</li>
                  <li className="flex items-center gap-2"><span className="text-purple-400">&#9670;</span> {t.adventureFeat2}</li>
                  <li className="flex items-center gap-2"><span className="text-purple-400">&#9670;</span> {t.adventureFeat3}</li>
                  <li className="flex items-center gap-2"><span className="text-purple-400">&#9670;</span> {t.adventureFeat4}</li>
                  <li className="flex items-center gap-2"><span className="text-purple-400">&#9670;</span> {t.adventureFeat5}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* How It Works */}
      <section id="how-it-works" ref={howReveal.ref} className={`relative py-16 md:py-24 px-6 ${howReveal.visible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-purple-400 text-sm font-medium tracking-widest uppercase mb-3">{t.howItWorksLabel}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.howItWorksTitle}</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {steps.map((s) => (
              <div key={s.num} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-600/15 text-purple-400 font-bold text-sm">{s.num}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-sm text-navy-200 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider mx-auto max-w-4xl" />

      {/* Waitlist */}
      <section id="waitlist" ref={waitlistReveal.ref} className={`relative py-16 md:py-24 px-6 ${waitlistReveal.visible ? "scroll-visible" : "scroll-hidden"}`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-xl text-center">
          <LogoIcon className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.waitlistTitle}</h2>
          <p className="mt-4 text-navy-200">{t.waitlistDesc}</p>

          <div className="mt-8">
            <WaitlistForm />
          </div>

          <WaitlistCounter />

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <div className="flex items-center justify-center gap-2 rounded-xl border border-navy-600 bg-navy-800/50 px-5 py-3 text-sm text-navy-200 hover:border-navy-500 transition-colors">
              <AppleIcon />
              <div className="text-left">
                <p className="text-[10px] text-navy-400 leading-none">{t.comingSoonOn}</p>
                <p className="font-medium text-white">{t.appStore}</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl border border-navy-600 bg-navy-800/50 px-5 py-3 text-sm text-navy-200 hover:border-navy-500 transition-colors">
              <PlayStoreIcon />
              <div className="text-left">
                <p className="text-[10px] text-navy-400 leading-none">{t.comingSoonOn}</p>
                <p className="font-medium text-white">{t.googlePlay}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-navy-700/30 py-12 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <LogoIcon className="w-6 h-6" />
            <span className="text-xs font-semibold tracking-[0.2em] text-navy-200 uppercase">Unfold Trails</span>
          </div>
          <p className="text-xs tracking-[0.2em] text-navy-400 uppercase">{t.tagline}</p>
          <p className="text-xs text-navy-500">&copy; {new Date().getFullYear()} Unfold Trails. {t.footerRights}</p>
        </div>
      </footer>
    </main>
  );
}
