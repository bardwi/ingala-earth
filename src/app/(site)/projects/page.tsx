import Image from 'next/image';
import Hero from '@/components/marketing/Hero/Hero';
import s from './Projects.module.scss';
import Link from 'next/link';

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
    image: {
      src: '/projects/agroecology-landscape-rehabilitation.jpg',
      alt: 'Green hillside farm',
    },
    bullets: [
      {
        location: 'Nagaland, Rest of India, South Africa',
        text: 'Design and implementation of agroecology and agroforestry systems at landscape scale, integrating soil regeneration, water management, and biodiversity restoration.',
      },
      {
        location: 'Multiple Farms — Across India',
        text: 'Offering Permaculture consulting to help farms shift from conventional to regenerative systems—integrating soil health, water harvesting, agroforestry, biodiversity enhancement, and low-input farming techniques.',
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
    image: {
      src: '/projects/agroecology-research.jpg',
      alt: 'Grass and research plots',
    },
    bullets: [
      {
        location: 'Uttarrakhand, Nagaland',
        text: 'Applied research and demonstration sites focused on soil health, biodiversity, water conservation, and regenerative farming practices.',
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
        location: 'Nagaland, South Africa, Guatemala',
        text: 'Capacity-building programs for farmers, youth, and community institutions focused on agroecology, regenerative agriculture, and nature-based livelihoods.',
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
    image: {
      src: '/projects/rainwater-harvest-two.jpg',
      alt: 'Aerial project grid',
    },
    bullets: [
      {
        location: 'India, Multi-regional Contexts',
        text: 'Design and implementation of regenerative project frameworks supporting planning, execution, and ecological and social impact tracking.',
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
          src: '/projects/hero-projects.jpg',
          alt: 'Misty green hills',
          position: 'center',
        }}
        title="Our Projects Across Landscapes"
        subtitle="We are proud to work across diverse landscapes and communities, bringing regenerative solutions tailored to local needs."
        actions={[]}
        minH="56vh"
        photoCredit="Photo credit: Thingtsa Sangtam"
      />

      <section className={s.offerWrap} aria-labelledby="projects-title">
        <div className="container">
          <header className={s.offerHead}>
            <h2 id="projects-title" className={s.h2}>
              Our Work in Practice
            </h2>
            <p className={s.intro}>
              Our projects span farms and community landscapes, research and
              demonstration sites, and large-scale restoration initiatives—each
              adapted to local ecologies, livelihoods, and governance systems.
            </p>
          </header>

          <ul className={s.cardGrid}>
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
                    className={s.img}
                    sizes="(min-width: 980px) 360px, 100vw"
                  />
                </div>

                <div className={s.cardBody}>
                  <h3 className={s.cardTitle}>
                    {p.cta ? (
                      <Link className={s.cardLink} href={p.cta.href}>
                        {p.title}
                      </Link>
                    ) : (
                      p.title
                    )}
                  </h3>

                  <div className={s.rule} aria-hidden />

                  {p.bullets?.[0]?.location ? (
                    <div className={s.eyebrow}>{p.bullets[0].location}</div>
                  ) : null}

                  {/* Short blurb: first bullet text */}
                  {p.bullets?.[0]?.text ? (
                    <p className={s.cardText}>{p.bullets[0].text}</p>
                  ) : null}

                  {p.cta ? (
                    <Link
                      className={s.learn}
                      href={p.cta.href}
                      aria-label={`Learn more about ${p.title}`}
                    >
                      {p.cta.label}{' '}
                      <span aria-hidden className={s.chev}>
                        ›
                      </span>
                    </Link>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
