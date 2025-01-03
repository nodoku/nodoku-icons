
export default function ps_flag_4x3(className: string) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" id="flag-icons-ps" viewBox="0 0 640 480">
  <defs>
    <clipPath id="ps-a">
      <path fillOpacity=".7" d="M-118 0h682.7v512H-118z"/>
    </clipPath>
  </defs>
  <g clipPath="url(#ps-a)" transform="translate(110.6)scale(.9375)">
    <g fillRule="evenodd" strokeWidth="1pt">
      <path fill="#000001" d="M-246 0H778v170.7H-246z"/>
      <path fill="#fff" d="M-246 170.7H778v170.6H-246z"/>
      <path fill="#090" d="M-246 341.3H778V512H-246z"/>
      <path fill="red" d="m-246 512 512-256L-246 0z"/>
    </g>
  </g>
</svg>

    );
}