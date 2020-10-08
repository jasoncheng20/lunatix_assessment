import RotisSerifStd from '../fonts/Rotis-Serif-Std.otf'
import css from 'styled-components'

const FontFaces = css`
  @font-face {
    font-family: 'Rotis';
    src: url(${RotisSerifStd}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }
`;

export default FontFaces