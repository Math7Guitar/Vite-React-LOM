import { MainTemplate } from '../../templates/main_template';
import { Container } from '../../components/container';
import { CountDown } from '../../components/count_down';
import { MainForm } from '../../components/main_form';
import { useEffect } from 'react';

export function Home() {

  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);

  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}
