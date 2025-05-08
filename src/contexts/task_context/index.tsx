import { createContext } from 'react';
import { TaskContextProps } from './TaskContextProps.interface.tsx';
import { initialContextValue } from './InitialContextValue.const.tsx';

export const TaskContext = createContext<TaskContextProps>(initialContextValue);
