import { MainTemplate } from '../../templates/main_template';
import { Container } from '../../components/container';
import { CountDown } from '../../components/count_down';
import { MainForm } from '../../components/main_form';
import { HomeProps } from './HomeProps.tsx';

export function Home() {
  const { state, setState } = props;

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
