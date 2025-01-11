import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function gw_flag_1x1(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xlinkHref={"http://www.w3.org/1999/xlink"} id="flag-icons-gw" viewBox="0 0 512 512">
  <path fill="#ce1126" d="M0 0h160v512H0z"/>
  <path fill="#fcd116" d="M160 0h352v256H160z"/>
  <path fill="#009e49" d="M160 256h352v256H160z"/>
  <g transform="translate(-46.2 72.8)scale(.7886)">
    <g id="gw-b" transform="matrix(80 0 0 80 160 240)">
      <path id="gw-a" fill="#000001" d="M0-1v1h.5" transform="rotate(18 0 -1)"/>
      <use xlinkHref={"#gw-a"} width="100%" height="100%" transform="scale(-1 1)"/>
    </g>
    <use xlinkHref={"#gw-b"} width="100%" height="100%" transform="rotate(72 160 240)"/>
    <use xlinkHref={"#gw-b"} width="100%" height="100%" transform="rotate(144 160 240)"/>
    <use xlinkHref={"#gw-b"} width="100%" height="100%" transform="rotate(-144 160 240)"/>
    <use xlinkHref={"#gw-b"} width="100%" height="100%" transform="rotate(-72 160 240)"/>
  </g>
</svg>

    );
}