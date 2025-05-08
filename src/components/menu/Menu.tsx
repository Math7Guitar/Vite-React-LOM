import styles from './styles.module.css';
// import { LogoProps } from './LogoProps.interface.tsx';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { AvailableThemes } from './AvailableThemes.interface.tsx';
import { useState, useEffect } from 'react';

export function Menu() {
  const navClasses = `${styles.menu}`;
  const aClasses = `${styles.menuLink}`;

  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = (localStorage.getItem('theme') as AvailableThemes) || 'dark';
    return storageTheme;
  });

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault(); // Não segue o link

    setTheme(pS => {
      const theme = pS === 'dark' ? 'light' : 'dark';
      return theme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    return () => {};
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={ navClasses }>
      <a href='#' className={ aClasses } aria-label='Home' title='Home'>
        <HouseIcon />
      </a>
      <a href='#' className={ aClasses } aria-label='Histórico' title='Histórico'>
        <HistoryIcon />
      </a>
      <a href='#' className={ aClasses } aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a href='#' className={ aClasses } aria-label='Mudar Tema' title='Mudar Tema' onClick={ handleThemeChange }>
        { nextThemeIcon[theme] }
      </a>
    </nav>
  );
}
