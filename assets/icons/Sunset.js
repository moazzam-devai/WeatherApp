import * as React from 'react';
import Svg, {
  RadialGradient,
  Stop,
  Path,
  Circle,
  G,
  Ellipse,
} from 'react-native-svg';

function Sunset(props) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="iconify iconify--noto"
      {...props}>
      <RadialGradient
        id="a"
        cx={88.195}
        cy={51.501}
        r={56.382}
        gradientTransform="matrix(0 -1 1.8259 0 -5.84 139.696)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.158} stopColor="#febc45" />
        <Stop offset={0.201} stopColor="#f8ae44" />
        <Stop offset={0.328} stopColor="#e98b40" />
        <Stop offset={0.432} stopColor="#e0763e" />
        <Stop offset={0.5} stopColor="#dd6e3d" />
        <Stop offset={0.76} stopColor="#c05e5d" />
        <Stop offset={0.99} stopColor="#a95e75" />
      </RadialGradient>
      <Path
        d="M116.62 124.26H11.32c-4.15 0-7.52-3.37-7.52-7.52V11.44c0-4.15 3.37-7.52 7.52-7.52h105.3c4.15 0 7.52 3.37 7.52 7.52v105.3c.01 4.15-3.36 7.52-7.52 7.52z"
        fill="url(#a)"
      />
      <RadialGradient
        id="b"
        cx={25.529}
        cy={113.093}
        r={140.58}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.817} stopColor="#dd6e3d" stopOpacity={0} />
        <Stop offset={0.936} stopColor="#b86365" stopOpacity={0.651} />
        <Stop offset={1} stopColor="#a95e75" />
      </RadialGradient>
      <Path
        d="M116.62 124.26H11.32c-4.15 0-7.52-3.37-7.52-7.52V11.44c0-4.15 3.37-7.52 7.52-7.52h105.3c4.15 0 7.52 3.37 7.52 7.52v105.3c.01 4.15-3.36 7.52-7.52 7.52z"
        fill="url(#b)"
      />
      <RadialGradient
        id="c"
        cx={87.87}
        cy={113.71}
        r={112.193}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.411} stopColor="#fd960c" />
        <Stop offset={0.61} stopColor="#f2811b" stopOpacity={0.662} />
        <Stop offset={0.833} stopColor="#ea7028" stopOpacity={0.283} />
        <Stop offset={1} stopColor="#e76a2c" stopOpacity={0} />
      </RadialGradient>
      <Path
        d="M116.62 124.26H11.32c-4.15 0-7.52-3.37-7.52-7.52V11.44c0-4.15 3.37-7.52 7.52-7.52h105.3c4.15 0 7.52 3.37 7.52 7.52v105.3c.01 4.15-3.36 7.52-7.52 7.52z"
        fill="url(#c)"
      />
      <Circle cx={91.87} cy={49.17} r={13.26} fill="#fef7b2" />
      <Path
        fill="#d17757"
        d="M121.3 62.39h-19v21.86H60.19V18.84H28.65v65.41h-4.48V49.13H12.34v42.65h9.5v25.44h97.13v-11.11h2.33z"
      />
      <Path
        fill="#3f737b"
        d="M32.41 25.13h2.37v7.59h-2.37zM37.46 25.13h2.47v7.59h-2.47zM45.27 25.13h-2.42v7.59l2.36-.02z"
      />
      <G fill="#ffe066">
        <Path d="M50.44 25.13l-2.6.01.07 7.58h2.51zM32.41 25.13h2.37v7.59h-2.37zM37.46 25.13h2.47v7.59h-2.47zM45.31 25.13h-2.46v7.59l2.43-.02zM50.44 37.13l-2.6.01.07 7.58h2.51zM32.41 37.13h2.37v7.59h-2.37zM37.46 37.13h2.47v7.59h-2.47zM45.31 37.13h-2.46v7.59l2.43-.02zM32.41 49.13h2.37v7.59h-2.37zM37.46 49.13h2.47v7.59h-2.47zM45.31 49.13h-2.46v7.59l2.43-.02zM53.36 25.13l-.01 7.59h2.56v-7.59z" />
      </G>
      <Path
        fill="#ffb65a"
        d="M105.55 81.2h2.88v3.94h-2.88zM111.3 81.2h2.88v3.94h-2.88z"
      />
      <Path
        fill="#ffc55c"
        d="M105.55 73.83h2.88v3.94h-2.88zM111.3 73.83h2.88v3.94h-2.88z"
      />
      <Path
        fill="#ffd360"
        d="M105.55 66.83h2.88v3.94h-2.88zM111.3 66.83h2.88v3.94h-2.88z"
      />
      <RadialGradient
        id="d"
        cx={56.989}
        cy={23.279}
        r={100.394}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.51} stopColor="#911f4e" />
        <Stop offset={0.934} stopColor="#6d0c36" />
      </RadialGradient>
      <Path
        d="M115 49.4c-.36.73 0 42.7 0 42.7H99.13v-24h-5.11v-7.67h-4.53v-6.51h-8.16v6.84h-5.19v7.17h-5.36v34.95h-5.04v-39h2.35v-7.44h-2.35V41.03h-2.65l-3.61-11.16h-7.11L48.8 41.03h-2.79v15.41h-2.48v7.44h2.48v39h-7.18V67.83H17.19V28.47s-13.35-.09-13.39-.05v88.32c0 4.15 3.37 7.52 7.52 7.52h105.3c4.15 0 7.52-3.37 7.52-7.52V49.4H115z"
        fill="url(#d)"
      />
      <Path fill="#fc7143" d="M5.71 116.21h29.97v2.35H5.71z" />
      <Path fill="#fc7444" d="M5.71 107.86h29.97v2.35H5.71z" />
      <Path fill="#fc7c47" d="M5.71 99.21h29.97v2.35H5.71z" />
      <Path fill="#fd894a" d="M5.71 90.86h29.97v2.35H5.71z" />
      <Path fill="#fda152" d="M5.71 81.21h29.97v2.35H5.71z" />
      <Path fill="#fcb95a" d="M5.71 72.86h29.97v2.35H5.71z" />
      <G fill="#fedc61">
        <Path d="M5.71 63.32h1.76v3.7H5.71zM11.71 63.32h1.76v3.7h-1.76zM5.71 55.89h1.76v3.7H5.71zM11.71 55.89h1.76v3.7h-1.76zM5.71 48.46h1.76v3.7H5.71zM11.71 48.46h1.76v3.7h-1.76zM5.71 41.03h1.76v3.7H5.71zM11.71 41.03h1.76v3.7h-1.76zM5.71 33.59h1.76v3.7H5.71zM11.71 33.59h1.76v3.7h-1.76z" />
      </G>
      <G fill="#fece60">
        <Path d="M49.8 64.51h2.27v4.76H49.8zM55.18 64.51h2.27v4.76h-2.27zM60.36 64.51h2.27v4.76h-2.27z" />
      </G>
      <Path
        fill="#fe7a47"
        d="M49.8 97.7h2.27v4.76H49.8zM55.18 97.7h2.27v4.76h-2.27zM60.36 97.7h2.27v4.76h-2.27z"
      />
      <G fill="#fcb757">
        <Path d="M49.8 73.51h2.27v4.76H49.8zM55.18 73.51h2.27v4.76h-2.27zM60.36 73.51h2.27v4.76h-2.27z" />
      </G>
      <G fill="#fe9c51">
        <Path d="M49.8 82.51h2.27v4.76H49.8zM55.18 82.51h2.27v4.76h-2.27zM60.36 82.51h2.27v4.76h-2.27z" />
      </G>
      <Path
        d="M54.01 53.96h4.66v-6.92s.17-2.6-2.35-2.66c-2.37-.06-2.4 2.6-2.4 2.6s.15 6.98.09 6.98z"
        fill="#fdcb61"
      />
      <Path
        fill="#ffcf62"
        d="M79.85 64.16h2.27v9.69h-2.27zM88.36 64.16h2.27v9.69h-2.27zM84.15 64.16h2.27v9.69h-2.27z"
      />
      <G fill="#feb359">
        <Path d="M76.37 77.58h2.27v3.09h-2.27zM84.19 77.58h2.27v3.09h-2.27zM92.01 77.58h2.27v3.09h-2.27z" />
      </G>
      <G fill="#ff9a4f">
        <Path d="M76.37 87.58h2.27v3.09h-2.27zM84.19 87.58h2.27v3.09h-2.27zM92.01 87.58h2.27v3.09h-2.27z" />
      </G>
      <G fill="#ff844b">
        <Path d="M76.37 97.03h2.27v3.09h-2.27zM84.19 97.03h2.27v3.09h-2.27zM92.01 97.03h2.27v3.09h-2.27z" />
      </G>
      <G fill="#ff7942">
        <Path d="M76.37 107.03h2.27v3.09h-2.27zM84.19 107.03h2.27v3.09h-2.27zM92.01 107.03h2.27v3.09h-2.27z" />
      </G>
      <G fill="#fc7544">
        <Path d="M76.37 116.5h2.27v3.09h-2.27zM84.19 116.5h2.27v3.09h-2.27zM92.01 116.5h2.27v3.09h-2.27z" />
      </G>
      <Path
        fill="#fff6b2"
        d="M23.11 49.173l2-.006.06 18.65-2 .006zM16.14 28.462l2-.003.06 39.39-2 .003zM102.304 63.352l.006-2 11.86.035-.006 2z"
      />
      <Path
        fill="#fff6b2"
        d="M99.13 93.11l-.01-2L114 91.1V48.4l10.16.01-.01 2-8.15-.01v42.7zM94.02 67.1h5.11v2h-5.11zM76.12 59.76h5.19v2h-5.19zM70.77 66.93h5.36v2h-5.36zM67.72 102.88h-2v-40h2.35v-5.44h-2.35V42.03h-2.38l-3.88-12 .03-11.18h2l-.03 10.86.25.74 3.09 9.58h2.92v15.41h2.35v9.44h-2.35z"
      />
      <RadialGradient
        id="e"
        cx={91.818}
        cy={49.529}
        r={22.854}
        gradientTransform="matrix(.0364 -1.3108 1.1462 .0376 31.606 168.045)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.198} stopColor="#fff6b2" />
        <Stop offset={0.767} stopColor="#fff6b2" stopOpacity={0} />
      </RadialGradient>
      <Ellipse
        cx={92.29}
        cy={49.46}
        rx={28.37}
        ry={30.07}
        opacity={0.63}
        fill="url(#e)"
      />
    </Svg>
  );
}

export default Sunset;
