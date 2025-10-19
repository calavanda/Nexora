import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
  Line,
} from "@once-ui-system/core";
import { baseURL, about, person, social, company } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: "Nuestro Equipo",
      display: true,
      items: person.map(person => person.name),
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: company.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${company.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      
      {/* Sección de introducción */}
      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        <Column
          id={about.intro.title}
          fillWidth
          minHeight="160"
          vertical="center"
          marginBottom="32"
        >
          {about.calendar.display && (
            <Row
              fitWidth
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              radius="full"
              padding="4"
              gap="8"
              marginBottom="m"
              vertical="center"
              className={styles.blockAlign}
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
              <Row paddingX="8">Schedule a call</Row>
              <IconButton
                href={about.calendar.link}
                data-border="rounded"
                variant="secondary"
                icon="chevronRight"
              />
            </Row>
          )}
          <Heading className={styles.textAlign} variant="display-strong-xl">
            {company.name}
          </Heading>
          <Text
            className={styles.textAlign}
            variant="display-default-xs"
            onBackground="neutral-weak"
          >
            {company.description}
          </Text>
          {social.length > 0 && (
            <Row
              className={styles.blockAlign}
              paddingTop="20"
              paddingBottom="8"
              gap="8"
              wrap
              horizontal="center"
              fitWidth
              data-border="rounded"
            >
              {social.map(
                (item) =>
                  item.link && (
                    <React.Fragment key={item.name}>
                      <Row s={{ hide: true }}>
                        <Button
                          key={item.name}
                          href={item.link}
                          prefixIcon={item.icon}
                          label={item.name}
                          size="s"
                          weight="default"
                          variant="secondary"
                        />
                      </Row>
                      <Row hide s={{ hide: false }}>
                        <IconButton
                          size="l"
                          key={`${item.name}-icon`}
                          href={item.link}
                          icon={item.icon}
                          variant="secondary"
                        />
                      </Row>
                    </React.Fragment>
                  ),
              )}
            </Row>
          )}
        </Column>

        {about.intro.display && (
          <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
            {about.intro.description}
          </Column>
        )}
      </Column>

      {/* Sección de Nuestro Equipo */}
      <Column
        id="Nuestro Equipo"
        fillWidth
        paddingY="40"
        gap="32"
      >
        <Column horizontal="center" gap="16">
          <Heading variant="display-strong-l" align="center">
            Nuestro Equipo
          </Heading>
          <Text variant="heading-default-m" onBackground="neutral-weak" align="center">
            Conoce a nuestro equipo de diseñadores web 
          </Text>
        </Column>

        {/* Grid de personas */}
        <Row fillWidth gap="32" wrap horizontal="center">
          {person.map((person, index) => (
            <Column
              key={index}
              flex="1"
              minWidth="280"
              maxWidth="320"
              gap="20"
              padding="20"
              border="neutral-alpha-weak"
              radius="m"
              background="neutral-alpha-weak"
              horizontal="center"
              align="center"
              style={{ flexBasis: "300px" }}
            >
              {/* Avatar */}
              <Avatar src={person.avatar} size="xl" />
              
              {/* Información personal */}
              <Column horizontal="center" gap="8" align="center" fillWidth>
                <Heading variant="display-strong-xs" align="center">
                  {person.name}
                </Heading>
                <Text variant="label-default-m" onBackground="neutral-weak" align="center">
                  {person.role}
                </Text>
                <Row gap="8" vertical="center" fillWidth horizontal="center">
                  <Icon onBackground="accent-weak" name="globe" size="s" />
                  <Text variant="label-default-s">{person.location}</Text>
                </Row>
              </Column>

              {/* Idiomas */}
              {person.languages && person.languages.length > 0 && (
                <Column gap="12" horizontal="center" fillWidth>
                  <Text variant="label-default-s" onBackground="neutral-weak" align="center">
                    Idiomas que enseña:
                  </Text>
                  <Row wrap gap="8" horizontal="center" fillWidth>
                    {person.languages.map((language, langIndex) => (
                      <Tag key={langIndex} size="m">
                        {language}
                      </Tag>
                    ))}
                  </Row>
                </Column>
              )}

              {/* Contacto */}
              <Column gap="12" horizontal="center" fillWidth>
                <Button
                  href={`mailto:${person.email}`}
                  variant="secondary"
                  size="s"
                  icon="email"
                  fillWidth
                >
                  Contactar
                </Button>
                <Text variant="label-strong-m" onBackground="neutral-weak" align="center">
                  {person.email}
                </Text>
              </Column>
            </Column>
          ))}
        </Row>
      </Column>

      {/* Línea separadora */}
      <Line marginY="40" />

      {/* Resto de las secciones */}
      <Column className={styles.blockAlign} flex={9} maxWidth={40}>
        {about.work.display && (
          <>
            <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
              {about.work.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.work.experiences.map((experience, index) => (
                <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                  <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                    <Text id={experience.company} variant="heading-strong-l">
                      {experience.company}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {experience.timeframe}
                    </Text>
                  </Row>
                  <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                    {experience.role}
                  </Text>
                  <Column as="ul" gap="16">
                    {experience.achievements.map(
                      (achievement: React.ReactNode, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ),
                    )}
                  </Column>
                  {experience.images && experience.images.length > 0 && (
                    <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                      {experience.images.map((image, index) => (
                        <Row
                          key={index}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.studies.display && (
          <>
            <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
              {about.studies.title}
            </Heading>
            <Column fillWidth gap="l" marginBottom="40">
              {about.studies.institutions.map((institution, index) => (
                <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                  <Text id={institution.name} variant="heading-strong-l">
                    {institution.name}
                  </Text>
                  <Text variant="heading-default-xs" onBackground="neutral-weak">
                    {institution.description}
                  </Text>
                </Column>
              ))}
            </Column>
          </>
        )}

        {about.technical.display && (
          <>
            <Heading
              as="h2"
              id={about.technical.title}
              variant="display-strong-s"
              marginBottom="40"
            >
              {about.technical.title}
            </Heading>
            <Column fillWidth gap="l">
              {about.technical.skills.map((skill, index) => (
                <Column key={`${skill}-${index}`} fillWidth gap="4">
                  <Text id={skill.title} variant="heading-strong-l">
                    {skill.title}
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {skill.description}
                  </Text>
                  {skill.tags && skill.tags.length > 0 && (
                    <Row wrap gap="8" paddingTop="8">
                      {skill.tags.map((tag, tagIndex) => (
                        <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                          {tag.name}
                        </Tag>
                      ))}
                    </Row>
                  )}
                  {skill.images && skill.images.length > 0 && (
                    <Row fillWidth paddingTop="m" gap="12" wrap>
                      {skill.images.map((image, index) => (
                        <Row
                          key={index}
                          border="neutral-medium"
                          radius="m"
                          minWidth={image.width}
                          height={image.height}
                        >
                          <Media
                            enlarge
                            radius="m"
                            sizes={image.width.toString()}
                            alt={image.alt}
                            src={image.src}
                          />
                        </Row>
                      ))}
                    </Row>
                  )}
                </Column>
              ))}
            </Column>
          </>
        )}
      </Column>
    </Column>
  );
}