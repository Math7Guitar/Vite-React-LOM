import { Container } from '../../components/container';
import { Logo } from '../../components/logo';
import { Menu } from '../../components/menu';
import { Footer } from '../../components/footer';
import { MainTemplateProps } from './MainTemplateProps.interface';

export function MainTemplate ({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      { children }

      <Container>
        <Footer />
      </Container>
    </>
  );
}
