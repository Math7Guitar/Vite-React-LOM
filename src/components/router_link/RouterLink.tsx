import { Link } from 'react-router';
import { RouterLinkProps } from './RouterLinkProps.interface.tsx';

export function RouterLink({ children, href, ...props }: RouterLinkProps) {
  return (<Link to={href} {...props}>{children}</Link>);
}
