export default function PageIcon({ additionalCSS }) {
  return (
    <svg
      id="Komponente_2_1"
      data-name="Komponente 2 – 1"
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className={additionalCSS + " cursor-pointer"}
    >
      <g
        id="Fill"
        fill="none"
        stroke="#0e284e"
        strokeMiterlimit="10"
        strokeWidth="0.5"
      >
        <rect width="50" height="50" rx="25" stroke="none" />
        <rect
          x="0.25"
          y="0.25"
          width="49.5"
          height="49.5"
          rx="24.75"
          fill="none"
        />
      </g>
      <path
        id="Bounds"
        d="M0,0H24V24H0Z"
        transform="translate(37 13) rotate(90)"
        fill="none"
      />
      <path
        id="Icon"
        d="M10.59,0,6,4.58,1.41,0,0,1.41l6,6,6-6Z"
        transform="translate(28.41 19) rotate(90)"
        fill="#002851"
      />
    </svg>
  );
}
