import styles from './styles.module.css';
import { DefaultInputProps } from './DefaultInputProps.interface.tsx';

export function DefaultInput({ type, id, labelText, ...rest }: DefaultInputProps) {
  return (
    <>
      { labelText && <label htmlFor={ id }>{ labelText }</label> }
      <input type={ type } id={ id } className={ styles.input } { ...rest } />
    </>
  );
}
