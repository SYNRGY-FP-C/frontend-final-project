import React from "react";

export default function Email({ ...rest }) {
  return (
    <svg
      width={32}
      height={24}
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M32 2.00001V22C32 23.135 31.135 24 30 24H28V5.84901L16 14.469L4 5.84901V24H2C0.865 24 0 23.135 0 22V2.00001C0 1.43201 0.214 0.932008 0.573 0.578008C0.759973 0.390935 0.98265 0.243365 1.22779 0.14407C1.47294 0.044776 1.73554 -0.00421598 2 7.43431e-06H2.667L16 9.66701L29.333 7.43431e-06H30C30.568 7.43431e-06 31.068 0.214008 31.427 0.578008C31.786 0.932008 32 1.43201 32 2.00001Z"
        fill="#23372B"
      />
    </svg>
  );
}