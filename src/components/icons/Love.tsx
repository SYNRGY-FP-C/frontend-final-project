import React from "react";

export default function Love({ ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <mask
        id="mask0_1180_1187"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={24}
        height={24}
      >
        <rect width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1180_1187)">
        <path
          d="M10.65 19.7999L8.925 18.2249C7.15833 16.6082 5.56267 15.0039 4.138 13.4119C2.71267 11.8206 2 10.0666 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.38333 2.6499 9.21667 2.83724 10 3.2119C10.7833 3.58724 11.45 4.0999 12 4.7499C12.55 4.0999 13.2167 3.58724 14 3.2119C14.7833 2.83724 15.6167 2.6499 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 10.0666 21.2917 11.8249 19.875 13.4249C18.4583 15.0249 16.85 16.6332 15.05 18.2499L13.35 19.7999C12.9667 20.1499 12.5167 20.3249 12 20.3249C11.4833 20.3249 11.0333 20.1499 10.65 19.7999Z"
          fill="#454848"
        />
      </g>
    </svg>
  );
}
