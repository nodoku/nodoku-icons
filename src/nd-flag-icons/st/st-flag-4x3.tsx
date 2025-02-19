import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function st_flag_4x3(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xlinkHref={"http://www.w3.org/1999/xlink"} id="flag-icons-st" viewBox="0 0 640 480">
  <path fill="#12ad2b" d="M0 0h640v480H0z"/>
  <path fill="#ffce00" d="M0 137.1h640V343H0z"/>
  <path fill="#d21034" d="M0 0v480l240-240"/>
  <g id="st-c" transform="translate(351.6 240)scale(.34286)">
    <g id="st-b">
      <path id="st-a" fill="#000001" d="M0-200V0h100" transform="rotate(18 0 -200)"/>
      <use xlinkHref={"#st-a"} width="100%" height="100%" transform="scale(-1 1)"/>
    </g>
    <use xlinkHref={"#st-b"} width="100%" height="100%" transform="rotate(72)"/>
    <use xlinkHref={"#st-b"} width="100%" height="100%" transform="rotate(144)"/>
    <use xlinkHref={"#st-b"} width="100%" height="100%" transform="rotate(-144)"/>
    <use xlinkHref={"#st-b"} width="100%" height="100%" transform="rotate(-72)"/>
  </g>
  <use xlinkHref={"#st-c"} width="100%" height="100%" x="700" transform="translate(-523.2)"/>
</svg>

    );
}
