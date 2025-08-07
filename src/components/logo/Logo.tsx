import styles from './styles.module.css';
// import { LogoProps } from './LogoProps.interface.tsx';
import { TimerIcon } from 'lucide-react';
import { RouterLink } from '../router_link';

export function Logo() {
  const divClasses = `${styles.logo}`;
  const aClasses = `${styles.logoLink}`;

  return (
    <div className={ divClasses }>
      <RouterLink href="/home/" className={ aClasses }>
        <TimerIcon />
        <span>Chronos</span>
      </RouterLink>
    </div>
  );
}
