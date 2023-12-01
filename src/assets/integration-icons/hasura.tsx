import * as React from "react";
import { SVGProps } from "react";

const SvgHasura = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={48}
    height={48}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.726.28c2.743 3.17 3.595 11.76 2.179 16.065-.47 1.431-.603 2.944-.332 4.413.277 1.459.553 3.22.553 4.446C47.126 37.791 36.678 48 23.784 48 10.897 48 .443 37.796.443 25.204c0-1.226.276-2.987.553-4.446.276-1.469.15-2.982-.321-4.413C-.741 12.045.111 3.456 2.855.28a.841.841 0 0 1 1.327.102l3.38 5.18a2.651 2.651 0 0 0 3.473.552A23.607 23.607 0 0 1 23.79 2.408c4.707 0 9.088 1.361 12.755 3.706 1.134.724 2.638.486 3.474-.551l3.38-5.18c.298-.46.967-.52 1.327-.103ZM5.714 25.258c0 9.734 8.103 17.654 18.07 17.654 9.968 0 18.076-7.92 18.082-17.648 0-.314-.011-.633-.028-.946-.36-6.628-4.486-12.3-10.32-15.001a18.182 18.182 0 0 0-7.728-1.702 18.24 18.24 0 0 0-7.727 1.697c-5.836 2.7-9.962 8.367-10.321 15-.017.314-.028.627-.028.946Zm21.284-1.026 4.619 7.822a.482.482 0 0 1 0 .502.512.512 0 0 1-.448.254h-3.756a.525.525 0 0 1-.448-.254l-2.467-4.176-2.75 4.192a.518.518 0 0 1-.436.232h-3.811a.522.522 0 0 1-.46-.264.5.5 0 0 1 .023-.519l5.083-7.573-3.789-6.218a.492.492 0 0 1-.005-.508.52.52 0 0 1 .453-.26h3.784a.52.52 0 0 1 .448.25l3.96 6.52Z"
      fill="#1EB4D4"
    />
  </svg>
);

export default SvgHasura;
