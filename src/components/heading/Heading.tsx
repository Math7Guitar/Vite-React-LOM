import styles from './Heading.module.css';
import { HeadingProps } from './HeadingProps.interface.tsx';

export function Heading(props: HeadingProps) {
  const { children, atr, attr } = props;
  const classes = `${styles.heading} ${styles.cyan}`;
  return <h1 className={classes}>{ attr } { children } { atr }</h1>;
}
