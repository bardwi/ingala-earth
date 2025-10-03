import Image from 'next/image';
import { notFound } from 'next/navigation';
import Hero from '@/components/marketing/Hero/Hero';
import { services } from '@/data/services';
import s from './ServiceDetail.module.scss';
import type { IconType } from 'react-icons';
import {
  LuLeaf,
  LuDroplets,
  LuSprout,
  LuClipboardList,
  LuPuzzle,
  LuGraduationCap,
  LuHandshake,
} from 'react-icons/lu';
const DETAILS = {
  agroecology: {
    heroKicker:
      'Where water, soil, and biodiversity come together to support resilient livelihoods.',
    overview:
      'Creating productive, resilient, and regenerative farms, landscapes and communities using our expertise in permaculture design, rainwater harvesting, and soil regeneration.',
    methodology: {
      image: { src: '/services/agroecology-method.png', alt: 'Design plan' },
      text: 'We use a permaculture-based, whole-systems approach that integrates soil, water, biodiversity, and stakeholder needs. Interventions are tailored to site and context—often combining watershed and rainwater strategies with soil regeneration.',
    },
    features: [
      {
        icon: LuLeaf,
        title: 'Permaculture Design',
        text: 'Design integrated, biodiverse, climate-resilient food systems.',
      },
      {
        icon: LuDroplets,
        title: 'Watershed & Rainwater',
        text: 'Capture rain, recharge groundwater, and enhance water security.',
      },
      {
        icon: LuSprout,
        title: 'Soil Regeneration & Carbon',
        text: 'Build organic matter, fertility, and lock carbon in soils.',
      },
    ],
    approach: {
      points: [
        'Observe & Assess — soils, slope, water flow, vegetation mapping, stakeholders',
        'Design & Planning — zoning, maps, collaborative planning',
        'Water & Soil Interventions — bunds, RWH systems, soil regeneration',
        'Planting & Establishment — plantation design and implementation',
        'Support & Monitoring — training and long-term impact support',
      ],
      image: { src: '/services/agroecology-field.jpg', alt: 'Field photo' },
    },
  },

  'landscape-restoration': {
    heroKicker:
      'Securing biodiversity, ecological function, and long-term regeneration across degraded landscapes — restoring flow from ridgeline to root zone.',
    overview:
      'We specialize in restoring or rehabilitating large-scale degraded or fragmented landscapes through integrated ecological design. Working with natural succession, hydrology, native biodiversity, and stakeholders, we help revive ecological integrity and build long-term resilience.',
    methodTitle: 'Our Landscape Restoration Process',
    methodology: {
      image: {
        src: '/services/landscape-photo.jpg',
        alt: 'Ridge-to-valley landscape',
      },
      text: 'From assessment to stewardship, our process is context-specific and community-led, aligning restoration actions with ecological goals and local livelihoods.',
    },
    process: {
      items: [
        {
          title: 'Assessment & Mapping',
          text: 'Analyze terrain, water flows, degradation patterns, social structures, and ecological assets.',
        },
        {
          title: 'Restoration Planning',
          text: 'Design restoration strategies with habitat zones, biodiversity corridors, soil & water regeneration, and agroecological land use.',
        },
        {
          title: 'Implementation',
          text: 'Restore using native species, traditional knowledge, and culturally rooted active/passive methods.',
        },
        {
          title: 'Monitoring & Stewardship',
          text: 'Track ecological recovery, adapt strategies, and build local stewardship systems.',
        },
      ],
    },
  },
  'farmer-groups': {
    heroKicker:
      'Strengthening grassroots farmer groups through governance, business, and ecological capacity.',
    overview:
      'Farmer Producer Organisations (FPOs) and smallholder cooperatives are the backbone of agriculture. We work directly with these groups to strengthen their internal systems—from participatory governance to ecological decision-making—helping them scale regenerative practices, improve livelihoods, and become self-sustaining ecosystems of change.',
    offer: {
      title: 'What We Offer',
      image: { src: '/services/groups.jpg', alt: 'Farmer group' },
      items: [
        {
          title: 'Focus Area • Capacity Building',
          text: 'Training on leadership, governance, accounting, and decision-making.',
        },
        {
          title: 'Ecological Literacy',
          text: 'Workshops on regenerative farming, biochar, agroforestry, and pest management.',
        },
        {
          title: 'Business Planning',
          text: 'Creating business models, market access strategies, and value-chain development.',
        },
        {
          title: 'Group Strengthening',
          text: 'Legal structure support, member engagement, and policy awareness.',
        },
        {
          title: 'Training of Trainers',
          text: 'Enabling FPO members to train others and replicate locally.',
        },
      ],
    },
    steps: {
      title: 'Our Empowerment Process',
      items: [
        {
          title: 'Needs Assessment',
          text: 'Field visits, group interviews, and organisational gap analysis.',
        },
        {
          title: 'Custom Capacity Planning',
          text: 'Tailored training modules co-designed with the FPO.',
        },
        {
          title: 'Hands-on Trainings',
          text: 'Governance, ecology, and business-development workshops.',
        },
        {
          title: 'On-Ground Support & Review',
          text: 'Follow-up, mentoring, and adaptive support after implementation.',
        },
      ],
    },
  },
  'bio-labs': {
    heroKicker:
      'Innovating regenerative practices through research, bio labs, and real-world demonstration sites.',
    overview:
      'We design and support demonstration farms as living classrooms for agroecological research while also establishing rural Bio Resource Centers (BRCs) focused on soil health, plant health, and natural pest management. These sites let us test, refine, and showcase regenerative techniques adapted to local climates and community needs.',

    offer: {
      title: 'What We Offer',
      image: {
        src: '/services/agro-bio-labs.jpg',
        alt: 'Seedlings and lab benches',
      },
      items: [
        {
          title: 'Demonstration Farm',
          text: 'Showcase scalable, regenerative practices tailored to local climates and community needs.',
        },
        {
          title: 'Lab Design & Setup',
          text: 'Design of small-scale, low-cost bio labs with accessible materials and techniques.',
        },
        {
          title: 'Soil & Input Testing',
          text: 'Support for field-level assessment of compost, inputs, texture, and fertility.',
        },
        {
          title: 'Natural Inputs Production',
          text: 'Facilitation of local recipes for compost teas, fermented bio-pesticides, and biochar.',
        },
        {
          title: 'Farmer Research & Documentation',
          text: 'Support for tracking results, observations, and traditional formulations.',
        },
        {
          title: 'Training & Knowledge Sharing',
          text: 'Capacity building in safe handling, scaling inputs, and peer-to-peer learning.',
        },
      ],
    },
    why: {
      title: 'Why It Matters',
      text: 'By pairing research with practical demonstration, we bridge the gap between theory and practice — ensuring regenerative solutions are both scientifically sound and field-tested.',
      image: {
        src: '/services/agro-bio-labs-why.jpg',
        alt: 'Nursery tray of seedlings',
      },
    },
  },

  'learning-development': {
    heroKicker:
      'Equipping people with the knowledge, tools, and ethics to regenerate land and life.',
    overview:
      'We believe transformation starts with learning. Through immersive Permaculture Design Courses (PDCs) and custom-designed workshops, we bring ecological literacy, systems thinking, and hands-on regenerative practices to farmers, students, educators, and changemakers.',
    offer: {
      title: 'What We Offer',
      kicker: 'Offering',
      image: { src: '/services/learning-offer.jpg', alt: 'Workshop session' },
      items: [
        {
          title: 'Permaculture Design Course',
          text: 'Globally recognized certification in permaculture design, delivered through theory + practice modules.',
        },
        {
          title: 'Custom Workshops',
          text: 'Sessions tailored for NGOs, schools, communities, and companies on soil building, agroforestry, governance, or group design work.',
        },
        {
          title: 'Ecological Literacy & Ethics',
          text: 'Teaching design principles, Earth Care, People Care, and Fair Share through local context.',
        },
      ],
    },
    why: {
      title: 'Why It Matters',
      text: 'Education is the first act of regeneration. From school gardens to farmer collectives, knowledge turns into practice when it is rooted in lived experience and collective care.',
      image: {
        src: '/services/learning-why.jpg',
        alt: 'Outdoor class in the field',
      },
    },
    steps: {
      title: 'Our Learning Flow',
      items: [
        {
          title: 'Understand Learner Profile',
          text: 'Identify audience, goals, and site potential for PDC or workshop.',
        },
        {
          title: 'Deliver Experiential Training',
          text: 'Field sessions, labs, hands-on practice, and group design work.',
        },
        {
          title: 'Support Ongoing Learning',
          text: 'Share resources, post-training mentorship, and community-building opportunities.',
        },
      ],
    },
  },
} as const;

type Slug = keyof typeof DETAILS;
type Detail = (typeof DETAILS)[Slug];
type WhyBlock = Readonly<{
  why: Readonly<{
    title: string;
    text: string;
    image: Readonly<{ src: string; alt: string }>;
  }>;
}>;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/** Type guards for sections */
function hasProcess(d: Detail): d is (typeof DETAILS)['landscape-restoration'] {
  return 'process' in d;
}
function hasMethodology(
  d: Detail
): d is Extract<Detail, { methodology: unknown }> {
  return 'methodology' in d;
}

function hasFeatures(d: Detail): d is (typeof DETAILS)['agroecology'] {
  return 'features' in d && 'approach' in d;
}

function hasOffer(d: Detail): d is (typeof DETAILS)['farmer-groups'] {
  return 'offer' in d;
}
function hasSteps(d: Detail): d is (typeof DETAILS)['farmer-groups'] {
  return 'steps' in d;
}
function hasWhy(d: Detail): d is Detail & WhyBlock {
  return !!d && typeof d === 'object' && 'why' in d;
}

export default async function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await Promise.resolve(params);
  const key = slug as Slug;

  const summary = services.find((svc) => svc.slug === slug) ?? null;
  const detail = DETAILS[key];

  if (!summary || !detail) return notFound();

  return (
    <>
      <Hero
        image={{
          src: '/hero/greenhouse.jpg',
          alt: 'Greenhouse',
          position: 'center',
        }}
        title={summary.title}
        subtitle={detail.heroKicker}
        actions={[]}
        minH="56vh"
      />

      <section className={s.wrap}>
        <div className="container">
          {/* Overview */}
          <header className={s.centerHead}>
            <h2 className={s.h2}>Overview</h2>
            <p className={s.intro}>{detail.overview}</p>
          </header>

          {/* Landscape image and process card */}
          {hasProcess(detail) ? (
            <div className={s.processRow}>
              <div className={s.methodMedia}>
                <Image
                  src={detail.methodology.image.src}
                  alt={detail.methodology.image.alt}
                  fill
                  className={s.img}
                  sizes="(min-width: 980px) 620px, 100vw"
                />
              </div>

              <div className={s.processCard}>
                <div className={s.processTitle}>{detail.methodTitle}</div>

                {/* Technique row */}
                <div className={s.techRow}>
                  <span className={s.techBadge} aria-hidden>
                    <LuLeaf size={16} />
                  </span>
                  <div className={s.processKicker}>Technique</div>
                </div>

                <ul className={s.processList}>
                  {detail.process.items.map(
                    ({ title, text }: { title: string; text: string }) => (
                      <li key={title} className={s.processListItem}>
                        <div className={s.processItemTitle}>{title}</div>
                        <p className={s.processItemText}>{text}</p>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          ) : hasMethodology(detail) ? (
            <>
              <h2 className={`${s.h2} ${s.h2Inset}`}>Design Methodology</h2>
              <div className={s.method}>
                <div className={s.methodMedia}>
                  <Image
                    src={detail.methodology.image.src}
                    alt={detail.methodology.image.alt}
                    fill
                    className={s.img}
                    sizes="(min-width: 980px) 520px, 100vw"
                  />
                </div>
                <p className={s.methodText}>{detail.methodology.text}</p>
              </div>
            </>
          ) : null}
        </div>

        {hasOffer(detail) && (
          <div className={s.processRow}>
            {/* left: image  */}
            <div className={s.methodMedia}>
              <Image
                src={detail.offer.image.src}
                alt={detail.offer.image.alt}
                fill
                className={s.img}
                sizes="(min-width: 980px) 620px, 100vw"
              />
            </div>

            {/* right card */}
            <div className={s.processCard}>
              <div className={s.processTitle}>
                {detail.offer.title ?? 'What We Offer'}
              </div>

              {/* kicker row */}
              <div className={s.techRow}>
                <span className={s.techBadge} aria-hidden>
                  <LuLeaf size={16} />
                </span>
                <div className={s.processKicker}>Focus Area</div>
              </div>

              {/* list items */}
              <ul className={s.processList}>
                {detail.offer.items.map(({ title, text }) => (
                  <li key={title} className={s.processListItem}>
                    <div className={s.processItemTitle}>{title}</div>
                    <p className={s.processItemText}>{text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {hasWhy(detail) && (
          <div className={`${s.whyRow} container`}>
            <div className={s.whyCol}>
              <div className={s.whyTitle}>{detail.why.title}</div>
              <p className={s.whyText}>{detail.why.text}</p>
            </div>
            <div className={s.whyMedia}>
              <Image
                src={detail.why.image.src}
                alt={detail.why.image.alt}
                fill
                className={s.img}
                sizes="(min-width: 980px) 520px, 100vw"
              />
            </div>
          </div>
        )}

        {hasSteps(detail) && (
          <div className={s.band}>
            <div className="container">
              <h2 className={s.h2}>{detail.steps.title}</h2>

              {/** map titles to icons */}
              {(() => {
                const stepIcons: Record<string, IconType> = {
                  'Needs Assessment': LuClipboardList,
                  'Custom Capacity Planning': LuPuzzle,
                  'Hands-on Trainings': LuGraduationCap,
                  'On-Ground Support & Review': LuHandshake,
                };
                return (
                  <ul className={s.stepsGrid}>
                    {detail.steps.items.map((st) => {
                      const Icon = stepIcons[st.title] ?? LuLeaf;
                      return (
                        <li key={st.title} className={s.step}>
                          <span className={s.stepIcon} aria-hidden>
                            <Icon size={20} />
                          </span>
                          <div className={s.stepTitle}>{st.title}</div>
                          <p className={s.stepText}>{st.text}</p>
                        </li>
                      );
                    })}
                  </ul>
                );
              })()}
            </div>
          </div>
        )}

        {hasFeatures(detail) && (
          <>
            <ul className={s.featureGrid}>
              {detail.features.map((f) => {
                const IconComp = f.icon as IconType;
                return (
                  <li className={s.feature} key={f.title}>
                    <span className={s.iconBubble}>
                      <IconComp />
                    </span>
                    <div className={s.featureTitle}>{f.title}</div>
                    <p className={s.featureText}>{f.text}</p>
                  </li>
                );
              })}
            </ul>

            <div className={s.approach}>
              <div className={s.approachCol}>
                <div className={s.kickerRow}>
                  <span className={s.kickerDot} />
                  <h3 className={s.kicker}>Our Regenerative Design Approach</h3>
                </div>
                <ul className={s.pointList}>
                  {detail.approach.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </div>

              <div className={s.approachMedia}>
                <Image
                  src={detail.approach.image.src}
                  alt={detail.approach.image.alt}
                  fill
                  sizes="(min-width: 980px) 520px, 100vw"
                  className={s.img}
                />
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
}
