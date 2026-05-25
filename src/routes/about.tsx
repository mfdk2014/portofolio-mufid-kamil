import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactSection } from "@/components/contact-section";
import about from "@/assets/about.jpg";
import profile from "@/assets/profile.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mufid Kamil" },
      {
        name: "description",
        content:
          "About Mufid Kamil — visual creator working across photography, design, video and 3D.",
      },
      { property: "og:title", content: "About — Mufid Kamil" },
      {
        property: "og:description",
        content: "Story, tools and practice of Mufid Kamil.",
      },
    ],
  }),
  component: AboutPage,
});

const tools = [
  "Photoshop",
  "Illustrator",
  "Lightroom",
  "Premiere Pro",
  "After Effects",
  "DaVinci Resolve",
  "Blender",
  "Cinema 4D",
];

const stats = [
  { value: "120+", label: "Projects Completed" },
  { value: "06", label: "Years of Practice" },
  { value: "40+", label: "Happy Clients" },
  { value: "12", label: "Awards & Features" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-32 md:pt-40">
        <section className="mx-auto max-w-[1600px] px-6 md:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-8">
            — About
          </p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display italic text-[12vw] md:text-[8vw] leading-[0.9] tracking-tight text-balance max-w-[16ch]"
          >
            A quiet eye in a loud world.
          </motion.h1>
        </section>

        <section className="mx-auto max-w-[1600px] px-6 md:px-12 mt-20 md:mt-32 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-6 aspect-[4/5] overflow-hidden">
            <img src={about} alt="At the desk" loading="lazy" className="size-full object-cover grayscale" />
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 self-end space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm <span className="text-foreground">Fauzan Maulana</span>, a visual
              creator based in Jakarta. For the past six years I've worked across
              stills, motion and 3D — for editorial, fashion, music and brands that
              value restraint.
            </p>
            <p>
              My practice begins with light and ends with rhythm. I'm drawn to the
              spaces between frames — the silence before a cut, the grain of a
              shadow, the slow weight of a single color.
            </p>
            <p>
              I work independently, occasionally with a small trusted team, and I'm
              open to international commissions.
            </p>
          </div>
        </section>

        {/* Tools */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-12 mt-32 md:mt-48">
          <div className="grid grid-cols-12 gap-6 md:gap-10 border-t border-border pt-12">
            <p className="col-span-12 md:col-span-3 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Tools / Software
            </p>
            <div className="col-span-12 md:col-span-9 flex flex-wrap gap-x-10 gap-y-4">
              {tools.map((t) => (
                <span key={t} className="font-display italic text-3xl md:text-5xl tracking-tight hover:text-gold transition-colors duration-500">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-12 mt-24 md:mt-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 border-t border-border pt-12">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display italic text-5xl md:text-7xl">{s.value}</div>
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portrait band */}
        <section className="mt-32 md:mt-48 aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
          <img src={profile} alt="Portrait" loading="lazy" className="size-full object-cover grayscale" />
        </section>

        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
