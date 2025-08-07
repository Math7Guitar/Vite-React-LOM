import { TaskStateModel } from '../../models/TaskStateModel.tsx';
import { TaskActionModel } from './taskActions.tsx';

export type TaskContextProps = {
  state: TaskStateModel;
  dispatch: React.Dispatch<TaskActionModel>;
}
