'use client';

import Image from 'next/image';
import s from './Mission.module.scss';
import { LuRecycle, LuLeaf, LuUsers } from 'react-icons/lu';

type Item = { icon?: React.ReactNode; title: string; desc?: string };

type Props = {
  title?: string;
  blurb: string;
  items: Item[];
  image: { src: string; alt?: string; width?: number; height?: number };
};

export default function Mission({
  title = 'Our Mission',
  blurb,
  items,
  image,
}: Props) {
  const fallbackIcon = (label: string) => {
    const t = label.toLowerCase();
    if (t.includes('regenerative')) return <LuRecycle aria-hidden />;
    if (t.includes('ecological')) return <LuLeaf aria-hidden />;
    if (t.includes('community')) return <LuUsers aria-hidden />;
    return <LuLeaf aria-hidden />;
  };
  return (
    <section className={s.wrap} id="mission" aria-labelledby="mission-title">
      <div className="container container-lg">
        <div className={s.grid}>
          {/* Left */}
          <div>
            <h2 id="mission-title" className={s.title}>
              {title}
            </h2>
            <p className={s.blurb}>{blurb}</p>

            <ul className={s.list}>
              {items.map((it, i) => (
                <li key={i} className={s.item}>
                  <span className={s.icon}>
                    {it.icon ?? fallbackIcon(it.title)}
                  </span>
                  <span className={s.text}>{it.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div className={s.media}>
            <Image
              src={image.src}
              alt={image.alt ?? ''}
              width={image.width ?? 880}
              height={image.height ?? 560}
              className={s.img}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
