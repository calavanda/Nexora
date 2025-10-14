import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Centro",
  lastName: "Idiomas",
  name: `Centro de Idiomas`,
  role: "Institución Educativa",
  avatar: "/images/avatar.jpg",
  email: "centro_idiomas@gmail.com",
  location: "America/Mexico_City",
  languages: ["Español", "Inglés", "Francés", "Alemán"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Suscríbete al boletín de {person.name}</>,
  description: <>Recibe noticias, consejos y promociones sobre nuestros cursos de idiomas.</>,
};

const social: Social = [
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/centro.idiomas",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/centro-idiomas",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name}`,
  description: `Página oficial del ${person.name}, donde encontrarás información sobre nuestros cursos y programas.`,
  headline: <>Aprende idiomas y abre las puertas al mundo</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Cursos Destacados</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Inglés, Francés, Alemán y más
        </Text>
      </Row>
    ),
    href: "/work/cursos",
  },
  subline: (
    <>
      Bienvenido al <strong>Centro de Idiomas</strong>, donde te ayudamos a
      <br /> dominar nuevas lenguas y culturas. Aprende con profesores
      certificados y materiales actualizados.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Nosotros",
  title: `Sobre nosotros – ${person.name}`,
  description: `Conoce más sobre ${person.name}, institución dedicada a la enseñanza de idiomas en ${person.location}.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com", // Puedes cambiarlo a tu agenda o contacto
  },
  intro: {
    display: true,
    title: "Quiénes somos",
    description: (
      <>
        Somos un centro educativo especializado en la enseñanza de diferentes
        idiomas, comprometidos en brindar a nuestros estudiantes las mejores
        herramientas para comunicarse en un mundo globalizado.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Centro de Idiomas",
        timeframe: "2005 - Actualidad",
        role: "Enseñanza de Idiomas",
        achievements: [
          <>Más de 5,000 alumnos capacitados en distintos idiomas.</>,
          <>Programas personalizados para estudiantes, profesionales y empresas.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Clases en el centro",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Programas de Estudio",
    institutions: [
      {
        name: "Cursos de Inglés",
        description: <>Desde nivel básico hasta avanzado, con certificación internacional.</>,
      },
      {
        name: "Cursos de Francés",
        description: <>Clases presenciales y en línea, adaptadas a tu ritmo.</>,
      },
      {
        name: "Cursos de Aleman",
        description: <>Clases presenciales. Desde nivel básico hasta avanzado.</>,
      },
      {
        name: "Cursos de Japones",
        description: <>Clases = en línea, adaptadas a tu ritmo. Desde nivel básico hasta avanzado.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Métodos de Enseñanza",
    skills: [
      {
        title: "Clases Interactivas",
        description: (
          <>Dinámicas enfocadas en conversación, comprensión auditiva y práctica real.</>
        ),
        tags: [
          {
            name: "Educación",
            icon: "book",
          },
        ],
      },
      {
        title: "Cursos en Línea",
        description: (
          <>Aprende desde cualquier lugar con nuestra plataforma digital.</>
        ),
        tags: [
          {
            name: "E-learning",
            icon: "laptop",
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Consejos y artículos sobre idiomas",
  description: `Lee las últimas noticias y recomendaciones de ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Cursos",
  title: `Cursos – ${person.name}`,
  description: `Descubre los programas y cursos disponibles en ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería – ${person.name}`,
  description: `Fotos y experiencias de estudiantes en ${person.name}`,
  images: [
    {
      src: "/images/gallery/clase-ingles.jpg",
      alt: "Clase de inglés",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/clase-frances.jpg",
      alt: "Clase de francés",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };