import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { works } from "@/lib/works";

export function WorksGrid() {
  return (
    <section id="works" className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-40 scroll-mt-24">
      <div className="flex items-end justify-between mb-16 md:mb-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-4">
            — Selected Works
          </p>
          <h2 className="font-display italic text-5xl md:text-7xl tracking-tight">
            Recent Projects
          </h2>
        </div>
        <p className="hidden md:block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {works.length} / Projects
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-20 md:gap-y-32">
        {works.map((work, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={work.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={`md:col-span-7 ${isEven ? "" : "md:col-start-6 md:col-span-7"}`}
            >
              <Link to="/works/$slug" params={{ slug: work.slug }} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-card">
                  <img
                    src={work.cover}
                    alt={work.title}
                    loading="lazy"
                    className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute top-5 left-5 font-mono text-xs text-foreground/80">
                    {work.index} / {work.year}
                  </div>
                  <div className="absolute bottom-5 right-5 size-12 rounded-full bg-foreground text-background grid place-items-center translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div className="mt-6 flex items-end justify-between gap-6">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-gold mb-2">
                      {work.category}
                    </p>
                    <h3 className="font-display italic text-3xl md:text-5xl tracking-tight">
                      {work.title}
                    </h3>
                  </div>
                  <span className="hidden md:inline-block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground pb-2">
                    {work.client}
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
