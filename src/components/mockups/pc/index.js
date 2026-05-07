import React from 'react';

function PcMockup({ className, width = 600, height = 400 }) {
  return (
    <svg
      viewBox="0 0 1600 900"
      className={className}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tela externa */}
      <rect
        x="208"
        y="77"
        width="1183"
        height="650"
        rx="25"
        fill="#111"
        stroke="#c2c9ce"
        strokeWidth="6"
      />

      {/* Tela interna */}
      <rect x="240" y="120" width="1120" height="570" rx="12" fill="#000" />

      {/* Reflexo da tela */}
      <polygon
        points="240,120 700,120 500,350 240,350"
        fill="rgba(255,255,255,0.08)"
      />

      {/* Webcam */}
      <circle cx="800" cy="100" r="6" fill="#2a2a2a" />

      {/* Base do notebook */}
      <rect x="150" y="712" width="1300" height="50" rx="10" fill="#ACADB1" />

      {/* Trackpad */}
      <rect x="700" y="708" width="200" height="40" rx="10" fill="#60626b" />
    </svg>
  );
}

export default PcMockup;
