import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Cross = (props: any) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24 8 8 24M8 8l16 16"
      stroke="#E16359"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Cross;
