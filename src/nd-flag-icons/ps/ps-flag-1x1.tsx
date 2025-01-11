import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function ps_flag_1x1(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" id="flag-icons-ps" viewBox="0 0 512 512">
  <defs>
    <clipPath id="ps-a">
      <path fillOpacity=".7" d="M237.1 0h493.5v493.5H237.1z"/>
    </clipPath>
  </defs>
  <g clipPath="url(#ps-a)" transform="translate(-246)scale(1.0375)">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#000001" d="M0 0h987v164.5H0z"/>
      <path fill="#fff" d="M0 164.5h987V329H0z"/>
      <path fill="#090" d="M0 329h987v164.5H0z"/>
      <path fill="red" d="m0 493.5 493.5-246.8L0 0z"/>
    </g>
  </g>
</svg>

    );
}