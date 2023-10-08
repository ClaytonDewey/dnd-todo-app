import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './themes';

type GlobalThemeProps = {
  theme: ThemeProps;
};

const globalStyle = createGlobalStyle`
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
      url(${({ theme }: GlobalThemeProps) => theme.backgroundImage});
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
`;

export default withTheme(globalStyle);
