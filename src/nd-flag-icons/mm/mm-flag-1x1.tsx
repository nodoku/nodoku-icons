import {JSX} from "react"
import {IconBaseProps} from "react-icons/lib";

export function mm_flag_1x1(props: IconBaseProps, className: string): JSX.Element {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" xlinkHref={"http://www.w3.org/1999/xlink"} id="flag-icons-mm" viewBox="0 0 512 512">
  <path fill="#fecb00" d="M0 0h512v512H0z"/>
  <path fill="#34b233" d="M0 170.7h512V512H0z"/>
  <path fill="#ea2839" d="M0 341.3h512V512H0z"/>
  <path id="mm-a" fill="#fff" strokeWidth="188.7" d="M312.6 274H199.4L256 85.3Z"/>
  <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(-144 256 274)"/>
  <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(-72 256 274)"/>
  <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(72 256 274)"/>
  <use xlinkHref={"#mm-a"} width="100%" height="100%" transform="rotate(144 256 274)"/>
</svg>

    );
}