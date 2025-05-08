import styles from './styles.module.css';
import { HeadingProps } from './HeadingProps.interface.tsx';

export function Heading(props: HeadingProps) {
  const { children } = props;
  const classes = `${styles.heading} ${styles.cyan}`;
  return <h1 className={classes}>{ children }</h1>;
}
