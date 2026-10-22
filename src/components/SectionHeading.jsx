import React from 'react';

/**
 * SectionHeading — Komponen Bersama Judul Section (Rata Kiri)
 * Instan, solid, tanpa jeda/flicker yang memblokir tampilan saat dimuat ulang
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading section-heading--visible mb-6 md:mb-8">
      <h2 className="section-heading-title mb-6 md:mb-8">{title}</h2>
      {subtitle && (
        <p className="section-heading-subtitle">{subtitle}</p>
      )}
    </div>
  );
}
