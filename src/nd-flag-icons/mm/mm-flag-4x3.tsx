import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function mm_flag_4x3(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xlinkHref={"http://www.w3.org/1999/xlink"} id="flag-icons-mm" viewBox="0 0 640 480">
  <path fill="#fecb00" d="M0 0h640v480H0z"/>
  <path fill="#34b233" d="M0 160h640v320H0z"/>
  <path fill="#ea2839" d="M0 320h640v160H0z"/>
  <g transform="translate(320 256.9)scale(176.87999)">
    <path id="mm-a" fill="#fff" d="m0-1 .3 1h-.6z"/>
    <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(-144)"/>
    <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(-72)"/>
    <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(72)"/>
    <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(144)"/>
  </g>
</svg>

    );
}
