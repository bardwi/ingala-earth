import type React from 'react';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { LuSprout, LuTreePine } from 'react-icons/lu';
import { FaTractor } from 'react-icons/fa';

type Name = 'menu' | 'close' | 'chevron-down' | 'seedling' | 'tree' | 'farmer';

export default function Icon({
  name,
  size = 20,
  color = 'currentColor',
  className,
  title,
}: {
  name: Name;
  size?: number;
  color?: string;
  className?: string;
  title?: string;
}) {
  const icons: Record<Name, React.ReactNode> = {
    menu: (
      <FiMenu size={size} color={color} className={className} title={title} />
    ),
    close: (
      <FiX size={size} color={color} className={className} title={title} />
    ),
    'chevron-down': (
      <FiChevronDown
        size={size}
        color={color}
        className={className}
        title={title}
      />
    ),
    seedling: (
      <LuSprout size={size} color={color} className={className} title={title} />
    ),
    tree: (
      <LuTreePine
        size={size}
        color={color}
        className={className}
        title={title}
      />
    ),
    farmer: (
      <FaTractor
        size={size}
        color={color}
        className={className}
        title={title}
      />
    ),
  };

  return icons[name] ?? null;
}
