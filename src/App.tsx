import { ThemeProvider } from 'styled-components';
import TogglerButton from './components/TogglerButton';
import GlobalStyle from './theme/global';
import ThemeContext from './context/ThemeContext';
import { lightTheme, darkTheme } from './theme/themes';
import useThemeMode from './hooks/useThemeMode';
import { AddTodo, Footer, Header, TodoList } from './components';
import './sass/main.scss';

const App = () => {
  const { theme, themeToggler } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <div className='container'>
          <Header>
            <TogglerButton themeToggler={themeToggler} />
          </Header>
          <AddTodo />
          <TodoList />
          <Footer />
        </div>
      </ThemeProvider>
    </ThemeContext>
  );
};

export default App;
