import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} Fauzan Maulana — Visual Creator
        </div>
        <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="underline-grow hover:text-foreground">Instagram</a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="underline-grow hover:text-foreground">TikTok</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="underline-grow hover:text-foreground">YouTube</a>
          <a href="https://behance.net" target="_blank" rel="noreferrer" className="underline-grow hover:text-foreground">Behance</a>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-foreground"
          aria-label="Back to top"
        >
          <span className="size-9 rounded-full border border-border grid place-items-center group-hover:bg-gold group-hover:text-background group-hover:border-gold transition-colors duration-500">
            <ArrowUp className="size-3.5" />
          </span>
          Back to top
        </button>
      </div>
    </footer>
  );
}
