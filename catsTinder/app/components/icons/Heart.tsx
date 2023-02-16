import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const Heart = (props: any) => (
  <Svg
    width={30}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M26.787 4.147a7.333 7.333 0 0 0-10.374 0L15 5.56l-1.413-1.413A7.335 7.335 0 0 0 3.213 14.52l1.414 1.413L15 26.307l10.373-10.374 1.414-1.413a7.333 7.333 0 0 0 0-10.373Z"
      fill="#6BD88E"
      stroke="#6BD88E"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Heart;
