import { Link } from 'react-router-dom';

export default function AppLink({ to, onClick, children, ...rest }) {
  if (!to || to === '#') {
    return (
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onClick?.(e);
        }}
        {...rest}
      >
        {children}
      </a>
    );
  }
  return (
    <Link to={to} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
