import styles from './styles.module.css';
import { ContainerProps } from './Container.module.css';

export function Container(props: ContainerProps) {
  return (
    <div className={ styles.container }>
      <div className={ styles.content }>
        <section>
          { props.children }
        </section>
      </div>
    </div>
  );
}
