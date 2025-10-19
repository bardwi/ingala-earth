import type { Project } from '@/types/content';

export const projects: Project[] = [
  {
    slug: 'agroecology-landscape-rehabilitation',
    title: 'Agroecology & Landscape Rehabilitation',
    summary:
      'Restoring degraded land with climate-resilient agroforestry, soil & water regeneration, and community stewardship.',
    cover: {
      src: '/projects/agroecology-landscape-rehabilitation.jpg',
      alt: 'Restored hillsides with agroforestry and water bodies',
    },
  },
  {
    slug: 'agroecology-research',
    title: 'Agroecology Research',
    summary:
      'Targeted research and farmer-led trials advancing soil health, biodiversity conservation, and climate resilience.',
    cover: {
      src: '/projects/agroecology-research.jpg',
      alt: 'Research site with greenery and lab work',
    },
  },
  {
    slug: 'education-capacity-nature-based-solutions',
    title: 'Education & Capacity Building in Nature-Based Solutions',
    summary:
      'Hands-on trainings and tailored curricula that build local capacity in regenerative agriculture and ecological restoration.',
    cover: {
      src: '/projects/education-capacity-nature-based-solutions.jpg',
      alt: 'Field training session with community participants',
    },
  },
  {
    slug: 'permaculture-regenerative-transition',
    title: 'Project Design & Impact in Action',
    summary:
      'Experience implementing recent frameworks in diverse contexts — including permaculture-led transitions.',
    cover: {
      src: '/projects/project-design-impact-in-action.jpg',
      alt: 'Project design & impact overview',
    },
  },
];
