export const locales = ["en", "es"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

const en = {
  nav: {
    home: "HOME",
    services: "SERVICES",
    projects: "PROJECTS",
    contact: "CONTACT",
  },
  open: {
    tagline: "TECHNOLOGY • DEVELOPMENT • GAMING",
    explore: "Explore",
  },
  home: {
    welcome: "WELCOME TO SAVLABS",
    comingSoon: "Coming soon",
    tagline: "TECHNOLOGY • DEVELOPMENT • GAMING",
    enter: "ENTER",
    scroll: "SCROLL",
    eyebrow: "TECHNOLOGY • DEVELOPMENT • GAMING",
    heroTitle: "SAVLABS",
    heroSubtitle:
      "Custom software, web platforms, automation, IoT and electronics.",
    heroSubtitle2: "Real systems built to power your operation.",
    heroPrimary: "VIEW PROJECTS",
    heroSecondary: "START A PROJECT",
    marquee: [
      "WEB DEVELOPMENT",
      "UI / UX",
      "AUTOMATION",
      "GAMING",
      "IMMERSIVE",
    ],
    selectedEyebrow: "SELECTED WORK",
    selectedTitle: "FEATURED PROJECTS",
    selectedSubtitle: "A look at the latest builds from the studio.",
    selectedAll: "VIEW ALL PROJECTS",
    ctaEyebrow: "READY TO BUILD?",
    ctaTitle: "LET'S BUILD WHAT YOU'RE LOOKING FOR.",
    ctaAction: "START A PROJECT",
    ctaWhatsapp: "LET'S TALK ON WHATSAPP",
    aboutEyebrow: "WHAT WE DO",
    aboutTitle: "SYSTEMS BUILT TO MEASURE",
    aboutText: [
      "SAVLABS designs and builds digital systems from scratch: custom software, web platforms, automation tools, and interactive experiences tailored to each client.",
      "We work close to the idea — from the first sketch to the final deployment — so every build fits the operation exactly the way it needs to.",
    ],
    aboutList: [
      {
        title: "Custom Software",
        desc: "Systems designed around your workflow, not the other way around.",
      },
      {
        title: "Web Platforms",
        desc: "Sites and applications that grow with the product.",
      },
      {
        title: "Automation",
        desc: "Tools that remove manual work and speed up operations.",
      },
    ],
  },
  projects: {
    eyebrow: "SAVLABS WORK",
    title: "PROJECTS",
    subtitle:
      "Selected work and real projects built for companies.",
    featured: "FEATURED WORK",
    viewCase: "VIEW",
    close: "CLOSE",
  },
  gaming: {
    eyebrow: "SAVLABS GAMING",
    title: "GAMING",
    subtitle:
      "Short-form content and fast-cut edits made for social and beyond.",
  },
  services: {
    eyebrow: "SAVLABS SERVICES",
    title: "SERVICES",
    subtitle:
      "Custom software, web platforms, automation, IoT and electronics — real systems built with a practical foundation and a distinctive visual identity.",
    readyTitle: "READY TO BUILD?",
    readySubtitle: "Let's turn the idea into a real digital experience.",
    start: "START A PROJECT",
    items: [
      {
        number: "01",
        title: "Web Development",
        description:
          "Custom websites and web apps built with clean structure, strong visuals, and room to scale.",
        tags: ["Next.js", "React", "Responsive", "SEO"],
      },
      {
        number: "02",
        title: "UI / UX Interfaces",
        description:
          "Modern interfaces designed for clarity, impact, and smooth user experiences across devices.",
        tags: ["Design Systems", "Prototyping"],
      },
      {
        number: "03",
        title: "Automation Tools",
        description:
          "Internal tools, dashboards, and workflows that save time and make operations easier to manage.",
        tags: ["Dashboards", "Workflows", "Data"],
      },
      {
        number: "04",
        title: "Interactive Experiences",
        description:
          "Gaming-inspired interfaces, animated sections, and immersive digital experiences.",
        tags: ["Animations", "Immersive"],
      },
    ],
  },
  pricing: {
    eyebrow: "SAVLABS PRICING",
    title: "ESTIMATE YOUR PROJECT",
    subtitle:
      "Pick the services you need. Per-hour services are multiplied by quantity, project-based services are fixed. Send the estimate straight to WhatsApp.",
    yourQuote: "YOUR QUOTE",
    empty: "No services yet. Add what you need.",
    total: "ESTIMATED TOTAL",
    send: "SEND VIA WHATSAPP",
    clear: "CLEAR ALL",
    remove: "Remove",
    scope: "BY SCOPE",
    note: "Final price may vary depending on scope.",
  },
  contact: {
    title: "CONTACT",
    subtitle: "LET'S BUILD SOMETHING TOGETHER",
    name: "NAME",
    email: "EMAIL",
    message: "MESSAGE",
    send: "SEND",
    sending: "SENDING...",
    sent: "MESSAGE SENT",
    error: "ERROR SENDING. TRY AGAIN.",
  },
  footer: "© 2026 SAVLABS • ALL RIGHTS RESERVED",
};

const es: typeof en = {
  nav: {
    home: "INICIO",
    services: "SERVICIOS",
    projects: "PROYECTOS",
    contact: "CONTACTO",
  },
  open: {
    tagline: "TECNOLOGÍA • DESARROLLO • GAMING",
    explore: "Explorar",
  },
  home: {
    welcome: "BIENVENIDO A SAVLABS",
    comingSoon: "Próximamente",
    tagline: "TECNOLOGÍA • DESARROLLO • GAMING",
    enter: "ENTRAR",
    scroll: "DESPLAZAR",
    eyebrow: "TECNOLOGÍA • DESARROLLO • GAMING",
    heroTitle: "SAVLABS",
    heroSubtitle:
      "Software a la medida, plataformas web, automatización, IoT y electrónica.",
    heroSubtitle2: "Sistemas reales que mueven tu operación.",
    heroPrimary: "VER PROYECTOS",
    heroSecondary: "EMPEZAR UN PROYECTO",
    marquee: [
      "DESARROLLO WEB",
      "UI / UX",
      "AUTOMATIZACIÓN",
      "GAMING",
      "INMERSIVO",
    ],
    selectedEyebrow: "TRABAJO SELECCIONADO",
    selectedTitle: "PROYECTOS DESTACADOS",
    selectedSubtitle: "Un vistazo a los últimos desarrollos del estudio.",
    selectedAll: "VER TODOS LOS PROYECTOS",
    ctaEyebrow: "¿LISTO PARA CONSTRUIR?",
    ctaTitle: "DESARROLLEMOS LO QUE ANDÁS BUSCANDO.",
    ctaAction: "EMPEZAR UN PROYECTO",
    ctaWhatsapp: "HABLEMOS POR WHATSAPP",
    aboutEyebrow: "QUÉ HACEMOS",
    aboutTitle: "SISTEMAS HECHOS A LA MEDIDA",
    aboutText: [
      "SAVLABS diseña y construye sistemas digitales desde cero: software a la medida, plataformas web, herramientas de automatización y experiencias interactivas adaptadas a cada cliente.",
      "Trabajamos pegados a la idea — desde el primer boceto hasta el despliegue final — para que cada desarrollo encaje con la operación exactamente como se necesita.",
    ],
    aboutList: [
      {
        title: "Software a la medida",
        desc: "Sistemas diseñados alrededor de tu flujo de trabajo, y no al revés.",
      },
      {
        title: "Plataformas web",
        desc: "Sitios y aplicaciones que crecen con el producto.",
      },
      {
        title: "Automatización",
        desc: "Herramientas que eliminan trabajo manual y aceleran la operación.",
      },
    ],
  },
  projects: {
    eyebrow: "TRABAJO SAVLABS",
    title: "PROYECTOS",
    subtitle:
      "Trabajo seleccionado y proyectos reales hechos para empresas.",
    featured: "TRABAJO DESTACADO",
    viewCase: "VER",
    close: "CERRAR",
  },
  gaming: {
    eyebrow: "SAVLABS GAMING",
    title: "GAMING",
    subtitle:
      "Contenido de formato corto y ediciones de ritmo rápido para redes y más.",
  },
  services: {
    eyebrow: "SERVICIOS SAVLABS",
    title: "SERVICIOS",
    subtitle:
      "Productos digitales, experiencias web y sistemas de tecnología construidos con una identidad visual futurista y una base práctica.",
    readyTitle: "¿LISTO PARA CONSTRUIR?",
    readySubtitle: "Convirtamos la idea en una experiencia digital real.",
    start: "EMPEZAR UN PROYECTO",
    items: [
      {
        number: "01",
        title: "Desarrollo Web",
        description:
          "Sitios web y aplicaciones personalizadas con estructura limpia, visuales fuertes y espacio para escalar.",
        tags: ["Next.js", "React", "Responsive", "SEO"],
      },
      {
        number: "02",
        title: "Interfaces UI / UX",
        description:
          "Interfaces modernas diseñadas para claridad, impacto y experiencias de usuario fluidas en todos los dispositivos.",
        tags: ["Sistemas de Diseño", "Prototipado"],
      },
      {
        number: "03",
        title: "Herramientas de Automatización",
        description:
          "Herramientas internas, dashboards y flujos de trabajo que ahorran tiempo y hacen más fácil la operación.",
        tags: ["Dashboards", "Flujos", "Datos"],
      },
      {
        number: "04",
        title: "Experiencias Interactivas",
        description:
          "Interfaces inspiradas en gaming, secciones animadas y experiencias digitales inmersivas.",
        tags: ["Animaciones", "Inmersivo"],
      },
    ],
  },
  pricing: {
    eyebrow: "TARIFARIO SAVLABS",
    title: "ESTIMÁ TU PROYECTO",
    subtitle:
      "Elegí los servicios que necesitás. Los servicios por hora se multiplican por la cantidad, los de proyecto tienen precio fijo. Enviá el estimado directo a WhatsApp.",
    yourQuote: "TU COTIZACIÓN",
    empty: "Sin servicios aún. Agregá lo que necesitás.",
    total: "TOTAL ESTIMADO",
    send: "ENVIAR POR WHATSAPP",
    clear: "VACIAR",
    remove: "Quitar",
    scope: "SEGÚN ALCANCE",
    note: "El precio final puede variar según el alcance.",
  },
  contact: {
    title: "CONTACTO",
    subtitle: "CONSTRUYAMOS ALGO JUNTOS",
    name: "NOMBRE",
    email: "CORREO",
    message: "MENSAJE",
    send: "ENVIAR",
    sending: "ENVIANDO...",
    sent: "MENSAJE ENVIADO",
    error: "ERROR AL ENVIAR. INTENTÁ DE NUEVO.",
  },
  footer: "© 2026 SAVLABS • TODOS LOS DERECHOS RESERVADOS",
};

export const dictionaries = { en, es };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
