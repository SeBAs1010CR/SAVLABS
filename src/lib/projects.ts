import type { Locale } from "@/lib/i18n";

export type LocalizedProject = {
  id: string;
  title: string;
  category: { en: string; es: string };
  description: { en: string; es: string };
  year: string;
  tags: string[];
  image: string;
  video?: string;
  gallery?: string[];
  href?: string;
  featured?: boolean;
  vertical?: boolean;
};

export type Project = Omit<LocalizedProject, "category" | "description"> & {
  category: string;
  description: string;
};

export function resolveProject(
  project: LocalizedProject,
  lang: Locale
): Project {
  const { category, description, ...rest } = project;
  return {
    ...rest,
    category: category[lang],
    description: description[lang],
  };
}

export const projects: LocalizedProject[] = [
  {
    id: "ins",
    title: "IoT",
    category: {
      en: "IoT / Embedded",
      es: "IoT / Embebido",
    },
    description: {
      en: "We design and develop solutions based on embedded systems and IoT, integrating hardware, software, and custom electronics.",
      es: "Diseñamos y desarrollamos soluciones basadas en sistemas embebidos e IoT, integrando hardware, software y electrónica personalizada.",
    },
    year: "2026",
    tags: ["IoT", "Embedded", "Hardware"],
    image: "/images/projects/ins/pantalla-ins.png",
    video:
      "https://pub-40f1330aed3b48358ef77d4a0f616c72.r2.dev/Grabación%20de%20pantalla%202026-07-13%20a%20la(s)%2011.24.37%E2%80%AFa.%E2%80%AFm..mov",
    featured: true,
  },
  {
    id: "rexona",
    title: "Dispensador Automático",
    category: {
      en: "Interactive / Hardware",
      es: "Interactivo / Hardware",
    },
    description: {
      en: "Interactive product installation built for Rexona. Custom circuit with a microcontroller driving pneumatic actuators, programmed with a Raspberry Pi.",
      es: "Instalación interactiva de producto para Rexona. Circuito propio con microcontrolador que acciona actuadores neumáticos, programado con una Raspberry Pi.",
    },
    year: "2026",
    tags: ["Interactive", "Hardware", "Embedded"],
    image: "/images/projects/rexona/rexona-4.jpg",
    video:
      "https://pub-40f1330aed3b48358ef77d4a0f616c72.r2.dev/RexonaDispensador.mov",
    gallery: [
      "/images/projects/rexona/rexona-4.jpg",
      "/images/projects/rexona/rexona-6.jpg",
      "/images/projects/rexona/rexona-5.jpg",
      "/images/projects/rexona/rexona-1.png",
      "/images/projects/rexona/rexona-2.jpg",
      "/images/projects/rexona/rexona-3.jpg",
    ],
    vertical: true,
  },
  {
    id: "telecable-form",
    title: "Formularios",
    category: {
      en: "Web / HTML",
      es: "Web / HTML",
    },
    description: {
      en: "Interactive form flows built with pure HTML, CSS, and JavaScript. Vertical mobile-first experiences with a clean interface.",
      es: "Flujos de formularios interactivos hechos con HTML, CSS y JavaScript puro. Experiencias verticales pensadas para móvil con una interfaz limpia.",
    },
    year: "2026",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/images/projects/telecable/tel-1.png",
    video:
      "https://pub-40f1330aed3b48358ef77d4a0f616c72.r2.dev/Telecabe%20form.mov",
    gallery: [
      "/images/projects/telecable/tel-1.png",
      "/images/projects/telecable/tel-2.png",
      "/images/projects/telecable/tel-3.png",
      "/images/projects/telecable/tel-4.png",
    ],
    vertical: true,
  },
  {
    id: "pws",
    title: "PWS",
    category: {
      en: "Landing Page",
      es: "Landing Page",
    },
    description: {
      en: "Landing page for an architecture studio. Clean editorial layout showcasing design and construction projects.",
      es: "Landing page para un estudio de arquitectura. Layout editorial limpio mostrando proyectos de diseño y construcción.",
    },
    year: "2025",
    tags: ["Landing", "UI/UX"],
    image: "/images/projects/pws/pws-1.jpg",
    gallery: [
      "/images/projects/pws/pws-1.jpg",
      "/images/projects/pws/pws-2.jpg",
      "/images/projects/pws/pws-3.jpg",
      "/images/projects/pws/pws-4.jpg",
      "/images/projects/pws/pws-5.jpg",
    ],
  },
  {
    id: "amazon-tracker",
    title: "Amazon Tracker",
    category: {
      en: "Automation Tool",
      es: "Herramienta de Automatización",
    },
    description: {
      en: "Internal tool to track Amazon products and listings, built to streamline monitoring and daily operations.",
      es: "Herramienta interna para rastrear productos y listados de Amazon, construida para agilizar el monitoreo y la operación diaria.",
    },
    year: "2024",
    tags: ["Automation", "Dashboard", "Data"],
    image: "/images/projects/amazon-tracker/tracker-1.png",
    gallery: [
      "/images/projects/amazon-tracker/tracker-1.png",
      "/images/projects/amazon-tracker/tracker-2.png",
      "/images/projects/amazon-tracker/tracker-3.png",
      "/images/projects/amazon-tracker/tracker-4.png",
    ],
  },
];
