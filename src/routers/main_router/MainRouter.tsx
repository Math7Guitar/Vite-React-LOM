import { BrowserRouter, Route, Routes } from 'react-router';
import { Home } from '../../pages/home';
import { NotFound } from '../../pages/not_found';
import { AboutPomodoro } from '../../pages/about_pomodoro';
import { ScrollToTop } from '../../utils/scrollToTop.ts';
import { History } from '../../pages/history';
import { Settings } from '../../pages/settings';

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={ <Home /> } />
        <Route path='/history' element={<History />} />
        <Route path='/settings/' element={<Settings />} />
        <Route path='/about-pomodoro' element={ <AboutPomodoro /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}
