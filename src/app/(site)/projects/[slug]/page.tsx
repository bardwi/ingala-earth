import Image from 'next/image';
import { notFound } from 'next/navigation';
import Hero from '@/components/marketing/Hero/Hero';
import Band from '@/components/Band/Band';
import s from './ProjectDetail.module.scss';
import { LuChevronDown } from 'react-icons/lu';

type BandTone = 'ecru' | 'fog' | 'ivory';

type OrgBlock = {
  title: string;
  subhead?: string;
  image: { src: string; alt: string };
  points?: string[];
  reverse?: boolean;
  band?: BandTone;
  paras?: string[];
};

type PlanGalleryBlock = {
  type: 'planGallery';
  title: string;
  intro?: string;
  plan: { src: string; alt: string };
  thumbs: { src: string; alt: string }[];
  band?: BandTone;
};

type TwoUpBlock = {
  type: 'twoUp';
  title: string;
  subhead?: string;
  kickerText?: string;
  paragraphs?: string[];
  bullets?: string[];
  left: { src: string; alt: string };
  right: { src: string; alt: string };
  caption?: string;
  band?: BandTone;
};

type BeforeAfterGridBlock = {
  type: 'beforeAfterGrid';
  title: string;
  intro?: string;
  pairs: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
  }[];
  band?: BandTone;
};

type AnyBlock = PlanGalleryBlock | TwoUpBlock | BeforeAfterGridBlock;

type Detail = {
  heroSubtitle: string;
  overview: string;
  nagaland?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
    blurb: string;
    people: { src: string; alt: string }[];
    band?: BandTone;
  };
  southAfrica?: {
    image: { src: string; alt: string };
    paras: string[];
    partner?: { name: string; href?: string };
    band?: BandTone;
  };
  orgBlocks?: OrgBlock[];
  blocks?: AnyBlock[];
};

const autoTone = (i: number): BandTone =>
  (['ivory', 'ecru', 'fog'] as BandTone[])[i % 3];

// Type guard

const DETAILS: Record<string, Detail> = {
  'agroecology-landscape-rehabilitation': {
    heroSubtitle:
      'Restoring over 1,500 acres of degraded land with climate-resilient agroforestry.',
    overview:
      'We work with our clients and partners across the world to rehabilitate degraded landscapes using permaculture and agroecology principles. Impacts so far: 1,500+ acres restored, 1000+ farmers trained, and sustainable food systems established in partnership with local and international organizations.',
    nagaland: {
      before: {
        src: '/projects/before-image.png',
        alt: 'Nagaland site before restoration',
      },
      after: {
        src: '/projects/after-image.png',
        alt: 'Nagaland site after restoration',
      },
      blurb:
        'Our founders have designed and implemented Permaculture-based Agroforestry in 1500 acres for tribal farmers in Nagaland supported by Philanthropic funds and Government Grants. Smallest project: 200 acres and largest: 700 acres.',
      people: [
        { src: '/projects/farm-pic-one.png', alt: 'Farmer portrait' },
        { src: '/projects/farm-pic-two.png', alt: 'Field training' },
        { src: '/projects/farm-pic-three.png', alt: 'Planting session' },
        { src: '/projects/farm-pic-four.jpg', alt: 'Slope restoration' },
        { src: '/projects/farm-pic-five.png', alt: 'Seedlings' },
      ],
      band: 'ecru',
    },
    southAfrica: {
      image: {
        src: '/projects/bamboo-agro-sa.jpg',
        alt: 'Bamboo agroforestry training in South Africa',
      },
      paras: [
        'Reviving degraded landscapes through sustainable bamboo cultivation, combining ecological restoration with local livelihood opportunities.',
        'This project covers plantation design, soil and water conservation, biodiversity enhancement, and long-term land management strategies. The initiative supports carbon sequestration, biodiversity, and sustainable market creation — while empowering local communities through training and employment.',
        'Impact tracked through ESG-aligned metrics for measurable environmental and social benefits.',
      ],
      partner: { name: 'TERAGRN', href: 'https://www.terragrn.com/' },
      band: 'fog',
    },
  },

  'agroecology-research': {
    heroSubtitle:
      'Driving innovation in soil health, biodiversity, and climate resilience through targeted research and farmer-led trials.',
    overview:
      'Agroecology research at Ingala focuses on integrating traditional knowledge with scientific inquiry to advance soil health, biodiversity conservation, and climate resilience. Through partnerships with organisations like SankalpTaru Foundation and Eleutheros Christian Society (ECS), we design, test, and demonstrate regenerative solutions that are locally adaptable and scalable.',
    orgBlocks: [
      {
        title: 'SankalpTaru Foundation – Uttarakhand, India',
        subhead: 'Peepal Research Centre',
        image: {
          src: '/projects/sankalptaru.jpg',
          alt: 'Peepal Research Centre campus',
        },
        points: [
          'Designing an agroecology-based research and demonstration site.',
          'Key focus areas: soil health, biodiversity enhancement, water conservation, and climate resilience.',
          'Serving as a model farm for research, training, and community engagement.',
        ],
        band: 'fog',
      },
      {
        title: 'Eleutheros Christian Society (ECS) – Nagaland, India',
        subhead:
          'Advanced Bio-Resources Lab & Experimental Agroecology Studies',
        image: {
          src: '/projects/ecs-nagaland.jpg',
          alt: 'ECS bio-resources lab and training',
        },
        reverse: true,
        points: [
          'Establishing a Soil Testing Lab in Tuensang as part of a larger Farm School initiative.',
          'Functions of the lab:',
          '🌱 Training ECS field teams in soil conservation practices.',
          '🌱 Monitoring and validating agroecological practices.',
          '🌱 Demonstrating regenerative impact to stakeholders.',
          '🌱 Manufacturing bio-fertilisers and bio-pesticides.',
          'Equipping local youth with hands-on skills in regenerative agriculture and soil health management.',
        ],
        band: 'ecru',
      },
    ],
  },

  'education-capacity-nature-based-solutions': {
    heroSubtitle:
      'Empowering communities and institutions with regenerative knowledge and practical skills.',
    overview:
      'Permaculture & Regenerative Transition, regenerative agriculture, and ecological restoration. Our programs combine hands-on training, workshops, and tailored curricula that connect ecological stewardship with social empowerment.',
    orgBlocks: [
      {
        title: 'Eleutheros Christian Society – India',
        reverse: true,
        image: {
          src: '/projects/eleutheros.jpg',
          alt: 'Field workshop with ECS staff and farmers',
        },
        paras: [
          'In partnership with Eleutheros Christian Society (ECS), we are creating a community-rooted education program to build regenerative capacity across rural Nagaland. This initiative focuses on empowering tribal farmers, youth, and local institutions through hands-on training in permaculture design, soil regeneration, water management, biochar production, and sustainable livelihoods.',
          'Through a mix of field demonstrations, workshops, and the development of community-based resource persons, the program is helping shift traditional slash-and-burn practices toward long-term ecological stewardship.',
          'Rooted in the values of local autonomy and ecological literacy, this collaboration reflects our shared belief in people-powered transformation and place-based resilience.',
        ],
        band: 'ivory',
      },
      {
        title: 'The Breath of Earth Foundation – South Africa & Guatemala',
        image: {
          src: '/projects/sa.jpg',
          alt: 'Hands-on practical training session',
        },
        paras: [
          'Ingala Earth partnered with Breath of Earth Foundation to create a comprehensive permaculture-based education program for their community partners in Guatemala and South Africa. This collaboration aimed to support grassroots organizations and local leaders in adopting regenerative practices to address climate vulnerability, soil degradation, and water scarcity.',
          'Our role involved designing learning modules that are both theoretically grounded and practically applicable, covering key themes such as soil regeneration, water harvesting, agroecological design, integrated land use, and ecosystem restoration.',
          'Through this partnership, we contributed to building a scalable and accessible learning framework that enables community organizations to train facilitators, engage farmers, and implement regenerative projects that are both locally relevant and globally informed.',
        ],
        band: 'ecru',
      },
    ],
  },

  'permaculture-regenerative-transition': {
    heroSubtitle:
      'Supporting farms to shift from conventional to regenerative systems, restoring landscapes and building climate resilience.',
    overview:
      'We have worked with farms to design regenerative systems that integrated permaculture principles with practical, on-the-ground solutions. By combining soil health improvement, water harvesting, agroforestry, biodiversity enhancement, and low-input farming techniques, we helped farmers transition towards ecological and economic resilience.',

    blocks: [
      {
        type: 'planGallery',
        title: 'Community Nutrition Garden — Nagaland, India',
        intro:
          'At the Primary Health Centre in Longpang, Nagaland, we established a Community Nutrition Garden to support patient recovery, improve local nutrition, and demonstrate regenerative food production. Designed with permaculture principles, the garden grows diverse vegetables, herbs, and medicinal plants, linking healthcare with local food systems. Managed by community members, it also serves as a model for integrating nutrition, ecology, and community care in rural health infrastructure.',
        plan: {
          src: '/projects/garden-overview.jpg',
          alt: 'Community garden beds',
        },
        thumbs: [
          {
            src: '/projects/community-garden-two.jpg',
            alt: 'Raised beds and greens',
          },
          {
            src: '/projects/community-garden-three.jpg',
            alt: 'Woven-edged garden plots',
          },
          {
            src: '/projects/community-garden-one.jpg',
            alt: 'Harvest-ready beds',
          },
        ],
        band: 'ecru',
      },
      {
        type: 'twoUp',
        title: 'Water Conservation Measures',
        subhead:
          'Rainwater Harvesting & Ecological Restoration – Kagal, Maharashtra',
        kickerText: 'Plant water before planting trees',
        paragraphs: [
          'In Kagal, Maharashtra, we addressed severe erosion and soil loss across ridge lines by implementing integrated water management strategies. The upstream vegetated area—a monoculture Gliricidia plantation by the Forest Department—acts as a catchment for the farm.',
        ],
        bullets: [
          'Continuous rock bunds on contour: Built in shallow soil and steep slope areas, using excavated dam material.',
          'Contour trenches: Slowing and spreading water to boost infiltration and reduce runoff.',
          'Keyline dam (~200 cum capacity): Capturing forest runoff and strategically distributing overflow to rehydrate dry areas.',
          'Bund planting: Using excavated sandy loam with fractured rock to establish hardy, drought-tolerant species—11 canopy and 7 sub-canopy trees, nitrogen fixers, and erosion control plants.',
          'Biodiversity island: Uppermost contour planted with keystone species and layered vegetation to accelerate ecological restoration.',
        ],
        left: {
          src: '/projects/rainwater-harvest.jpg',
          alt: 'Site before earthworks',
        },
        right: {
          src: '/projects/rainwater-harvest-two.jpg',
          alt: 'Site after earthworks with pond',
        },
        caption:
          'Rainwater Harvesting & Ecological Restoration – Nagaland, India.',
        band: 'ivory',
      },
      {
        type: 'beforeAfterGrid',
        title:
          'Rainwater Harvesting with Earthen Dams — Aranya Natural Farm, Andhra Pradesh, India',
        intro:
          'The transformation of degraded land into water-secure landscapes through earthen dam construction.',
        pairs: [
          {
            before: { src: '/projects/b1.png', alt: 'Dam site before (1)' },
            after: { src: '/projects/b2.png', alt: 'Dam filled after (1)' },
          },
          {
            before: { src: '/projects/c1.png', alt: 'Dam site before (2)' },
            after: { src: '/projects/c2.png', alt: 'Dam filled after (2)' },
          },
          {
            before: { src: '/projects/a1.png', alt: 'Dam site before (3)' },
            after: { src: '/projects/a2.png', alt: 'Dam filled after (3)' },
          },
        ],
        band: 'ecru',
      },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(DETAILS).map((slug) => ({ slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = DETAILS[slug];

  if (!detail) return notFound();

  const hasImpact = !!(detail.nagaland || detail.southAfrica);

  const isPlanGallery = (b: AnyBlock): b is PlanGalleryBlock =>
    b.type === 'planGallery';
  const container = `container ${s.narrow}`;

  const planBlock =
    slug === 'permaculture-regenerative-transition'
      ? detail.blocks?.find(isPlanGallery)
      : undefined;

  return (
    <>
      {/* HERO */}
      <div className={s.heroWrap}>
        <Hero
          image={{
            src: '/projects/hero-projects.png',
            alt: 'Misty green hills',
            position: 'center',
          }}
          title={
            slug === 'agroecology-research'
              ? 'Agroecology Research'
              : slug === 'permaculture-regenerative-transition'
              ? 'Permaculture & Regenerative Transition'
              : slug === 'education-capacity-nature-based-solutions'
              ? 'Education & Capacity Building in Nature-Based Solutions'
              : 'Agroecology & Landscape Rehabilitation'
          }
          subtitle={detail.heroSubtitle}
          actions={[]}
          minH="60vh"
        />
        {hasImpact && (
          <div className={s.heroOverlay}>
            <div className={s.heroOverlayInner}>
              <a href="#impact" className={s.heroBtn}>
                See our impact
              </a>
              <LuChevronDown aria-hidden className={s.heroDown} />
            </div>
          </div>
        )}
      </div>
      <Band tone="ecru">
        <div className={container}>
          <section className={s.wrap}>
            <header className={s.centerHead}>
              <h2 className={s.h2}>Overview</h2>
              <p className={s.lead}>{detail.overview}</p>
            </header>
          </section>
        </div>
      </Band>
      {slug === 'permaculture-regenerative-transition' && planBlock && (
        <Band tone={planBlock.band ?? 'ecru'}>
          <div className={container}>
            <section>
              <div className={s.planWrap}>
                <div className={s.planMedia}>
                  <Image
                    src={planBlock.plan.src}
                    alt={planBlock.plan.alt}
                    fill
                    className={`${s.img} ${s.imgContain}`}
                    sizes="(min-width: 740px) 680px, 94vw"
                  />
                </div>
              </div>
            </section>
          </div>
        </Band>
      )}

      {detail.nagaland && (
        <Band tone="ecru">
          <div className={container}>
            <section id="impact">
              <h3 className={s.h3}>
                Large Scale Agroforestry, Nagaland, India
              </h3>
              <div className={s.beforeAfter}>
                <div className={s.baItem}>
                  <Image
                    src={detail.nagaland!.before.src}
                    alt={detail.nagaland!.before.alt}
                    fill
                    className={`${s.img} ${s.imgContainSm}`}
                    sizes="(min-width: 980px) 34vw, 100vw"
                  />
                </div>
                <div className={s.baItem}>
                  <Image
                    src={detail.nagaland!.after.src}
                    alt={detail.nagaland!.after.alt}
                    fill
                    className={`${s.img} ${s.imgContainSm}`}
                    sizes="189px"
                    loading="lazy"
                  />
                </div>
              </div>
            </section>
          </div>
        </Band>
      )}
      {detail.nagaland && (
        <Band tone="fog">
          <div className={container}>
            <section className={`${s.wrap} ${s.nagalandBlurb}`}>
              <p className={s.body}>{detail.nagaland.blurb}</p>
              <ul className={s.strip}>
                {detail.nagaland.people.map((p) => (
                  <li key={p.src} className={s.stripItem}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className={s.img}
                      sizes="189px"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </Band>
      )}

      {detail.southAfrica && (
        <Band tone="ivory">
          <div className={container}>
            <section className={s.wrap}>
              <article className={s.split}>
                <div className={s.mediaTall}>
                  <Image
                    src={detail.southAfrica.image.src}
                    alt={detail.southAfrica.image.alt}
                    fill
                    className={s.img}
                    sizes="(min-width: 980px) 520px, 100vw"
                  />
                </div>
                <div className={s.content}>
                  <h3 className={s.h3}>
                    Bamboo Agroforestry, Mpumalanga, South Africa
                  </h3>
                  {detail.southAfrica.paras.map((t, i) => (
                    <p className={s.body} key={i}>
                      {t}
                    </p>
                  ))}
                  {detail.southAfrica?.partner && (
                    <p className={s.partner}>
                      Partner:&nbsp;
                      {detail.southAfrica.partner.href ? (
                        <a
                          href={detail.southAfrica.partner.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {detail.southAfrica.partner.name}
                        </a>
                      ) : (
                        <span>{detail.southAfrica.partner.name}</span>
                      )}
                    </p>
                  )}
                </div>
              </article>
            </section>
          </div>
        </Band>
      )}

      {detail.orgBlocks?.map((b, i) => (
        <Band key={b.title} tone={b.band ?? autoTone(i)}>
          <div className={container}>
            <section className={s.wrap}>
              <h3 className={`${s.h3} ${s.h3Center}`}>{b.title}</h3>

              <article
                className={`${s.split} ${b.reverse ? s.splitReverse : ''}`}
              >
                <div className={s.mediaTall}>
                  <Image
                    src={b.image.src}
                    alt={b.image.alt}
                    fill
                    className={s.img}
                    sizes="(min-width: 980px) 520px, 100vw"
                  />
                </div>

                <div className={s.content}>
                  {b.subhead && <p className={s.orgSubhead}>{b.subhead}</p>}
                  {b.paras?.length ? (
                    b.paras.map((p, idx) => (
                      <p key={idx} className={s.body}>
                        {p}
                      </p>
                    ))
                  ) : (
                    <ul className={s.pointList}>
                      {b.points?.map((pt) => (
                        <li
                          key={pt}
                          className={
                            pt.trim().startsWith('🌱') ? s.noDot : undefined
                          }
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            </section>
          </div>
        </Band>
      ))}

      {detail.blocks?.map((block, i) => {
        const tone = block.band ?? autoTone(i);

        if (block.type === 'planGallery') {
          return (
            <Band key={block.title} tone={tone}>
              <div className={container}>
                <section className={s.wrap}>
                  <article className={s.planGallery}>
                    <h3 className={s.h3}>{block.title}</h3>

                    {block.intro && <p className={s.body}>{block.intro}</p>}

                    <ul className={s.thumbGrid3}>
                      {block.thumbs.map((im) => (
                        <li key={im.src} className={s.thumbItem}>
                          <Image
                            src={im.src}
                            alt={im.alt}
                            fill
                            className={`${s.img}`}
                            sizes="(min-width: 1100px) 320px, (min-width: 768px) 33vw, 100vw"
                            loading="lazy"
                          />
                        </li>
                      ))}
                    </ul>
                  </article>
                </section>
              </div>
            </Band>
          );
        }

        if (block.type === 'twoUp') {
          return (
            <Band key={block.title} tone={tone}>
              <div className={container}>
                <section className={s.wrap}>
                  <article className={s.section}>
                    {/*  wrapper to control */}
                    <div className={s.twoUpCopy}>
                      <h3 className={`${s.h3} ${s.h3Brown}`}>{block.title}</h3>

                      {block.subhead && (
                        <p className={s.subheadBrown}>{block.subhead}</p>
                      )}

                      {block.kickerText && (
                        <p className={s.kicker}>
                          <span className={s.kickerLabel}>
                            Core Principle:&nbsp;
                          </span>
                          <em className={s.kickerEm}>{block.kickerText}</em>
                        </p>
                      )}

                      <p className={s.body}>
                        Designed for maximum water infiltration, soil
                        conservation, and crop diversification.
                      </p>

                      {block.paragraphs?.map((t, idx) => (
                        <p className={s.body} key={idx}>
                          {t}
                        </p>
                      ))}

                      {block.bullets?.length ? (
                        <>
                          <p className={`${s.body} ${s.sectionLead}`}>
                            Our interventions included:
                          </p>
                          <ul className={s.dotList}>
                            {block.bullets.map((li) => (
                              <li key={li}>{li}</li>
                            ))}
                          </ul>
                        </>
                      ) : null}
                    </div>

                    <div className={s.ruleDots} />

                    <div className={s.twoUp}>
                      <div className={s.twoUpItem}>
                        <Image
                          src={block.left.src}
                          alt={block.left.alt}
                          fill
                          sizes="(min-width:980px) 50vw, 100vw"
                          className={s.img}
                        />
                      </div>
                      <div className={s.twoUpItem}>
                        <Image
                          src={block.right.src}
                          alt={block.right.alt}
                          fill
                          sizes="(min-width:980px) 50vw, 100vw"
                          className={s.img}
                        />
                      </div>
                    </div>

                    {block.caption && (
                      <p
                        className={`${s.caption} ${s.captionBrown} ${s.captionPill}`}
                      >
                        {block.caption}
                      </p>
                    )}
                  </article>
                </section>
              </div>
            </Band>
          );
        }

        if (block.type === 'beforeAfterGrid') {
          return (
            <Band key={block.title} tone={tone}>
              <div className={container}>
                <section className={s.wrap}>
                  <article className={s.section}>
                    <h3 className={s.h3}>{block.title}</h3>
                    {block.intro && <p className={s.body}>{block.intro}</p>}
                    <div className={s.baRows}>
                      {block.pairs.map((p, idx2) => (
                        <div key={idx2} className={s.baRow}>
                          <div className={s.baCell}>
                            <span className={s.baBadge}>Before</span>
                            <Image
                              src={p.before.src}
                              alt={p.before.alt}
                              fill
                              className={s.img}
                              sizes="(min-width: 980px) 50vw, 100vw"
                              loading="lazy"
                            />
                          </div>
                          <div className={s.baCell}>
                            <span className={s.baBadge}>After</span>
                            <Image
                              src={p.after.src}
                              alt={p.after.alt}
                              fill
                              className={s.img}
                              sizes="(min-width: 1236px) 420px, (min-width: 648px) 34vw, 220px"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                </section>
              </div>
            </Band>
          );
        }

        return null;
      })}
    </>
  );
}
