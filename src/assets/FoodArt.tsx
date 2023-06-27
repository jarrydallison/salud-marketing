export const FoodArt = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="462"
    height="424"
    viewBox="0 0 462 424"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g filter="url(#filter0_d_5_14)">
      <rect
        x="0.504883"
        width="423.387"
        height="386"
        rx="20"
        fill="url(#pattern0)"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5_14"
        x="0.504883"
        y="0"
        width="461.387"
        height="424"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="30" dy="30" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5_14"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5_14"
          result="shape"
        />
      </filter>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image0_5_14"
          transform="matrix(0.000958511 0 0 0.000967453 0.00816861 0.00716127)"
        />
      </pattern>
      <image
        id="image0_5_14"
        width="1024"
        height="1024"
      />
    </defs>
  </svg>
);