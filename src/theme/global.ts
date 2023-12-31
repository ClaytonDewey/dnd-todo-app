import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';
import check from '../images/icon-check.svg';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
  :root {
    --icon-check: url(${check});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body  {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top center;
    margin: 0;
    font-family: var(--ff-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    background-image: 
      url(${({ theme }: GlobalThemeProps) => theme.backgroundImageSm});
    font-size: 1.8rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  h1 {
    font-size: 3.375rem;
    color: ${({ theme }: GlobalThemeProps) => theme.text};
  }

  .todo {
    background-color: ${({ theme }: GlobalThemeProps) => theme.inputBg};
    color: ${({ theme }: GlobalThemeProps) => theme.text}
  }

  input {
    color: ${({ theme }: GlobalThemeProps) => theme.text}
  }

  @media screen and (min-width: 64em) {
    body {
      background-image: 
        url(${({ theme }: GlobalThemeProps) => theme.backgroundImage});
    }
  }
`;

export default withTheme(globalStyle);
