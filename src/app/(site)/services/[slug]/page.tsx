import Image from 'next/image';
import { notFound } from 'next/navigation';
import Hero from '@/components/marketing/Hero/Hero';
import type { Metadata } from 'next';
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
  LuUserCheck,
  LuFlaskConical,
  LuLifeBuoy,
} from 'react-icons/lu';

const iconForStep = (title: string) => {
  const t = title.toLowerCase();

  // Learning & training flow
  if (t.includes('understand') || t.includes('learner')) return LuUserCheck;
  if (t.includes('experiential') || t.includes('field') || t.includes('lab'))
    return LuFlaskConical;
  if (t.includes('ongoing')) return LuLifeBuoy;

  // Farmer-groups
  if (t.includes('needs')) return LuClipboardList;
  if (t.includes('capacity')) return LuPuzzle;
  if (t.includes('hands-on')) return LuGraduationCap;
  if (t.includes('support') || t.includes('review')) return LuHandshake;

  // Fallback icon
  return LuLeaf;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!isSlug(slug)) {
    return {
      title: 'Service not found',
      robots: { index: false, follow: false },
    };
  }

  const svc = services.find((s) => s.slug === slug) ?? null;
  const detail = DETAILS[slug];

  if (!svc || !detail) {
    return {
      title: 'Service not found',
      robots: { index: false, follow: false },
    };
  }

  const description = detail.overview.slice(0, 155);
  const url = `/services/${slug}`;
  const ogImage = '/og/default.jpg';

  return {
    title: svc.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: svc.title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: svc.title,
      description,
      images: [ogImage],
    },
  };
}

const DETAILS = {
  agroecology: {
    heroKicker:
      'Where water, soil, and biodiversity come together to support resilient livelihoods.',
    overview:
      'Creating productive, resilient, and regenerative farms, landscapes and communities using our expertise in permaculture design, rainwater harvesting, and soil regeneration.',
    methodology: {
      image: { src: '/services/agroecology-method.png', alt: 'Design plan' },
      text: 'At Ingala Earth LLP, regenerative agroecological systems are designed using a permaculture based approach that integrates soil, water, biodiversity, and stakeholder needs into cohesive, resilient landscapes. As part of this process, permaculture design is typically applied holistically—however, clients may also choose to consult with us for specific services, such as watershed management and rainwater harvesting or soil regeneration strategies, depending on their priorities. Each intervention is tailored to the site and context, ensuring that ecological integrity and productivity are restored in alignment with the clients goals.',
    },
    features: [
      {
        icon: LuLeaf,
        title: 'Permaculture Design',
        text: 'Bringing together natural patterns and scientific principles to design integrated food production systems that are productive, climate resilient and bio diverse.',
      },
      {
        icon: LuDroplets,
        title: 'Watershed & Rainwater',
        text: 'Integrated water management solutions that restore hydrology- capturing rain, recharging groundwater, and enhancing water security at farm and landscape scales.',
      },
      {
        icon: LuSprout,
        title: 'Soil Regeneration & Carbon',
        text: 'Restoring soil health through  regenerative practices that build organic matter, enhance fertility, and lock carbon into the ground, supporting both productivity and climate goals.',
      },
    ],
    approach: {
      points: [
        'Observe & Assess — Soil testing, slope analysis, water flow, vegetation mapping, stakeholder input',
        'Design & Planning — Collaborative design using permaculture principles, zoning, and visual maps',
        'Water & Soil Interventions — Build RWH systems and soil regeneration strategies',
        'Planting & Establishment — Plantation design and implementation strategy',
        'Support & Monitoring — Monitoring and evaluation, training, and long-term impact support',
      ],
      image: { src: '/services/agroecology-field.jpg', alt: 'Field photo' },
    },
  },

  'landscape-restoration': {
    heroKicker:
      'Securing biodiversity, ecological function, and long-term regeneration across degraded landscapes — restoring flow from ridgeline to root zone.',
    overview:
      'At Ingala Earth, we specialize in restoring/rehabilitating large scale degraded or fragmented landscapes through integrated ecological design. By working with natural succession, hydrology, native biodiversity and stakeholders we help revive ecological integrity and build long-term resilience. Whether it’s a forest edge, disturbed or degraded landscape , or agricultural transition zone - our work brings land back to life, system by system.',
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
      image: {
        src: '/services/groups-farmer.jpg',
        alt: 'farmer group meeting',
      },
      items: [
        {
          title: 'Capacity Building',
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
      'We believe that transformation starts with learning. Through immersive Permaculture Design Courses (PDCs) and custom-designed workshops, we bring ecological literacy, systems thinking, and hands-on regenerative practices to farmers, students, educators, and changemakers. Our trainings combine traditional knowledge, practical skills, and participatory tools to inspire action and stewardship.',
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

const isSlug = (s: string): s is Slug => s in DETAILS;

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

/* Type guards for sections */
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
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const summary = services.find((svc) => svc.slug === slug) ?? null;
  const detail = DETAILS[slug as keyof typeof DETAILS];

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
                {/* Left: framed image */}
                <figure className={s.methodMedia}>
                  <Image
                    src={detail.methodology.image.src}
                    alt={detail.methodology.image.alt}
                    fill
                    className={`${s.img} ${s.imgContain}`}
                    sizes="(min-width: 980px) 520px, 100vw"
                  />
                </figure>

                {/* Right: copy with comfy line-length and paragraph breaks */}
                <div className={s.methodCopy}>
                  {detail.methodology.text
                    .split(/(?<=\.)\s+(?=[A-Z])/g) // split on sentence end
                    .map((para, i) => (
                      <p key={i} className={s.methodText}>
                        {para}
                      </p>
                    ))}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {hasOffer(detail) && (
          <div className={s.processRow}>
            {/* left: image  */}
            <figure className={s.offerMedia}>
              <Image
                src={detail.offer.image.src}
                alt={detail.offer.image.alt}
                fill
                className={s.img}
                sizes="(min-width: 1100px) 640px, (min-width: 740px) 55vw, 100vw"
              />
            </figure>

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
                return (
                  <ul className={s.stepsGrid}>
                    {detail.steps.items.map((st) => {
                      const Icon = iconForStep(st.title);
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
                  <span className={s.kickerBadge} aria-hidden>
                    <LuLeaf size={16} />
                  </span>
                  <h3 className={s.kicker}>Our Regenerative Design Approach</h3>
                </div>

                <ul className={s.pointList}>
                  {detail.approach.points.map((pt) => {
                    const [title, rest] = pt.split('—').map((t) => t.trim());
                    return (
                      <li key={pt} className={s.approachItem}>
                        <div className={s.approachItemTitle}>{title}</div>
                        {rest && <p className={s.approachItemText}>{rest}</p>}
                      </li>
                    );
                  })}
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
