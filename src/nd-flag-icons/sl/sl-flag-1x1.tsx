import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function sl_flag_1x1(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" id="flag-icons-sl" viewBox="0 0 512 512">
  <defs>
    <clipPath id="sl-a">
      <rect width="384" height="512" rx="4.6" ry="7.6"/>
    </clipPath>
  </defs>
  <g fillRule="evenodd" clipPath="url(#sl-a)" transform="scale(1.33333 1)">
    <path fill="#0000cd" d="M0 341.7h512V512H0z"/>
    <path fill="#fff" d="M0 171.4h512v170.3H0z"/>
    <path fill="#00cd00" d="M0 0h512v171.4H0z"/>
  </g>
</svg>

    );
}