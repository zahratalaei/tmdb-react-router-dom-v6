import { createGlobalStyle } from 'styled-components';

import Montserrat from './Montserrat-Regular.ttf';
import Roboto from './Roboto-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('ttf');
    }
    @font-face {
        font-family: 'Montserrat';
        src:url(${Montserrat}) format('ttf');
    }
`;