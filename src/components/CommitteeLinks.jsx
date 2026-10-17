import { NavLink } from 'react-router-dom';
import AppLink from './AppLink.jsx';
import { committeeLinks } from '../data/site.js';

export default function CommitteeLinks() {
  return (
    <div className="side-card">
      <h3>কমিটি সমূহ</h3>
      <ul className="side-links">
        {committeeLinks.map((l) => (
          <li key={l.label}>
            {l.to === '#' ? (
              <AppLink to="#">{l.label}</AppLink>
            ) : (
              <NavLink to={l.to} className={({ isActive }) => (isActive ? 'current' : undefined)}>
                {l.label}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
