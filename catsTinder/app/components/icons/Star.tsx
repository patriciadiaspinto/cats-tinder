import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Star = (props: any, fill: string) => (
  <Svg
    width={17}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m9.112 1.66 2.06 4.173 4.607.674-3.333 3.246.787 4.587-4.12-2.167-4.12 2.167.786-4.587-3.333-3.246 4.606-.674 2.06-4.173Z"
        fill="#EC537E"
        stroke="#EC537E"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Star;
