import './styles/theme.css';
import './styles/global.css';

import { Home } from './pages/home';
// import { NotFound } from './pages/not_found';
// import { AboutPomodoro } from './pages/about_pomodoro';
import { TextContextProvider } from './contexts/task_context';

import { useState } from 'react';

import { initialState } from './InitialState.const.tsx';

export function App() {
  const [state, setState] = useState(initialState);

  return (<TaskContextProvider><Home /></TaskContextProvider>);
}
