import React, { useEffect, useRef, useState } from 'react';

/**
 * SectionHeading — Komponen Bersama Judul Section (Rata Kiri)
 *
 * Props:
 * - title: string (teks judul utama)
 * - subtitle: string (teks subjudul di bawah judul)
 *
 * Perilaku:
 * - Garis aksen di samping judul telah dihapus
 * - Garis tipis 1px var(--border) selebar container berada di atas blok judul (jarak 48px ke judul)
 * - Judul dan subjudul tetap rata kiri
 * - Judul lalu subjudul muncul fade + naik 12px, stagger 80ms, sekali saja
 * - Menghormati prefers-reduced-motion
 */
export default function SectionHeading({ title, subtitle }) {
  const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headingRef}
      className={`section-heading ${isVisible ? 'section-heading--visible' : ''}`}
    >
      <h2 className="section-heading-title">{title}</h2>
      {subtitle && (
        <p className="section-heading-subtitle">{subtitle}</p>
      )}
    </div>
  );
}
