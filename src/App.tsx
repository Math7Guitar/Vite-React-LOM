import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/home';
// import { NotFound } from './pages/not_found';
// import { AboutPomodoro } from './pages/about_pomodoro';
import { TextContextProvider } from './contexts/task_context';

export function App() {
  return (<TaskContextProvider><Home /></TaskContextProvider>);
}
