import { initialState } from '../../InitialState.const.tsx';
import { TaskContext } from './index.tsx';
import { TaskContextProviderProps } from './TaskContextProviderProps.tsx';
import { initialContextValue } from './InitialContextValue.const.tsx';

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  return (
    <TaskContext.Provider value={{ ...initialContextValue }}>{ children }</TaskContext.Provider>
  );
}
