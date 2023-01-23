import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M9.75 4.5L6 8.25L2.25 4.5" stroke="#FB5607" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </Svg>
    );

    export default SVGComponent;
