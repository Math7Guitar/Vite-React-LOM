import styles from './styles.module.css';
// import { LogoProps } from './LogoProps.interface.tsx';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from 'lucide-react';
import { AvailableThemes } from './AvailableThemes.interface.tsx';
import { useState, useEffect } from 'react';
import { RouterLink } from '../router_link';

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
  }, [theme]);

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  return (
    <nav className={ navClasses }>
      <RouterLink to='/home/' className={ aClasses } aria-label='Home' title='Home'>
        <HouseIcon />
      </RouterLink>
      <RouterLink to='/history/' className={ aClasses } aria-label='Histórico' title='Histórico'>
        <HistoryIcon />
      </RouterLink>
      <RouterLink to='/settings/' className={ aClasses } aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </RouterLink>
      <RouterLink to='#' className={ aClasses } aria-label='Mudar Tema' title='Mudar Tema' onClick={ handleThemeChange }>
        { nextThemeIcon[theme] }
      </RouterLink>
    </nav>
  );
}
