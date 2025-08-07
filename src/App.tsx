import './styles/theme.css';
import './styles/global.css';

import { MainRouter } from './routers/main_router';
import { MessagesContainer } from './components/messages_container';
import { TaskContextProvider } from './contexts/task_context/TaskContextProvider.tsx';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
}
