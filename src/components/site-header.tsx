import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-xl md:text-2xl tracking-tight">
          Fauzan<span className="text-gold">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }} className="underline-grow">
            Index
          </Link>
          <Link to="/about" activeProps={{ className: "text-foreground" }} className="underline-grow">
            About
          </Link>
          <Link to="/" hash="works" className="underline-grow">
            Works
          </Link>
          <Link to="/" hash="contact" className="underline-grow">
            Contact
          </Link>
        </nav>
        <a
          href="mailto:hello@fauzan.studio"
          className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground"
        >
          <span className="size-1.5 rounded-full bg-gold animate-pulse" />
          Available
        </a>
      </div>
    </header>
  );
}
