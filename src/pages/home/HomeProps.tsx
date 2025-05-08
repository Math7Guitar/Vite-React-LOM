import { TaskStateModel } from '../../models/TaskStateModel.tsx';

export type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
