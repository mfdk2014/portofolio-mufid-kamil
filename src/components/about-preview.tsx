import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import about from "@/assets/about.jpg";

const stats = [
  { value: "120+", label: "Projects" },
  { value: "06", label: "Years" },
  { value: "40+", label: "Clients" },
];

export function AboutPreview() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-40">
      <div className="grid grid-cols-12 gap-6 md:gap-10 items-end">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 md:col-span-5 aspect-[3/4] overflow-hidden"
        >
          <img
            src={about}
            alt="Fauzan in his studio"
            loading="lazy"
            className="size-full object-cover grayscale"
          />
        </motion.div>

        <div className="col-span-12 md:col-span-7 md:pl-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
            — About
          </p>
          <h2 className="font-display italic text-4xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-balance">
            I build quiet, cinematic worlds — one frame at a time.
          </h2>
          <p className="mt-10 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Based in Jakarta, working worldwide. I move between stills, motion and
            3D — guided by light, restraint and the belief that great work whispers.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-border pt-5">
                <div className="font-display text-4xl md:text-5xl italic">{s.value}</div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/about"
            className="inline-flex items-center gap-3 mt-14 text-xs uppercase tracking-[0.2em] underline-grow"
          >
            Read full story
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
