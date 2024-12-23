interface LogoProps {
  isWhite?: boolean;
  className?: string;
}

export const Logo = (props: LogoProps) => {
  const { isWhite = false, className } = props;
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 202 305.04"
      className={className}
      style={{ width: "100%", height: "auto" }}
    >
      <polygon
        fill="none"
        stroke={isWhite ? "#424254" : "#F5F9F9"}
        strokeMiterlimit="10"
        strokeWidth="5"
        points="200.5 93.54 200.5 303.54 1.5 303.54 1.5 93.54 101.1 2.04 200.5 93.54"
      />
      <g>
        <path
          fill={isWhite ? "#424254" : "#F5F9F9"}
          d="M37.79,99.87c7.8-3.24,15.3-4.86,22.5-4.86,6,0,12.18,2.22,18.54,6.66,3.48,2.4,7.38,7.08,11.7,14.04,2.88,4.8,6.54,13.5,10.98,26.1l21.96,62.28c5.04,13.92,10.17,24.99,15.39,33.21,5.22,8.22,9.99,14.4,14.31,18.54,4.32,4.14,8.82,7.05,13.5,8.73,4.68,1.68,8.55,2.52,11.61,2.52s5.79-.24,8.19-.72l.18,1.8c-5.76,1.92-11.4,2.88-16.92,2.88s-11.04-1.41-16.56-4.23c-5.52-2.82-10.68-6.75-15.48-11.79-10.32-10.44-19.08-26.34-26.28-47.7l-7.02-20.52h-49.32l-12.42,32.04c-.6,1.44-.9,2.88-.9,4.32s.63,2.97,1.89,4.59c1.26,1.62,3.21,2.43,5.85,2.43h1.44v1.8H14.75v-1.8h1.62c2.88,0,5.7-.87,8.46-2.61,2.76-1.74,5.04-4.35,6.84-7.83l44.64-106.92c-6.48-9.24-14.52-13.86-24.12-13.86-4.32,0-8.94.9-13.86,2.7l-.54-1.8ZM57.05,181.41h45.54l-14.22-41.94c-2.76-8.04-5.28-14.34-7.56-18.9l-23.76,60.84Z"
        />
        <circle
          fill={isWhite ? "#424254" : "#F5F9F9"}
          cx="129.26"
          cy="182.54"
          r="6"
        />
      </g>
    </svg>
  );
};
