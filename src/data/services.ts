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
  cardImg: { src: string; alt: string };
};

export const services: ServiceSummary[] = [
  {
    slug: 'agroecology',
    title: 'Regenerative Agroecology Design',
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
    blurb:
      'We restore degraded lands—reconnecting ecosystems, regenerating soils, and recharging water systems.',
    cardImg: { src: '/services/landscape.jpg', alt: 'Restored hillside' },
  },
  {
    slug: 'bio-labs',
    title: 'Agroecological Research & Bio Labs',
    blurb:
      'Science-driven solutions for soil health, natural inputs, and farmer-led innovation.',
    cardImg: { src: '/services/labs.jpg', alt: 'Greenhouse & lab workspace' },
  },
  {
    slug: 'farmer-groups',
    title: 'Empowering Farmer Groups',
    blurb:
      'Capacity building, strategic planning, and resilient support systems for cooperatives.',
    cardImg: { src: '/services/groups.jpg', alt: 'Farmer group meeting' },
  },
  {
    slug: 'learning-development',
    title: 'Learning & Development',
    blurb:
      'Context-based learning that builds ecological literacy and climate resilience.',
    cardImg: { src: '/services/learning.jpg', alt: 'Field training session' },
  },
];
