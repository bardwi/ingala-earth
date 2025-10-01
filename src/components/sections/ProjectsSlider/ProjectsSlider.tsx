'use client';

import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useRef, useState } from 'react';
import s from './ProjectsSlider.module.scss';

export type ProjectCard = {
  slug: string;
  title: string;
  summary: string;
  image: { src: string; alt?: string; width?: number; height?: number };
};

export default function ProjectsSlider({ items }: { items: ProjectCard[] }) {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      rootNode: (emblaRoot: HTMLElement) => emblaRoot,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, skipSnaps: false },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number) => emblaApi?.scrollTo(index);

  return (
    <section className={s.wrap} aria-labelledby="projects-title">
      <div className="container">
        <h2 id="projects-title" className={s.title}>
          Our Projects
        </h2>

        <div className={s.viewport} ref={emblaRef}>
          <div className={s.container}>
            {items.map((p) => (
              <article className={s.slide} key={p.slug}>
                <div className={s.card}>
                  {/* Left image */}
                  <div className={s.media}>
                    <Image
                      src={p.image.src}
                      alt={p.image.alt ?? p.title}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className={s.img}
                      priority={false}
                    />
                  </div>

                  {/* Right content */}
                  <div className={s.body}>
                    <h3 className={s.cardTitle}>
                      <Link href={`/projects/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p className={s.excerpt}>{p.summary}</p>
                    <Link href={`/projects/${p.slug}`} className={s.readMore}>
                      Read More
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className={s.dots} role="tablist" aria-label="Project slides">
          {items.map((_, i) => (
            <button
              key={i}
              className={`${s.dot} ${i === selected ? s.active : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-selected={i === selected}
              role="tab"
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
