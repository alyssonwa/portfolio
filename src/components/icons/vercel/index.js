import React from 'react';

function LogoVercel({ className, size = 24 }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={size}
      height={size}
      fill="#000000"
    >
      <title>Vercel</title>
      <path d="m12 1.608 12 20.784H0Z" />
    </svg>
  );
}
export default LogoVercel;
