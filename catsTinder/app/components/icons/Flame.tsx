import * as React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';

const Flame = (props: any) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="#fff" d="M.5 0h16v16H.5z" />
    <Path
      d="M6.078 6.66c-.02 0-.034 0-.048-.015-.47-.622-.588-1.695-.616-2.103-.007-.08-.097-.121-.166-.083-1.453.813-2.802 2.743-2.802 4.605 0 3.207 2.224 5.895 6.054 5.895 3.588 0 6.054-2.768 6.054-5.892 0-4.086-2.916-6.791-5.514-8.016-.07-.034-.146.025-.139.097.34 2.204-.124 4.595-2.826 5.518l.003-.007Z"
      fill="url(#a)"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(12.1085 0 0 13.9177 8.5 14.959)">
        <Stop stopColor="#EC537E" />
        <Stop offset={1} stopColor="#FD267D" />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default Flame;
