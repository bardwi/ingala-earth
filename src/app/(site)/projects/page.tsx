import Image from 'next/image';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Projects.module.scss';
import { LuArrowRight, LuMapPin } from 'react-icons/lu';

type Bullet = {
  location?: string;
  title?: string;
  text?: string;
};

type Project = {
  title: string;
  stripe: 'green' | 'orange';
  image: { src: string; alt: string };
  bullets: Bullet[];
  cta?: { label: string; href: string };
};

const PROJECTS: Project[] = [
  {
    title: 'Agroecology & Landscape Rehabilitation',
    stripe: 'green',
    image: { src: '/projects/agroecology.png', alt: 'Green hillside farm' },
    bullets: [
      {
        location: 'Nagaland, India, Various Organisation',
        text: 'Permaculture based Agroforestry in 1500 acres for tribal farmers in Nagaland supported by Philanthropic funds and Government Grants.',
      },
      {
        location: 'Multiple Farms — Across India',
        text: 'Offering permaculture consulting to help farms shift from conventional to regenerative systems—integrating soil health, water harvesting, agroforestry, biodiversity enhancement, and low-input farming techniques.',
      },
      {
        location: 'TERAGRN — South Africa',
        text: 'Consulting on a bamboo-based agroforestry project, covering plantation design , soil and water conservation, biodiversity enhancement, and impact tracking through ESG-aligned metrics.',
      },
    ],
    cta: {
      label: 'Learn More',
      href: '/projects/agroecology-landscape-rehabilitation',
    },
  },

  {
    title: 'Agroecology Research',
    stripe: 'orange',
    image: { src: '/projects/research.jpg', alt: 'Grass and research plots' },
    bullets: [
      {
        location: 'Uttarakhand, India, SankalpTaru Foundation',
        text: 'Designing an agroecology-based research and demonstration site at the Peepal Research Centre, focusing on soil health, biodiversity, water conservation, and climate resilience.',
      },
      {
        location: 'Eleutheros Christian Society (ECS) — Nagaland, India',
        text: 'Experimental design of agroecological studies  and establishing an advanced bio-resources lab for soil conservation and manufacturing bio-fertilisers and bio-pesticides.',
      },
    ],
    cta: { label: 'Learn More', href: '/projects/agroecology-research' },
  },

  {
    title: 'Education & Capacity Building in Nature-Based Solutions',
    stripe: 'green',
    image: { src: '/projects/education.jpg', alt: 'Teaching materials' },
    bullets: [
      {
        location: 'Nagaland, India, Elutheorus Christian Society',
        text: 'With ECS, we’re training farmers, youth, and staff in regenerative farming, agroecology, and bioresource manufacturing to build local capacity and ecological resilience in Nagaland.',
      },

      {
        location:
          'The Breath of Earth Foundation — USA, South Africa & Guatemala',
        text: 'Co-designing a curriculum in regenerative agriculture for women-led community groups; integrating social empowerment with ecological restoration.',
      },
    ],
    cta: {
      label: 'Learn More',
      href: '/projects/education-capacity-nature-based-solutions',
    },
  },

  {
    title: 'Project Design & Impact in Action',
    stripe: 'orange',
    image: { src: '/projects/project-design.png', alt: 'Aerial project grid' },
    bullets: [
      {
        location:
          'Experience implementing recent frameworks in diverse contexts',
        text: 'Explore our experience implemmenting recent frameworks in diverse contexts.',
      },
    ],
    cta: {
      label: 'Learn More',
      href: '/projects/permaculture-regenerative-transition',
    },
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Hero
        image={{
          src: '/projects/hero-projects.png',
          alt: 'Misty green hills',
          position: 'center',
        }}
        title="Our Projects Across Landscapes"
        subtitle="We are proud to work across diverse landscapes and communities, bringing regenerative solutions tailored to local needs."
        actions={[]}
        minH="48vh"
      />

      <section className={s.wrap}>
        <div className="container">
          <ul className={s.list}>
            {PROJECTS.map((p) => (
              <li
                key={p.title}
                className={`${s.card} ${s[`stripe_${p.stripe}`]}`}
              >
                <div className={s.media}>
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    fill
                    sizes="(min-width: 980px) 320px, 100vw"
                    className={s.img}
                  />
                </div>

                <div className={s.content}>
                  <h3 className={s.title}>{p.title}</h3>

                  <ul className={s.bullets}>
                    {p.bullets.map((b, i) => {
                      const isPlace = !!b.location;
                      const heading = b.location ?? b.title ?? '';
                      return (
                        <li key={heading || i} className={s.bullet}>
                          <div
                            className={`${s.bulletTitle} ${
                              isPlace ? s.place : ''
                            }`}
                          >
                            {isPlace && (
                              <span className={s.pin} aria-hidden>
                                <LuMapPin size={14} />
                              </span>
                            )}
                            {heading}
                          </div>
                          {b.text ? (
                            <p className={s.bulletText}>{b.text}</p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>

                  {p.cta && (
                    <a className={s.cta} href={p.cta.href}>
                      {p.cta.label}
                      <LuArrowRight aria-hidden className={s.ctaIcon} />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
