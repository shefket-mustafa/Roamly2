type Props = {
  size?: number;
  className?: string;
};

export default function RoamlyIcon({
  size = 44,
  className = "",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="roamly-pin-shape">
          <path d="M128 18C81 18 44 54 44 100c0 28 13 49 30 70l47 59c4 5 10 5 14 0l47-59c17-21 30-42 30-70 0-46-37-82-84-82Z" />
        </clipPath>

        <mask id="roamly-pin-hole">
          <rect width="256" height="256" fill="white" />
          <circle cx="128" cy="84" r="27" fill="black" />
        </mask>
      </defs>

      <g
        clipPath="url(#roamly-pin-shape)"
        mask="url(#roamly-pin-hole)"
      >
        {/* base */}
        <rect width="256" height="256" fill="#00908D" />

        {/* dark top */}
        <path
          d="M128 18C81 18 44 54 44 100c0 20 7 38 19 54 17-14 36-23 60-29 27-7 62-11 88-33-4-42-38-74-83-74Z"
          fill="#005E5A"
        />

        {/* bright curved stripe */}
        <path
          d="M40 178c24-28 52-43 89-50 34-7 65-11 87-31v35c-19 14-43 20-69 25-35 7-64 18-87 50L40 178Z"
          fill="#16C9C6"
        />

        {/* darker lower-right stripe */}
        <path
          d="M150 171c19-14 42-24 67-29v23c-16 8-29 18-39 31l-18 25c-8-18-16-36-10-50Z"
          fill="#006F6E"
        />
      </g>
    </svg>
  );
}