import { Link } from 'react-router-dom';
import AppLink from '../components/AppLink.jsx';
import HeroSlider from '../components/HeroSlider.jsx';
import usePageTitle from '../components/usePageTitle.js';
import { SITE_NAME, committees, dayras } from '../data/site.js';

const quickLinks = [
  { label: 'দরবার পরিচিতি', to: '/about' },
  { label: 'আদাবে সলীকা ও এবাদতে সেম্আ', to: '#' },
  { label: 'নুজুলী কিতাব সমূহ', to: '#' },
  { label: 'ওরশ ও নেওয়াজ সমূহ', to: '/urs-neyaz' },
];

export default function Home() {
  usePageTitle('');
  return (
    <>
      <HeroSlider />

      <section className="hero-intro">
        <div className="container">
          <div className="row align-items-center g-3">
            <div className="col-lg-8">
              <p className="hero-kicker">রূহী আধ্যাত্মিক দরবার</p>
              <h1>{SITE_NAME}</h1>
            </div>
            <div className="col-lg-4">
              <div className="hero-actions justify-content-lg-end">
                <AppLink to="/about" className="btn btn-brass">দরবার পরিচিতি</AppLink>
                <Link to="/#committees" className="btn btn-ghost">কমিটি সমূহ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-links" aria-label="দ্রুত লিংক">
        <div className="container">
          <div className="row g-0">
            {quickLinks.map((q) => (
              <div className="col-6 col-lg-3" key={q.label}>
                <AppLink to={q.to}>
                  <span>{q.label}</span>
                  <i aria-hidden="true">←</i>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="structure-band">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <p className="band-kicker">প্রশাসনিক কাঠামো</p>
              <h2>দরবারের হেদায়তী কার্যধারার শীর্ষে মনোনয়ন পরিষদ</h2>
              <p>
                সলীকা ও বাই-ল অনুযায়ী মনোনয়ন পরিষদই দরবারে মূসাবীয়ার কেবিনেট বা নীতি নির্ধারণী ফোরাম।
                বেলায়তী রহস্য এই পরিষদের সভাপতি।
              </p>
            </div>
            <div className="col-lg-4 text-lg-end">
              <Link to="/committees/monoyon-porishad" className="btn btn-brass">বিস্তারিত পড়ুন</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" id="committees">
        <div className="container">
          <h2 className="section-title">কমিটি সমূহ</h2>
          <div className="row g-4">
            {committees.map((c, i) => (
              <div className={`col-md-6 ${i < 3 ? 'col-lg-4' : 'col-lg-6'}`} key={c.title}>
                <AppLink className="info-card" to={c.to}>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="card-meta">{c.meta}</span>
                </AppLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section home-section-alt" id="dayra">
        <div className="container">
          <h2 className="section-title">দায়রা শরীফ সমূহ</h2>
          <div className="row g-3">
            {dayras.map((d) => (
              <div className="col-md-6 col-lg-4" key={d.name}>
                <AppLink className="dayra-tile" to="#">
                  <span className="dayra-name">{d.name}</span>
                  <span className={`dayra-tag${d.temporary ? ' dayra-tag-temp' : ''}`}>{d.type}</span>
                </AppLink>
              </div>
            ))}
          </div>
          <p className="dayra-note">প্রতিটি শাখাই দায়রায়ে মূসাবীয়া।</p>
        </div>
      </section>
    </>
  );
}