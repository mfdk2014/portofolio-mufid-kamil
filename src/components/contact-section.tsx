import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const channels = [
  { label: "Email", value: "mufidkamil15@gmail.com", href: "mailto:hello@fauzan.studio" },
  { label: "Instagram", value: "@mufidkamil", href: "https://instagram.com" },
  { label: "TikTok", value: "@fauzan.mln", href: "https://tiktok.com" },
  { label: "WhatsApp", value: "+62 8571 115 1240", href: "https://wa.me/6285711151240" },
  { label: "Behance", value: "behance.net/mufid", href: "https://behance.net" },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-40 scroll-mt-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6"
      >
        — Let's Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="font-display italic text-[14vw] md:text-[10vw] leading-[0.88] tracking-tight text-balance max-w-[18ch]"
      >
        Have a story to tell?
      </motion.h2>

      <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-x-6 gap-y-2 border-t border-border">
        {channels.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group md:col-span-12 grid grid-cols-12 items-center py-7 md:py-8 border-b border-border transition-colors hover:text-gold"
          >
            <span className="col-span-1 font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="col-span-3 md:col-span-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {c.label}
            </span>
            <span className="col-span-7 md:col-span-8 font-display italic text-2xl md:text-4xl tracking-tight">
              {c.value}
            </span>
            <span className="col-span-1 flex justify-end">
              <ArrowUpRight className="size-5 md:size-6 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
