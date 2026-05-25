import photographyImg from "@/assets/work-photography.jpg";
import graphicImg from "@/assets/work-graphic.jpg";
import videoImg from "@/assets/work-video.jpg";
import threeDImg from "@/assets/work-3d.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export type WorkSlug =
  | "photography-project"
  | "graphic-design-project"
  | "cinematic-edit"
  | "3d-project";

export interface Work {
  slug: WorkSlug;
  index: string;
  title: string;
  category: "Photography" | "Graphic Design" | "Video Editing" | "3D Design";
  year: string;
  client: string;
  cover: string;
  description: string;
  software: string[];
  gallery: string[];
  aspect: "portrait" | "landscape" | "square";
}

export const works: Work[] = [
  {
    slug: "photography-project",
    index: "01",
    title: "Silent Frames",
    category: "Photography",
    year: "2025",
    client: "Personal",
    cover: photographyImg,
    description:
      "A monochrome study of solitude shot across late nights in unnamed cities. Every frame was lit by available light, processed for grain and depth, and printed in editorial sequence.",
    software: ["Lightroom", "Photoshop", "Capture One"],
    gallery: [photographyImg, gallery2, gallery1, gallery3],
    aspect: "portrait",
  },
  {
    slug: "graphic-design-project",
    index: "02",
    title: "Editorial Type No. 04",
    category: "Graphic Design",
    year: "2025",
    client: "MONO Press",
    cover: graphicImg,
    description:
      "A typographic poster series exploring weight, void and ornament. Built on a 12-column grid and printed risograph with a single metallic pass.",
    software: ["Illustrator", "Photoshop", "InDesign"],
    gallery: [graphicImg, gallery1, gallery3, gallery2],
    aspect: "portrait",
  },
  {
    slug: "cinematic-edit",
    index: "03",
    title: "After Hours",
    category: "Video Editing",
    year: "2024",
    client: "Independent Short",
    cover: videoImg,
    description:
      "A 4-minute cinematic short edited from over 120 minutes of nightlife footage. Color grade leans deep contrast with desaturated highlights and a touch of warm gold.",
    software: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    gallery: [videoImg, gallery1, gallery2, gallery3],
    aspect: "landscape",
  },
  {
    slug: "3d-project",
    index: "04",
    title: "Auric Form",
    category: "3D Design",
    year: "2025",
    client: "Concept",
    cover: threeDImg,
    description:
      "A series of brass-finish sculptural studies rendered in Blender. Soft studio HDRI lighting, custom procedural materials, and post-processed for cinematic falloff.",
    software: ["Blender", "Cinema 4D", "Photoshop"],
    gallery: [threeDImg, gallery1, gallery2, gallery3],
    aspect: "portrait",
  },
];

export function getWork(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function getNextWork(slug: string): Work {
  const idx = works.findIndex((w) => w.slug === slug);
  return works[(idx + 1) % works.length];
}
