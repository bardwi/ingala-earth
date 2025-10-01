import Hero from '@/components/marketing/Hero/Hero';
import Mission from '@/components/marketing/Mission/Mission';
import Expertise from '@/components/marketing/Expertise/Expertise';
import Icon from '@/components/ui/Icon/Icon';
import ProjectsSlider from '@/components/sections/ProjectsSlider/ProjectsSlider';
import type { ProjectCard } from '@/components/sections/ProjectsSlider/ProjectsSlider';

import { projects } from '@/data/projects';
import Footprint from '@/components/sections/Footprint/Footprint';

export default function Home() {
  const items: ProjectCard[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    image: { src: p.cover.src, alt: p.cover.alt ?? p.title },
  }));
  return (
    <>
      <Hero
        image={{
          src: '/hero/greenhouse.jpg',
          alt: 'Greenhouse',
          position: 'center',
          priority: true,
        }}
        title="Catalyzing Regeneration & Resilience"
        subtitle="Designing resilient landscapes rooted in permaculture and traditional wisdom."
        actions={[
          { href: '/contact', label: 'Get Started', variant: 'ghost' },
          { href: '/projects', label: 'View Projects', variant: 'primary' },
        ]}
        scrollToId="mission"
        minH="84vh"
      />

      <Mission
        blurb="Catalyzing regenerative transformation by integrating whole systems thinking, ecological restoration, and permaculture-based design to create thriving landscapes and empowered communities."
        items={[
          { title: 'Regenerative transformation' },
          { title: 'Ecological restoration' },
          { title: 'Community empowerment' },
        ]}
        image={{ src: '/images/mission.png', alt: 'Field work' }}
      />
      <section
        id="mission"
        className="container"
        style={{ padding: '3rem 0 4rem' }}
      ></section>

      <Expertise
        items={[
          {
            icon: <Icon name="seedling" size={32} color="#5B1D0F" />,
            title: 'Regenerative Agroecology Design',
            blurb:
              'Designing farms and landscapes into thriving and resilient ecosystems.',
          },
          {
            icon: <Icon name="tree" size={32} color="#5B1D0F" />,
            title: 'Landscape-Level Restoration',
            blurb:
              'Reviving landscapes for thriving biodiversity with a watershed based approach and soil regeneration.',
          },
          {
            icon: <Icon name="farmer" size={32} color="#5B1D0F" />,
            title: 'Empowering Farmer Groups',
            blurb:
              'Capacity building and holistic organisational development of Farmer Producer Organisations (FPOs).',
          },
        ]}
      />
      <ProjectsSlider items={items} />
      <Footprint />
    </>
  );
}
