import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
<Path d="M5.87334 1.33331L3.46001 3.75331" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M10.1267 1.33331L12.54 3.75331" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M1.33333 5.23336C1.33333 4.00002 1.99333 3.90002 2.81333 3.90002H13.1867C14.0067 3.90002 14.6667 4.00002 14.6667 5.23336C14.6667 6.66669 14.0067 6.56669 13.1867 6.56669H2.81333C1.99333 6.56669 1.33333 6.66669 1.33333 5.23336Z" stroke="white" stroke-width="1.5"/>
<Path d="M6.50667 9.33331V11.7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<Path d="M9.57333 9.33331V11.7" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<Path d="M2.33333 6.66669L3.27333 12.4267C3.48666 13.72 3.99999 14.6667 5.90666 14.6667H9.92666C12 14.6667 12.3067 13.76 12.5467 12.5067L13.6667 6.66669" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </Svg>
    );

    export default SVGComponent;
