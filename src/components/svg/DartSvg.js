function DartSvg(props) {
  return (
    <svg width={props.size} height={props.size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1:7)">
    <rect width="100" height="100" fill="#3399FF"/>
    <g filter="url(#filter0_d_1:7)">
    <path d="M48.913 100L0 0H25L48.913 51.2821L79.3478 0H100L48.913 100Z" fill="#f2dcc5"/>
    <path d="M48.913 100L0 0H25L48.913 51.2821L79.3478 0H100L48.913 100Z" stroke="#8776EB"/>
    </g>
    </g>
    <defs>
    <filter id="filter0_d_1:7" x="-4.80117" y="-0.5" width="109.618" height="109.618" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1:7"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1:7" result="shape"/>
    </filter>
    <clipPath id="clip0_1:7">
    <rect width="100" height="100" fill="white"/>
    </clipPath>
    </defs>
    </svg>

  );
}

export default DartSvg;
