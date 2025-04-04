import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function is_flag_1x1(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" id="flag-icons-is" viewBox="0 0 512 512">
  <defs>
    <clipPath id="is-a">
      <path fillOpacity=".7" d="M85.4 0h486v486h-486z"/>
    </clipPath>
  </defs>
  <g fillRule="evenodd" strokeWidth="0" clipPath="url(#is-a)" transform="translate(-90)scale(1.0535)">
    <path fill="#003897" d="M0 0h675v486H0z"/>
    <path fill="#fff" d="M0 189h189V0h108v189h378v108H297v189H189V297H0z"/>
    <path fill="#d72828" d="M0 216h216V0h54v216h405v54H270v216h-54V270H0z"/>
  </g>
</svg>

    );
}