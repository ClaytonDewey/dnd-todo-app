import { Button } from '.';
import { IconSun, IconMoon } from '../icons';

interface ThemeTogglerProps {
  themeToggler: () => void;
}

const TogglerButton = ({ themeToggler }: ThemeTogglerProps) => {
  return (
    <div className='theme__container'>
      <Button onClick={themeToggler}>
        {window.localStorage.getItem('theme') !== 'light' ? (
          <>
            <IconSun />
            <span className='sr-only'>Set light mode</span>
          </>
        ) : (
          <>
            <IconMoon />
            <span className='sr-only'>Set dark mode</span>
          </>
        )}
      </Button>
    </div>
  );
};

export default TogglerButton;
