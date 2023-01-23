import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Circle cx="16" cy="16" r="16" fill="#F1F1F1"/>
<Path d="M21.5 16H10.5" stroke="#161718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M15 11.5L10.5 16L15 20.5" stroke="#161718" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
    );

    export default SVGComponent;
