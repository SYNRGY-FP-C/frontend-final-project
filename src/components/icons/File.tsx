import React from "react";

export default function File({ ...rest }) {
  return (
    <svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <circle cx={20} cy={20} r={20} fill="white" />
      <mask
        id="mask0_1294_1876"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x={8}
        y={8}
        width={24}
        height={24}
      >
        <rect x={8} y={8} width={24} height={24} fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_1294_1876)">
        <path
          d="M20 23.9998C19.7167 23.9998 19.4793 23.9038 19.288 23.7118C19.096 23.5205 19 23.2831 19 22.9998V15.8498L17.125 17.7248C16.925 17.9248 16.6917 18.0248 16.425 18.0248C16.1583 18.0248 15.9167 17.9165 15.7 17.6998C15.5 17.4998 15.4043 17.2621 15.413 16.9868C15.421 16.7121 15.5167 16.4831 15.7 16.2998L19.3 12.6998C19.4 12.5998 19.5083 12.5288 19.625 12.4868C19.7417 12.4455 19.8667 12.4248 20 12.4248C20.1333 12.4248 20.2583 12.4455 20.375 12.4868C20.4917 12.5288 20.6 12.5998 20.7 12.6998L24.3 16.2998C24.5 16.4998 24.5957 16.7371 24.587 17.0118C24.579 17.2871 24.4833 17.5165 24.3 17.6998C24.1 17.8998 23.8627 18.0038 23.588 18.0118C23.3127 18.0205 23.075 17.9248 22.875 17.7248L21 15.8498V22.9998C21 23.2831 20.9043 23.5205 20.713 23.7118C20.521 23.9038 20.2833 23.9998 20 23.9998ZM14 27.9998C13.45 27.9998 12.9793 27.8041 12.588 27.4128C12.196 27.0208 12 26.5498 12 25.9998V23.9998C12 23.7165 12.0957 23.4788 12.287 23.2868C12.479 23.0955 12.7167 22.9998 13 22.9998C13.2833 22.9998 13.521 23.0955 13.713 23.2868C13.9043 23.4788 14 23.7165 14 23.9998V25.9998H26V23.9998C26 23.7165 26.096 23.4788 26.288 23.2868C26.4793 23.0955 26.7167 22.9998 27 22.9998C27.2833 22.9998 27.5207 23.0955 27.712 23.2868C27.904 23.4788 28 23.7165 28 23.9998V25.9998C28 26.5498 27.8043 27.0208 27.413 27.4128C27.021 27.8041 26.55 27.9998 26 27.9998H14Z"
          fill="#808080"
        />
      </g>
    </svg>
  );
}