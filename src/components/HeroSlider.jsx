import { useCallback, useEffect, useRef, useState } from 'react';
import slides from '../data/slides.js';

const INTERVAL = 5500;

const Chevron = ({ dir }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={dir === 'prev' ? 'M15 4 7 12l8 8' : 'm9 4 8 8-8 8'} />
  </svg>
);

export default function HeroSlider() {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(next, INTERVAL);
    return () => clearInterval(id);
  }, [paused, next, count, index]);

  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
  };

  return (
    <section className="hero" aria-roledescription="carousel" aria-label="ছবির স্লাইডার">
      <div
        className="hero-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {slides.map((n, i) => (
          <div
            key={n}
            className={`hero-slide${i === index ? ' is-active' : ''}`}
            role="group"
            aria-roledescription="slide"
            aria-hidden={i !== index}
          >
            <picture>
              <source media="(min-width: 768px)" srcSet={`/images/b${n}.png`} />
              <img
                src={`/images/b${n}.jpg`}
                alt={`আস্তানায়ে পাক দরবারে মূসাবীয়া — ছবি ${n}`}
                loading={i === 0 ? 'eager' : 'lazy'}
                draggable="false"
              />
            </picture>
          </div>
        ))}

        {count > 1 && (
          <>
            <button type="button" className="hero-arrow hero-arrow-prev" onClick={prev} aria-label="আগের ছবি">
              <Chevron dir="prev" />
            </button>
            <button type="button" className="hero-arrow hero-arrow-next" onClick={next} aria-label="পরের ছবি">
              <Chevron dir="next" />
            </button>
            <div className="hero-dots">
              {slides.map((n, i) => (
                <button
                  key={n}
                  type="button"
                  className={i === index ? 'is-active' : ''}
                  aria-label={`স্লাইড ${n}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
