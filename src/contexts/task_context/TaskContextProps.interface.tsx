import { TaskStateModel } from '../../models/TaskStateModel.tsx';

export type TaskContextProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}
