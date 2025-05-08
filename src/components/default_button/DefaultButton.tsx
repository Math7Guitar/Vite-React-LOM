import styles from './styles.module.css';
import { DefaultButtonProps } from './DefaultButtonProps.interface.tsx';

export function DefaultButton({ icon, color = 'green', ...props }: DefaultButtonProps) {
  const buttonClasses = `${ styles.button } ${ styles[color] }`;
  return (
    <>
      <button className={ buttonClasses } { ...props }>{icon}</button>
    </>
  );
}
