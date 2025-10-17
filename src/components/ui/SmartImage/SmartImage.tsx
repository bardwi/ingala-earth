'use client';

import Image, { ImageProps } from 'next/image';
import { useMemo, useState } from 'react';
import s from './SmartImage.module.scss';

export type SmartImageProps = ImageProps & {
  wrapperClassName?: string;
  imgClassName?: string;
  skeleton?: boolean;
};

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64') // SSR (Node)
    : window.btoa(str); // Client

function shimmerSVG(w: number, h: number) {
  return `
    <svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <defs>
        <linearGradient id="g">
          <stop stop-color="#F3EFE7" offset="20%"/>
          <stop stop-color="#EAE3D2" offset="50%"/>
          <stop stop-color="#F3EFE7" offset="80%"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="#F3EFE7"/>
      <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
      <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.4s" repeatCount="indefinite"/>
    </svg>`;
}

export default function SmartImage({
  wrapperClassName,
  imgClassName,
  className,
  width,
  height,
  skeleton = true,
  alt,
  placeholder,
  blurDataURL: blurFromProps,
  priority,
  loading,
  ...rest
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  // Next only accepts 'blur' | 'empty'
  type PlaceholderT = NonNullable<ImageProps['placeholder']>;
  const effectivePlaceholder = (placeholder ?? 'blur') as PlaceholderT;

  const isBlur = effectivePlaceholder === 'blur';

  // Generate a blur even during SSR
  const generatedBlur = useMemo(() => {
    if (!isBlur) return undefined;

    // Fallback dims for fill images
    const w = typeof width === 'number' ? width : 1200;
    const h = typeof height === 'number' ? height : 700;

    try {
      return `data:image/svg+xml;base64,${toBase64(shimmerSVG(w, h))}`;
    } catch {
      return undefined;
    }
  }, [isBlur, width, height]);

  const blurToUse = isBlur ? blurFromProps ?? generatedBlur : undefined;

  return (
    <span
      className={`${s.wrap} ${loaded ? s.loaded : ''} ${
        wrapperClassName ?? ''
      }`}
    >
      <Image
        {...rest}
        alt={alt ?? ''}
        width={width}
        height={height}
        className={`${s.img} ${className ?? ''} ${imgClassName ?? ''}`}
        placeholder={effectivePlaceholder} // 'blur' | 'empty'
        blurDataURL={blurToUse} // present on SSR if placeholder='blur'
        priority={priority}
        loading={priority ? 'eager' : loading ?? 'lazy'}
        onLoad={() => setLoaded(true)}
      />
      {skeleton && <span className={s.skeleton} aria-hidden />}
    </span>
  );
}
