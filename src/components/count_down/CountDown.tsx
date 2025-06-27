import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/task_context/useTaskContext'

export function CountDown() {
  const taskContext = useTaskContext();

  return (
    <div className={styles.container}>00:00</div>
  );
}
