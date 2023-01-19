import React from "react";

export default function Mail({ ...rest }) {
  return (
    <svg
      width={21}
      height={16}
      viewBox="0 0 21 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M2.5 16C1.95 16 1.47933 15.8043 1.088 15.413C0.696 15.021 0.5 14.55 0.5 14V2C0.5 1.45 0.696 0.979333 1.088 0.588C1.47933 0.196 1.95 0 2.5 0H18.5C19.05 0 19.521 0.196 19.913 0.588C20.3043 0.979333 20.5 1.45 20.5 2V14C20.5 14.55 20.3043 15.021 19.913 15.413C19.521 15.8043 19.05 16 18.5 16H2.5ZM10.5 8.825C10.5833 8.825 10.6707 8.81233 10.762 8.787C10.854 8.76233 10.9417 8.725 11.025 8.675L18.1 4.25C18.2333 4.16667 18.3333 4.06267 18.4 3.938C18.4667 3.81267 18.5 3.675 18.5 3.525C18.5 3.19167 18.3583 2.94167 18.075 2.775C17.7917 2.60833 17.5 2.61667 17.2 2.8L10.5 7L3.8 2.8C3.5 2.61667 3.20833 2.61233 2.925 2.787C2.64167 2.96233 2.5 3.20833 2.5 3.525C2.5 3.69167 2.53333 3.83733 2.6 3.962C2.66667 4.08733 2.76667 4.18333 2.9 4.25L9.975 8.675C10.0583 8.725 10.146 8.76233 10.238 8.787C10.3293 8.81233 10.4167 8.825 10.5 8.825Z"
        fill="#FAFAFB"
      />
    </svg>
  );
}