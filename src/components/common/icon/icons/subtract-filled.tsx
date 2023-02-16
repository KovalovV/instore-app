import * as React from "react";
import { SVGProps } from "react";

export const SubtractFilled = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.99597 13H20C20.2652 13 20.5195 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5195 11.1054 20.2652 11 20 11H3.99597C3.73076 11 3.4764 11.1054 3.28886 11.2929C3.10133 11.4804 2.99597 11.7348 2.99597 12C2.99597 12.2652 3.10133 12.5196 3.28886 12.7071C3.4764 12.8946 3.73076 13 3.99597 13Z"
        fill="black"
      />
    </svg>
  );
};
