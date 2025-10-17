'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import s from './Breadcrumbs.module.scss';

const LABELS: Record<string, string> = {
  home: 'Home',
  projects: 'Projects',
  services: 'Services',
};
const PROJECT_LABELS: Record<string, string> = {
  'permaculture-regenerative-transition':
    'Permaculture & Regenerative Transition',
  'agroecology-landscape-rehabilitation':
    'Agroecology & Landscape Rehabilitation',
  'education-capacity-nature-based-solutions': 'Education & Capacity…',
  'agroecology-research': 'Agroecology Research',
};
const SERVICE_LABELS: Record<string, string> = {
  agroecology: 'Agroecology',
  'landscape-restoration': 'Landscape Restoration',
  'farmer-groups': 'Farmer Groups',
  'bio-labs': 'Agroecology Bio Labs',
  'learning-development': 'Learning & Development',
};

const titleize = (slug: string) =>
  decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());

type Props = {
  currentLabel?: string;
  variant?: 'default' | 'hero';
  homeLabel?: string;
  className?: string;
  hideOnHome?: boolean;
};

export default function Breadcrumbs({
  currentLabel,
  variant = 'default',
  homeLabel = 'Home',
  className,
  hideOnHome = true,
}: Props) {
  const pathname = usePathname();
  const parts = pathname.split('/').filter(Boolean);

  if (hideOnHome && parts.length === 0) return null;

  const crumbs = [{ href: '/', label: homeLabel }].concat(
    parts.map((seg, i) => {
      const href = '/' + parts.slice(0, i + 1).join('/');
      const parent = parts[i - 1];
      const label =
        (i === parts.length - 1 && currentLabel) ||
        (parent === 'projects' && PROJECT_LABELS[seg]) ||
        (parent === 'services' && SERVICE_LABELS[seg]) ||
        LABELS[seg] ||
        titleize(seg);
      return { href, label };
    })
  );

  const cls = [s.crumbs, variant === 'hero' ? s.hero : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <nav aria-label="Breadcrumb" className={cls}>
      <ol>
        {crumbs.map((c, i) => {
          const isLast = i === crumbs.length - 1;
          return (
            <li key={c.href} aria-current={isLast ? 'page' : undefined}>
              {isLast ? (
                <span>{c.label}</span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
