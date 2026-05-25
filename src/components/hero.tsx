import { motion } from "motion/react";
import { ArrowDownToLine, ArrowRight, Instagram, Youtube } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { Link } from "@tanstack/react-router";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-32 pb-16">
      {/* Top meta line */}
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 flex items-center justify-between font-mono text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span>Portfolio / 2026</span>
        <span className="hidden md:inline">Depok — Jawa Barat</span>
        <span>N° 001</span>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-12 mt-10 md:mt-20 grid grid-cols-12 gap-6 md:gap-10 items-end">
        {/* Headline */}
        <div className="col-span-12 md:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6"
          >
            — Visual Creator
          </motion.p>
          <h1 className="font-display text-[15vw] md:text-[10.5vw] leading-[0.88] tracking-[-0.02em] text-balance">
            {["Mufid", "Kamil"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.1 + i * 0.15, ease }}
                className="block italic"
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease }}
          className="col-span-7 md:col-span-4 aspect-[4/5] relative overflow-hidden"
        >
          <img
            src={profile}
            alt="Portrait of Fauzan Maulana"
            width={1024}
            height={1280}
            className="absolute inset-0 size-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Bottom row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7, ease }}
        className="mx-auto max-w-[1600px] px-6 md:px-12 mt-16 md:mt-24 grid grid-cols-12 gap-6 md:gap-10 items-end"
      >
        <div className="col-span-12 md:col-span-5">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md text-balance">
            Independent visual creator crafting cinematic photography, motion and
            three-dimensional work for brands and storytellers.
          </p>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-wrap gap-3">
          <Link
            to="/"
            hash="works"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-6 py-4 text-xs uppercase tracking-[0.2em] hover:bg-gold transition-colors duration-500"
          >
            View Works
            <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="#"
            className="inline-flex items-center gap-3 border border-border px-6 py-4 text-xs uppercase tracking-[0.2em] hover:border-foreground transition-colors duration-500"
          >
            Download CV
            <ArrowDownToLine className="size-3.5" />
          </a>
        </div>

        <div className="col-span-12 md:col-span-3 flex md:justify-end items-center gap-5 text-muted-foreground">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
            <Instagram className="size-4" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-foreground transition-colors text-sm font-mono">
            TT
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-foreground transition-colors">
            <Youtube className="size-4" />
          </a>
          <a href="https://behance.net" target="_blank" rel="noreferrer" aria-label="Behance" className="hover:text-foreground transition-colors text-sm font-mono">
            Bē
          </a>
        </div>
      </motion.div>
    </section>
  );
}
