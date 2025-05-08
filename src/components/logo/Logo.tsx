import styles from './styles.module.css';
// import { LogoProps } from './LogoProps.interface.tsx';
import { TimerIcon } from 'lucide-react';

export function Logo() {
  const divClasses = `${styles.logo}`;
  const aClasses = `${styles.logoLink}`;

  return (
    <div className={ divClasses }>
      <a href="#" className={ aClasses }>
        <TimerIcon />
        <span>Chronos</span>
      </a>
    </div>
  );
}
