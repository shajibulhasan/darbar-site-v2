import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppLink from './AppLink.jsx';
import navigation from '../data/navigation.js';
import { SITE_NAME } from '../data/site.js';
import '../styles/brand.css';

const isDesktop = () => window.matchMedia('(min-width: 992px)').matches;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // মোবাইলে হ্যামবার্গার মেনু
  const [openIdx, setOpenIdx] = useState(null); // কোন ড্রপডাউন খোলা
  const rootRef = useRef(null);
  const { pathname } = useLocation();

  const closeAll = () => {
    setOpenIdx(null);
    setMenuOpen(false);
  };

  useEffect(closeAll, [pathname]);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpenIdx(null);
    };
    const onKey = (e) => e.key === 'Escape' && closeAll();
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="site-header" ref={rootRef}>
      <nav className="navbar navbar-expand-lg" aria-label="প্রধান মেনু">
        <div className="container">
          <Link className="navbar-brand brand-with-logo" to="/">
            <img className="brand-logo" src="/images/logo.jpeg" alt="" width="44" height="44" />
            <span>{SITE_NAME}</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            aria-controls="mainNav"
            aria-expanded={menuOpen}
            aria-label="মেনু খুলুন"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`} id="mainNav">
            <ul className="navbar-nav ms-lg-auto">
              {navigation.map((item, i) =>
                item.children ? (
                  <li
                    key={item.label}
                    className="nav-item dropdown"
                    onMouseEnter={() => isDesktop() && setOpenIdx(i)}
                    onMouseLeave={() => isDesktop() && setOpenIdx(null)}
                  >
                    <button
                      type="button"
                      className={`nav-link dropdown-toggle${openIdx === i ? ' show' : ''}`}
                      aria-expanded={openIdx === i}
                      onClick={() => setOpenIdx(isDesktop() ? i : openIdx === i ? null : i)}
                    >
                      {item.label}
                    </button>
                    <ul
                      className={`dropdown-menu${item.alignEnd ? ' dropdown-menu-lg-end' : ''}${openIdx === i ? ' show' : ''}`}
                      data-bs-popper="static"
                    >
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <AppLink className="dropdown-item" to={c.to} onClick={closeAll}>
                            {c.label}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.label} className="nav-item">
                    <AppLink className="nav-link" to={item.to} onClick={closeAll}>
                      {item.label}
                    </AppLink>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}