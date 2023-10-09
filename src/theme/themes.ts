import darkImg from '../images/bg-desktop-dark.jpg';
import lightImg from '../images/bg-desktop-light.jpg';

import darkImgSm from '../images/bg-mobile-dark.jpg';
import lightImgSm from '../images/bg-mobile-light.jpg';

export interface ThemeProps {
  backgroundImageSm: string;
  backgroundImage: string;
  background: string;
  inputBg: string;
  text: string;
}

export const darkTheme: ThemeProps = {
  backgroundImageSm: darkImgSm,
  backgroundImage: darkImg,
  background: 'var(--dark-5)',
  inputBg: 'var(--dark-4)',
  text: 'var(--light-1)',
};

export const lightTheme: ThemeProps = {
  backgroundImageSm: lightImgSm,
  backgroundImage: lightImg,
  background: 'var(--light-1)',
  inputBg: 'var(--light-2)',
  text: 'var(--dark-6)',
};
