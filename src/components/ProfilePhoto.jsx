import React, { useState } from 'react';

export default function ProfilePhoto({
  photo = '',
  name = 'Iqbal Dwi Fathonah',
  placeholderLabel = '[Foto Profil / Avatar]',
  style = {},
}) {
  const [hasError, setHasError] = useState(false);
  const isValidPhoto = Boolean(photo && typeof photo === 'string' && photo.trim() !== '' && !hasError);

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '4 / 5',
        maxHeight: '420px',     /* batas tinggi agar tidak meluber di layar pendek */
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderRadius: '4px',    /* lebih kecil dari kartu pembungkus (radius-md = 6px) */
        overflow: 'hidden',
        position: 'relative',
        background: 'var(--bg-surface-elevated)',
        ...style,
      }}
    >
      {isValidPhoto ? (
        <img
          src={photo}
          alt={`Foto ${name}`}
          loading="eager"
          width={300}
          height={375}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',  /* agar wajah tidak terpotong */
            display: 'block',
          }}
        />
      ) : (
        /* Placeholder tanpa ikon orang */
        <div
          style={{
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: 'var(--accent)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.04em',
            }}
          >
            {hasError ? '[Gagal memuat gambar]' : placeholderLabel}
          </span>
          <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            {hasError ? 'Periksa path foto di portfolioData.js' : 'Area foto profil (rasio 4:5)'}
          </span>
        </div>
      )}
    </div>
  );
}
