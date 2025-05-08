import { TaskContext } from './index.tsx';
import { useContext } from 'react';

export function useTaskContext() {
  return useContext(TaskContext);
}
