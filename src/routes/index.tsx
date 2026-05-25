import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { AboutPreview } from "@/components/about-preview";
import { WorksGrid } from "@/components/works-grid";
import { ContactSection } from "@/components/contact-section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mufid Kamil — Visual Creator" },
      {
        name: "description",
        content:
          "Portfolio of Mufid Kamil — independent visual creator working across cinematic photography, graphic design, video editing and 3D.",
      },
      { property: "og:title", content: "Mufid Kamil — Visual Creator" },
      {
        property: "og:description",
        content: "Cinematic photography, graphic design, video and 3D portfolio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Marquee />
        <AboutPreview />
        <WorksGrid />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}
