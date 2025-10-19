export type ServiceSlug =
  | 'agroecology'
  | 'landscape-restoration'
  | 'bio-labs'
  | 'farmer-groups'
  | 'learning-development';

export type ServiceSummary = {
  slug: ServiceSlug;
  title: string;
  blurb: string;
  eyebrow: string;
  cardImg: { src: string; alt: string };
};

export const services: ServiceSummary[] = [
  {
    slug: 'agroecology',
    title: 'Regenerative Agroecology Design',
    eyebrow: 'Designing Resilient Ecosystems',
    blurb:
      'We design regenerative farms and landscapes by integrating permaculture, traditional knowledge, and whole-systems thinking.',
    cardImg: {
      src: '/services/agroecology.png',
      alt: 'Regenerative landscape',
    },
  },
  {
    slug: 'landscape-restoration',
    title: 'Landscape-Level Restoration',
    eyebrow: 'Reviving Landscapes for Thriving Biodiversity',
    blurb:
      'We work across scales to restore degraded lands—reconnecting ecosystems, regenerating soils, and recharging water systems.',
    cardImg: { src: '/services/landscape.jpg', alt: 'Restored hillside' },
  },
  {
    slug: 'bio-labs',
    title: 'Agroecological Research & Bio Labs',
    eyebrow: 'Science-Driven Regenerative Solutions',
    blurb:
      'Designing and supporting agroecological research and rural bio labs for soil health, natural inputs,and farmer-led innovation.',
    cardImg: { src: '/services/labs.jpg', alt: 'Greenhouse & lab workspace' },
  },
  {
    slug: 'farmer-groups',
    title: 'Empowering Farmer Groups',
    eyebrow: 'Strengthening Cooperatives & FPOs',
    blurb:
      'We strengthen farmer cooperatives through training, strategic planning, and access to support systems.',
    cardImg: { src: '/services/groups.jpg', alt: 'Farmer group meeting' },
  },

  {
    slug: 'learning-development',
    title: 'Learning & Development',
    eyebrow: 'Context-Based Ecological Literacy',
    blurb:
      'We deliver context-based learning programs that build capacity in regenerative agriculture, ecological literacy, and climate resilience.',
    cardImg: { src: '/services/learning.jpg', alt: 'Field training session' },
  },
];
