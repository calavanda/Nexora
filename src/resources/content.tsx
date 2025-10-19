import { Company, About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";


const company: Company = {
  name: `Nexora`,
  description: "Empresa de Diseñadores",
  avatar: "/images/NexoraLogo.png",
  email: "nexora@nexora.com",
  location: "America/Mexico_City"
};


const person: Person[] = [
  {
    firstName: "Alfredo",
    lastName: "Castillo Geronimo",
    name: "Alfredo",
    role: "Director Creativo",
    avatar: "/images/admin/a1.png",
    email: "alfredo@nexora.com",
    location: "America/Mexico_City"
  },
  {
    firstName: "Alondra Aimeé",
    lastName: "Garcia Gómez",
    name: "Alondra",
    role: "Coordinadora de Identidad de Marca",
    avatar: "/images/admin/a2.png",
    email: "alondra@nexora.com",
    location: "America/Mexico_City"
  },
  {
    firstName: "Baldomero",
    lastName: "Jimenez Garcia",
    name: "Baldomero",
    role: "Gerente de Desarrollo de Producto",
    avatar: "/images/admin/a3.png",
    email: "baldomero@nexora.com",
    location: "America/Mexico_City"
  }
];

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete al boletín de {company.name}</>,
  description: <>Recibe las últimas noticias sobre desarrollo web, tendencias tecnológicas y casos de éxito.</>,
};

const social: Social = [
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${company.email}`,
  },
];


const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${company.name}`,
  description: `Página oficial de ${company.name}, especialistas en desarrollo web multiplataforma y diseño digital.`,
  headline: <>Transformamos ideas en experiencias digitales excepcionales</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Servicios Destacados</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Web, Móvil, UX/UI y más
        </Text>
      </Row>
    ),
    href: "/work/servicios",
  },
  subline: (
    <>
      En <strong>Nexora</strong> creamos soluciones digitales innovadoras para
      <br /> dispositivos móviles y desktop. Combinamos diseño intuitivo 
      <br />con tecnología de vanguardia para impulsar tu negocio.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Nosotros",
  title: `Sobre nosotros – ${company.name}`,
  description: `Conoce más sobre ${company.name}, especialistas en desarrollo web multiplataforma con sede en ${company.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com/nexora",
  },
  intro: {
    display: true,
    title: "Quiénes somos",
    description: (
      <>
        En Nexora somos especialistas en desarrollo web multiplataforma, 
        creando experiencias digitales innovadoras para dispositivos móviles y desktop. 
        Transformamos ideas en soluciones tecnológicas robustas, diseñadas para impulsar 
        la presencia digital de nuestros clientes con interfaces intuitivas, 
        rendimiento optimizado y las últimas tendencias en desarrollo web.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Nexora Digital Solutions",
        timeframe: "2020 - Actualidad",
        role: "Desarrollo Web Multiplataforma",
        achievements: [
          <>Más de 50 proyectos web y móviles entregados exitosamente.</>,
          <>Especialización en aplicaciones responsive y progressive web apps.</>,
          <>Colaboración con startups y empresas establecidas en diversos sectores.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Desarrollo web en Nexora",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Servicios",
    institutions: [
      {
        name: "Desarrollo Web Responsive",
        description: <>Sitios web que se adaptan perfectamente a cualquier dispositivo y pantalla.</>,
      },
      {
        name: "Aplicaciones Móviles",
        description: <>Desarrollo de apps nativas e híbridas para iOS y Android.</>,
      },
      {
        name: "Diseño UX/UI",
        description: <>Interfaces intuitivas y experiencias de usuario excepcionales.</>,
      },
      {
        name: "Consultoría Tecnológica",
        description: <>Asesoramiento especializado para optimizar tu presencia digital.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Tecnologías y Metodologías",
    skills: [
      {
        title: "Desarrollo Frontend",
        description: (
          <>React, Next.js, TypeScript, y frameworks modernos para interfaces dinámicas y performantes.</>
        ),
        tags: [
          {
            name: "React",
            icon: "code",
          },
          {
            name: "Next.js",
            icon: "globe",
          },
        ],
      },
      {
        title: "Diseño Responsive",
        description: (
          <>Enfoque mobile-first y diseño adaptativo para garantizar perfecta visualización en todos los dispositivos.</>
        ),
        tags: [
          {
            name: "CSS3",
            icon: "layout",
          },
          {
            name: "Mobile-First",
            icon: "smartphone",
          },
        ],
      },
    ],
  },
};


const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Artículos sobre desarrollo web y tecnología",
  description: `Lee las últimas tendencias, tutoriales y casos de estudio de ${company.name}`,
};

const work: Work = {
  path: "/work",
  label: "Portafolio",
  title: `Portafolio – ${company.name}`,
  description: `Descubre nuestros proyectos y casos de éxito en desarrollo web multiplataformaen ${company.name}`,
};


const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería – ${company.name}`,
  description: `Capturas y demostraciones de nuestros proyectos de desarrollo web en ${company.name}`,
  images: [
    {
      src: "/images/gallery/proyecto-web-1.jpg",
      alt: "Proyecto de desarrollo web",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/proyecto-movil-1.jpg",
      alt: "Aplicación móvil desarrollada",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, company };