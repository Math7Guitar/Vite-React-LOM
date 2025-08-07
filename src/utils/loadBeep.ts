import gBeep from '../assets/audio/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio.play().catch(err => console.log('ERR:', err));
  }
}
