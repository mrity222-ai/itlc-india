
import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="currentColor">
        <path
          d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z"
          opacity=".2"
        />
        <path d="M128 16a112 112 0 1 0 112 112A112.13 112.13 0 0 0 128 16Zm0 208a96 96 0 1 1 96-96a96.11 96.11 0 0 1-96 96Zm0-128a32 32 0 1 0 32 32a32 32 0 0 0-32-32Z" />
      </g>
    </svg>
  );
}

export function InnovAIText() {
  return (
    <div className="flex items-center">
      <Logo className="h-6 w-6 text-primary" />
    </div>
  );
}
