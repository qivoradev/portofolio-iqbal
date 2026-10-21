import React, { useEffect, useRef, useState } from 'react';

/**
 * HeroBackdrop — Hanya grid halus di dalam panel Hero.
 * Menggunakan mask-image agar memudar dan tidak ada di belakang kolom teks kiri.
 * Garis tren, chart batang, dan elemen latar lainnya telah dihapus sesuai instruksi.
 */

const GRID_SPACING = 40;
const H_LINES = 18;
const V_LINES = 32;

export default function HeroBackdrop() {
  const wrapperRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onVis = () => setPaused(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const animState = paused ? 'paused' : 'running';

  return (
    <div
      ref={wrapperRef}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: '32px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1200 640"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: 'block' }}
      >
        <defs>
          {/*
            Mask linear: 0% di sisi kiri (area teks),
            mulai muncul halus di sisi kanan (area foto)
          */}
          <linearGradient id="hb-grid-fade" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="white" stopOpacity="0" />
            <stop offset="48%"  stopColor="white" stopOpacity="0" />
            <stop offset="75%"  stopColor="white" stopOpacity="0.4" />
            <stop offset="100%" stopColor="white" stopOpacity="0.85" />
          </linearGradient>
          <mask id="hb-grid-mask">
            <rect width="1200" height="640" fill="url(#hb-grid-fade)" />
          </mask>
        </defs>

        <g mask="url(#hb-grid-mask)">
          <g
            className="hb-grid-group"
            style={{ animationPlayState: animState }}
          >
            {Array.from({ length: H_LINES }, (_, i) => (
              <line
                key={`h${i}`}
                x1="0"
                y1={i * GRID_SPACING - GRID_SPACING}
                x2="1200"
                y2={i * GRID_SPACING - GRID_SPACING}
                className="hb-grid-line"
              />
            ))}
            {Array.from({ length: V_LINES }, (_, i) => (
              <line
                key={`v${i}`}
                x1={i * GRID_SPACING - GRID_SPACING}
                y1="-40"
                x2={i * GRID_SPACING - GRID_SPACING}
                y2="720"
                className="hb-grid-line"
              />
            ))}
          </g>
        </g>
      </svg>
    </div>
  );
}
