'use client';
import Image from 'next/image';
import Hero from '@/components/marketing/Hero/Hero';
import s from './About.module.scss';

type Member = {
  name: string;
  role: string;
  photo: { src: string; alt: string };
  bio: string;
};

const team: Member[] = [
  {
    name: 'Phulmani Baro',
    role: 'Co-Founder',
    photo: { src: '/team/phuli.png', alt: 'Phulmani Baro portrait' },
    bio: 'Phulmani brings a deep, hands-on understanding of working with land and people. With a background in wildlife conservation and regenerative farming, she has spent over 7 years engaging with communities on the frontlines-navigating complex terrains of human-wildlife conflict, biodiversity loss, and shifting agricultural practices. Since 2017, she has applied permaculture design to grow clean food, promote farm biodiversity, and train tribal farmers in conflict-affected regions of Nagaland.',
  },
  {
    name: 'Dippak Basavaraj',
    role: 'Co-Founder',
    photo: { src: '/team/dippak.png', alt: 'Dippak Basavaraj portrait' },
    bio: 'With a background in corporate leadership and project management, Dippak brings strong people skills and systems thinking to his work in regenerative agriculture and soil restoration. He has worked across 1000+ acres of challenging landscapes in India, focusing on soil health and low-impact design. Grounded in permaculture ethics and a minimalist lifestyle, he bridges strategic planning with hands-on ecological practice to create resilient, regenerative systems.',
  },
  {
    name: 'Vishak Chandramaouli',
    role: 'Co-Founder',
    photo: { src: '/team/vishak.png', alt: 'Vishak Chandramaouli portrait' },
    bio: 'Vishak works at the intersection of regenerative agriculture, cooperative development, and landscape restoration. In Nagaland, he has supported hundreds of tribal farmers in shifting to sustainable farming while forming resilient producer collectives. Guided by systems thinking and a deep respect for traditional wisdom, his work bridges ecology, livelihoods, and long-term community empowerment.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        image={{
          src: '/hero/greenhouse.jpg',
          alt: 'Greenhouse with plants',
          position: 'center',
          priority: true,
        }}
        title="About Us"
        subtitle="The people behind Ingala Earth’s regenerative vision"
        actions={[]}
        minH="56vh"
      />

      <section className={`container ${s.wrap}`} aria-labelledby="team-title">
        <header className={s.header}>
          <h2 id="team-title" className={s.title}>
            Meet the Team
          </h2>
          <p className={s.intro}>
            We believe that transformation starts with learning. Through
            immersive Permaculture Design Courses (PDCs) and custom workshops,
            we bring ecological literacy, systems thinking, and hands-on
            regenerative practices to farmers, students, educators, and
            changemakers. Our trainings blend traditional knowledge, practical
            skills, and participatory tools to inspire action and stewardship.
          </p>
        </header>

        <ul className={s.grid}>
          {team.map((m) => (
            <li key={m.name} className={s.card}>
              <div className={s.avatar}>
                <Image
                  src={m.photo.src}
                  alt={m.photo.alt}
                  width={220}
                  height={220}
                  className={s.img}
                />
              </div>

              <div className={s.body}>
                {/* Aligned title strip */}
                <div className={s.meta}>
                  <h3 className={s.name}>{m.name}</h3>
                  <div className={s.role}>{m.role}</div>
                </div>

                <p className={s.bio}>{m.bio}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
