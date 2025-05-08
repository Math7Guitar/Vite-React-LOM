import { TaskStateModel } from '../../models/TaskStateModel.tsx';

export function CountDownProps() {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}
