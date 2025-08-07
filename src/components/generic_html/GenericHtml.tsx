import styles from './styles.module.css';
import { GenericHtmlProps } from './GenericHtmlProps.tsx';

export function GenericHtml({ children }: GenericHtmlProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
