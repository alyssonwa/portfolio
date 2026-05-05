import React from 'react';

function CelMockup({ className, size = 500 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1674 1674"
      className={className}
      width={size}
      height={size}
      fill="none"
    >
      {/* Corpo externo */}
      <rect
        x="487"
        y="108"
        width="700"
        height="1458"
        rx="90"
        fill="#0f172a"
        stroke="#24292d"
        strokeWidth="6"
      />

      {/* Tela interna */}
      <rect
        x="520"
        y="145"
        width="634"
        height="1384"
        rx="58"
        fill="#0f0e0e"
        stroke="#141616"
        strokeWidth="12"
      />

      {/* Dynamic Island */}
      <rect x="748" y="172" width="178" height="36" rx="18" fill="#111" />

      {/* Câmera */}
      <circle cx="894" cy="190" r="7" fill="#2C5C9E" />

      {/* Botões laterais esquerdos */}
      <rect x="478" y="305" width="8" height="52" rx="4" fill="#3D3041" />
      <rect x="478" y="408" width="8" height="90" rx="4" fill="#3D3041" />
      <rect x="478" y="525" width="8" height="90" rx="4" fill="#3D3041" />

      {/* Botão lateral direito */}
      <rect x="1188" y="480" width="8" height="78" rx="4" fill="#3D3041" />
    </svg>
  );
}
export default CelMockup;
