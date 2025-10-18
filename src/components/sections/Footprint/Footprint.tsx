'use client';
import { useRef, useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import s from './Footprint.module.scss';
const WIDTH = 1080;
const HEIGHT = 560;

type MoveEndArgs = { coordinates: [number, number]; zoom: number };

function getSourceEvent(e: unknown): Event | undefined {
  const maybe = e as { sourceEvent?: Event };
  return maybe?.sourceEvent ?? (e as Event | undefined);
}

function isTouchStart(ev: Event): ev is TouchEvent {
  return ev.type === 'touchstart';
}

// World countries (TopoJSON)
const WORLD_URL =
  'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// India states (GeoJSON; has "st_nm" for the state name)
const INDIA_STATES_URL = '/data/india_state_geo.json';

// Countries we want to highlight fully
const HIGHLIGHT_COUNTRIES = new Set([
  'South Africa',
  'Guatemala',
  'Ghana',
  'Uzbekistan',
]);

const COLOR = {
  worldFill: '#e9e6e6',
  worldStroke: '#9CA3AF',
  countryFill: '#85AD72',
  countryHover: '#518A36',

  indiaFill: '#F09D2E',
  indiaHover: '#D8871E',
  indiaBorder: '#CBBFA8',
};

type Tip = {
  text: string;
  x: number;
  y: number;
  bg: string;
} | null;

const HIGHLIGHT_INDIA_STATES = new Set([
  'nagaland',
  'uttarakhand',
  'maharashtra',
  'andhra pradesh',
  'karnataka',
  'tamil nadu',
  'meghalaya',
]);

const normalizeName = (s?: unknown) =>
  String(s ?? '')
    .normalize('NFD') // split accents
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/[^\w\s]/g, '') // drop punctuation
    .trim()
    .toLowerCase();

const ALIASES: Record<string, string> = {
  uttaranchal: 'uttarakhand',
  uttarakhand: 'uttarakhand',
  'uttara khand': 'uttarakhand',
  uttarakhanda: 'uttarakhand',

  // extra resilience for common variations
  andhrapradesh: 'andhra pradesh',
  tamilnadu: 'tamil nadu',
};
const DISPLAY_LABEL: Record<string, string> = {
  uttarakhand: 'Uttarakhand',
  nagaland: 'Nagaland',
};
type WorldGeo = {
  rsmKey: string;
  properties: { name?: string } & Record<string, unknown>;
};

type IndiaGeo = {
  rsmKey: string;
  properties: { st_nm?: string } & Record<string, unknown>;
};

export default function Footprint() {
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([0, 0]);
  const wrapRef = useRef<HTMLDivElement>(null);

  const [tip, setTip] = useState<Tip>(null);
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const zoomIn = () => setZoom((z) => Math.min(z * 1.33, 8));
  const zoomOut = () => setZoom((z) => Math.max(z / 1.33, 0.8));

  const reset = () => {
    setZoom(1);
    setCenter([0, 0]);
  };

  const setTipFromEvent = (
    e: React.MouseEvent<SVGPathElement>,
    text: string,
    bg: string
  ) => {
    const rect = wrapRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left + 12;
    const y = e.clientY - rect.top + 12;
    setTip({
      text,
      x: clamp(x, 8, rect.width - 8),
      y: clamp(y, 8, rect.height - 8),
      bg,
    });
  };

  return (
    <section className={s.wrap} aria-labelledby="footprint-title">
      <div className="container">
        <h2 id="footprint-title" className={s.title}>
          Our Footprint
        </h2>

        <div
          className={s.mapWrap}
          ref={wrapRef}
          onMouseLeave={() => setTip(null)}
        >
          <div className={s.controls} aria-label="Map zoom controls">
            <button className={s.ctrlBtn} onClick={zoomIn} aria-label="Zoom in">
              +
            </button>
            <button
              className={s.ctrlBtn}
              onClick={zoomOut}
              aria-label="Zoom out"
            >
              −
            </button>
            <button className={s.ctrlBtn} onClick={reset} aria-label="Reset">
              ⤾
            </button>
          </div>
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 215 }}
            width={WIDTH}
            height={HEIGHT}
            className={s.map}
          >
            {/* <Sphere stroke="#d8d2c6" strokeWidth={0.75} fill="transparent" />*/}
            {/*  <Graticule stroke="#ece6da" strokeWidth={0.5} />*/}

            <ZoomableGroup
              center={center}
              zoom={zoom}
              minZoom={0.7}
              maxZoom={2}
              // keep the map within (slightly larger than) the viewport
              translateExtent={[
                [-WIDTH * 0.15, -HEIGHT * 0.15],
                [WIDTH * 1.15, HEIGHT * 1.15],
              ]}
              // allow drag/pan, block wheel/dblclick/pinch zoom
              filterZoomEvent={(e: unknown) => {
                const ev = getSourceEvent(e);
                if (!ev) return false;

                if (ev.type === 'wheel' || ev.type === 'dblclick') return false;
                if (isTouchStart(ev) && ev.touches && ev.touches.length > 1)
                  return false;

                // allow drag start
                return (
                  ev.type === 'mousedown' ||
                  ev.type === 'pointerdown' ||
                  ev.type === 'touchstart'
                );
              }}
              onMoveEnd={({ coordinates, zoom }: MoveEndArgs) => {
                setCenter(coordinates);
                setZoom(zoom);
              }}
            >
              {/* WORLD */}
              <Geographies geography={WORLD_URL}>
                {({ geographies }: { geographies: WorldGeo[] }) =>
                  geographies.map((geo: WorldGeo) => {
                    const name = geo.properties.name ?? '';
                    const active = HIGHLIGHT_COUNTRIES.has(name);

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={active ? COLOR.countryFill : COLOR.worldFill}
                        stroke={COLOR.worldStroke}
                        strokeWidth={0.5}
                        style={{
                          default: {
                            outline: 'none',
                            cursor: active ? 'pointer' : 'default',
                          },
                          hover: {
                            fill: active ? COLOR.countryHover : COLOR.worldFill,
                            outline: 'none',
                          },
                          pressed: { outline: 'none' },
                        }}
                        onMouseEnter={
                          active
                            ? (e: React.MouseEvent<SVGPathElement>) =>
                                setTipFromEvent(e, name, COLOR.countryHover)
                            : () => setTip(null)
                        }
                        onMouseMove={
                          active
                            ? (e: React.MouseEvent<SVGPathElement>) =>
                                setTipFromEvent(e, name, COLOR.countryHover)
                            : undefined
                        }
                        onMouseLeave={() => setTip(null)}
                      />
                    );
                  })
                }
              </Geographies>

              {/* INDIA STATES */}
              <Geographies geography={INDIA_STATES_URL}>
                {({ geographies }: { geographies: IndiaGeo[] }) =>
                  geographies.map((geo: IndiaGeo) => {
                    const p = geo.properties as Record<string, unknown>;
                    const raw = (p.st_nm ??
                      p.ST_NM ??
                      p.NAME_1 ??
                      p.name ??
                      p.STATE ??
                      p.STATE_NAME) as string | undefined;

                    const pretty = raw ?? '';
                    const norm = normalizeName(raw);
                    const canonical = ALIASES[norm] ?? norm;
                    const active = HIGHLIGHT_INDIA_STATES.has(canonical);

                    const labelBase = DISPLAY_LABEL[canonical] ?? pretty;
                    const label = `${labelBase}, India`;

                    return (
                      <Geography
                        key={geo.rsmKey + '-border'}
                        geography={geo}
                        fill={active ? COLOR.indiaFill : 'none'}
                        stroke={COLOR.indiaBorder}
                        strokeWidth={0.2}
                        style={{
                          default: active
                            ? { outline: 'none', cursor: 'pointer' }
                            : { outline: 'none', pointerEvents: 'none' },
                          hover: active
                            ? { outline: 'none', fill: COLOR.indiaHover }
                            : undefined,
                          pressed: { outline: 'none' },
                        }}
                        onMouseEnter={
                          active
                            ? (e: React.MouseEvent<SVGPathElement>) =>
                                setTipFromEvent(e, label, COLOR.indiaHover)
                            : undefined
                        }
                        onMouseMove={
                          active
                            ? (e: React.MouseEvent<SVGPathElement>) =>
                                setTipFromEvent(e, label, COLOR.indiaHover)
                            : undefined
                        }
                        onMouseLeave={active ? () => setTip(null) : undefined}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          {tip && (
            <div
              className={s.tooltip}
              style={
                {
                  left: tip.x,
                  top: tip.y,
                  '--tipBg': tip.bg,
                } as React.CSSProperties & { ['--tipBg']?: string }
              }
              role="status"
              aria-live="polite"
            >
              {tip.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
