import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getNextWork, getWork } from "@/lib/works";

export const Route = createFileRoute("/works/$slug")({
  loader: ({ params }) => {
    const work = getWork(params.slug);
    if (!work) throw notFound();
    return { work, next: getNextWork(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { work } = loaderData;
    return {
      meta: [
        { title: `${work.title} — Fauzan Maulana` },
        { name: "description", content: work.description.slice(0, 150) },
        { property: "og:title", content: `${work.title} — Fauzan Maulana` },
        { property: "og:description", content: work.description.slice(0, 150) },
        { property: "og:image", content: work.cover },
      ],
    };
  },
  component: WorkDetail,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center text-center">
      <div>
        <h1 className="font-display italic text-6xl">Project not found</h1>
        <Link to="/" className="mt-6 inline-block underline-grow">Return home</Link>
      </div>
    </div>
  ),
  errorComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <p>Something went wrong.</p>
    </div>
  ),
});

function WorkDetail() {
  const { work, next } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative h-[100svh] w-full overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            src={work.cover}
            alt={work.title}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="mx-auto w-full max-w-[1600px] px-6 md:px-12 pb-14 md:pb-20">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4 }}
                className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6"
              >
                {work.index} / {work.category}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-display italic text-[14vw] md:text-[10vw] leading-[0.9] tracking-tight"
              >
                {work.title}
              </motion.h1>
            </div>
          </div>
        </section>

        {/* Meta + description */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-40 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-4 space-y-10">
            {[
              { label: "Client", value: work.client },
              { label: "Year", value: work.year },
              { label: "Category", value: work.category },
              { label: "Software", value: work.software.join(" · ") },
            ].map((row) => (
              <div key={row.label} className="border-t border-border pt-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {row.label}
                </p>
                <p className="mt-3 font-display italic text-2xl md:text-3xl tracking-tight">
                  {row.value}
                </p>
              </div>
            ))}
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
              — Overview
            </p>
            <p className="text-2xl md:text-4xl leading-[1.25] font-display italic tracking-tight text-balance">
              {work.description}
            </p>
          </div>
        </section>

        {/* Gallery */}
        <section className="mx-auto max-w-[1600px] px-6 md:px-12 pb-24 md:pb-40 space-y-6 md:space-y-10">
          {work.gallery.map((src: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className={
                i % 3 === 0
                  ? "aspect-[16/9] w-full overflow-hidden"
                  : i % 3 === 1
                  ? "grid grid-cols-12 gap-6 md:gap-10"
                  : "aspect-[3/2] w-full md:w-2/3 mx-auto overflow-hidden"
              }
            >
              {i % 3 === 1 ? (
                <>
                  <div className="col-span-12 md:col-span-5 aspect-[4/5] overflow-hidden">
                    <img src={src} alt="" loading="lazy" className="size-full object-cover" />
                  </div>
                  <div className="col-span-12 md:col-span-6 md:col-start-7 aspect-[4/5] overflow-hidden self-end">
                    <img src={work.gallery[(i + 1) % work.gallery.length]} alt="" loading="lazy" className="size-full object-cover" />
                  </div>
                </>
              ) : (
                <img src={src} alt="" loading="lazy" className="size-full object-cover" />
              )}
            </motion.div>
          ))}
        </section>

        {/* Next project */}
        <section className="border-t border-border">
          <Link
            to="/works/$slug"
            params={{ slug: next.slug }}
            className="group block mx-auto max-w-[1600px] px-6 md:px-12 py-20 md:py-32"
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold mb-6">
              — Next Project
            </p>
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-display italic text-5xl md:text-8xl tracking-tight transition-colors group-hover:text-gold">
                {next.title}
              </h3>
              <span className="hidden md:grid size-20 rounded-full border border-border place-items-center group-hover:bg-gold group-hover:text-background group-hover:border-gold transition-all duration-500">
                <ArrowUpRight className="size-7" />
              </span>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {next.category} — {next.year}
            </p>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
