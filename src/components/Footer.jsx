import { Link } from 'react-router-dom';
import { SITE_NAME } from '../data/site.js';
import '../styles/footer.css';

const links = [
  { to: '/about', label: 'দরবার পরিচিতি' },
  { to: '/urs-neyaz', label: 'ওরশ ও নেওয়াজ সমূহ' },
  { to: '/committees/monoyon-porishad', label: 'মনোনয়ন পরিষদ' },
  { to: '/#committees', label: 'কমিটি সমূহ' },
  { to: '/#dayra', label: 'দায়রা শরীফ সমূহ' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <p className="footer-brand">{SITE_NAME}</p>
            <p className="footer-sub">রূহী আধ্যাত্মিক দরবার</p>
          </div>

          <div className="col-md-6 col-lg-4">
            <h2 className="footer-heading">ঠিকানা</h2>
            <address className="footer-address">
              আস্তানায় পাক দরবারে মূসাবীয়া<br />
              ফরহাদাবাদ, পোঃ পাক দরবারে মূসাবীয়া<br />
              উপজেলা: হাটহাজারী, জিলা: চট্টগ্রাম<br />
              বাংলাদেশ।
            </address>
          </div>

          <div className="col-md-6 col-lg-3">
            <h2 className="footer-heading">দ্রুত লিংক</h2>
            <ul className="footer-links">
              {links.map((l) => (
                <li key={l.label}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr />
        <div className="footer-bottom">
          <p className="footer-copy">© {SITE_NAME}। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="footer-copy">
            Developed by{' '}
            <a
              href="https://www.millennium-solution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dev-link"
            >
              Millennium Solution
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
} 