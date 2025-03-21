import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Wind(props) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M.5 3.4c1.92 0 1.92.95 3.83.95s1.92-.95 3.83-.95 1.92.95 3.83.95 1.92-.95 3.83-.95 1.92.95 3.84.95 1.92-.95 3.84-.95M.5 9.15c1.92 0 1.92.95 3.83.95s1.92-.95 3.83-.95 1.92.95 3.83.95 1.92-.95 3.83-.95 1.92.95 3.84.95 1.92-.95 3.84-.95M.5 14.9c1.92 0 1.92.95 3.83.95s1.92-.95 3.83-.95 1.92.95 3.83.95 1.92-.95 3.83-.95 1.92.95 3.84.95 1.92-.95 3.84-.95M.5 20.65c1.92 0 1.92 1 3.83 1s1.92-1 3.83-1 1.92 1 3.83 1 1.92-1 3.83-1 1.92 1 3.84 1 1.92-1 3.84-1"
        fill="none"
        stroke="#020202"
        strokeMiterlimit={10}
        strokeWidth="1.92px"
      />
    </Svg>
  );
}

export default Wind;
