import type * as React from 'react';

declare module 'react-simple-maps' {
  export interface ComposableMapProps extends React.SVGProps<SVGSVGElement> {
    projection?: unknown;
    projectionConfig?: unknown;
    width?: number;
    height?: number;
  }
  export const ComposableMap: React.FC<ComposableMapProps>;

  export interface GeographiesRenderProps {
    geographies: unknown[];
    outline?: unknown;
  }
  export interface GeographiesProps {
    geography: string | object;
    children: (props: GeographiesRenderProps) => React.ReactNode;
  }
  export const Geographies: React.FC<GeographiesProps>;

  export interface GeographyStyle {
    default?: React.CSSProperties & { outline?: string };
    hover?: React.CSSProperties & { outline?: string };
    pressed?: React.CSSProperties & { outline?: string };
  }
  export interface GeographyProps {
    geography: unknown;
    style?: GeographyStyle;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    onMouseEnter?: (e: React.MouseEvent) => void;
    onMouseMove?: (e: React.MouseEvent) => void;
    onMouseLeave?: (e: React.MouseEvent) => void;
    onClick?: () => void;
  }
  export const Geography: React.FC<GeographyProps>;

  export const Graticule: React.FC<{ stroke?: string; strokeWidth?: number }>;
  export const Sphere: React.FC<{
    stroke?: string;
    strokeWidth?: number;
    fill?: string;
  }>;

  export interface ZoomableGroupProps extends React.SVGProps<SVGGElement> {
    center?: [number, number];
    zoom?: number;
    minZoom?: number;
    maxZoom?: number;
    translateExtent?: [[number, number], [number, number]];
    filterZoomEvent?: (e: unknown) => boolean;
    onMoveEnd?: (args: { coordinates: [number, number]; zoom: number }) => void;
  }
  export const ZoomableGroup: React.FC<ZoomableGroupProps>;

  export interface MarkerProps extends React.SVGProps<SVGGElement> {
    coordinates: [number, number];
  }
  export const Marker: React.FC<MarkerProps>;
}
