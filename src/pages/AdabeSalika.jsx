import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';
import '../styles/salika.css';

// পিডিএফ ফাইল: public/pdf/salika.pdf (নতুন ফাইল দিলে একই নামে বদলে দিন)
const PDF_URL = `${import.meta.env.BASE_URL}pdf/salika.pdf`;
const PDF_VIEW_URL = `${PDF_URL}#view=FitH`;
const PDF_NAME = 'adabe-salika-o-ebadate-semaa.pdf';

// ব্রাউজার পেজের ভেতরে পিডিএফ দেখাতে পারে কি না।
// মোবাইল ব্রাউজার (বিশেষত iOS/Android) সাধারণত ভেতরে পুরো পিডিএফ দেখায় না — সেখানে নতুন ট্যাবে খোলা হবে।
function canEmbedPdf() {
  if (typeof navigator === 'undefined') return false;
  const ua = navigator.userAgent || '';
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(ua) || (navigator.maxTouchPoints > 1 && /Macintosh/.test(ua));
  if (isMobile) return false;
  return navigator.pdfViewerEnabled !== false;
}

function Icon({ name }) {
  const common = { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, className: 'salika-icon' };
  if (name === 'book') {
    return (
      <svg {...common}>
        <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
        <path d="M4 21V5" />
        <path d="M9 8h6" />
      </svg>
    );
  }
  if (name === 'download') {
    return (
      <svg {...common}>
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
    );
  }
  if (name === 'external') {
    return (
      <svg {...common}>
        <path d="M14 4h6v6" />
        <path d="M20 4 10 14" />
        <path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export default function AdabeSalika() {
  usePageTitle('আদাবে সলীকা ও এবাদতে সেম্আ');
  const [reading, setReading] = useState(false);
  const readerRef = useRef(null);

  const openReader = () => {
    if (canEmbedPdf()) {
      setReading(true);
      // রিডার দেখা যাওয়ার পর সেখানে স্ক্রল করে নেওয়া
      requestAnimationFrame(() => readerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    } else {
      window.open(PDF_URL, '_blank', 'noopener');
    }
  };

  return (
    <>
      <section className="page-head">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">হোম</Link></li>
              <li className="breadcrumb-item active" aria-current="page">আদাবে সলীকা ও এবাদতে সেম্আ</li>
            </ol>
          </nav>
          <h1>আদাবে সলীকা ও এবাদতে সেম্আ</h1>
          <p className="lead-line">খাতেমুল বেলায়তে ওজমার তরীকা মূলক পদ্ধতী। সলীকায়ে মূসাবীয়া।</p>
        </div>
      </section>

      <section className="page-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-xl-9">
              <div className="salika-card">
                <div className="salika-cover" aria-hidden="true">
                  <Icon name="book" />
                </div>
                <div className="salika-card-body">
                  <h2 className="salika-card-title">আদাবে সলীকা ও এবাদতে সেম্আ</h2>
                  <p className="salika-card-meta">পিডিএফ বই · ২৮৮ পৃষ্ঠা · প্রায় ৫.২ MB</p>
                  <div className="salika-actions">
                    <button type="button" className="salika-btn salika-btn-primary" onClick={openReader} aria-expanded={reading}>
                      <Icon name="book" />
                      অনলাইনে পড়ুন
                    </button>
                    <a className="salika-btn salika-btn-outline" href={PDF_URL} download={PDF_NAME}>
                      <Icon name="download" />
                      ডাউনলোড করুন
                    </a>
                  </div>
                </div>
              </div>

              {reading && (
                <div className="salika-reader" ref={readerRef}>
                  <div className="salika-reader-bar">
                    <span className="salika-reader-title">আদাবে সলীকা ও এবাদতে সেম্আ</span>
                    <div className="salika-reader-tools">
                      <a className="salika-tool" href={PDF_URL} target="_blank" rel="noopener noreferrer">
                        <Icon name="external" />
                        <span>নতুন ট্যাবে খুলুন</span>
                      </a>
                      <a className="salika-tool" href={PDF_URL} download={PDF_NAME}>
                        <Icon name="download" />
                        <span>ডাউনলোড</span>
                      </a>
                      <button type="button" className="salika-tool" onClick={() => setReading(false)}>
                        <Icon name="close" />
                        <span>বন্ধ করুন</span>
                      </button>
                    </div>
                  </div>
                  <iframe className="salika-frame" src={PDF_VIEW_URL} title="আদাবে সলীকা ও এবাদতে সেম্আ — পিডিএফ" />
                  <p className="salika-reader-fallback">
                    পিডিএফ না দেখা গেলে <a href={PDF_URL} target="_blank" rel="noopener noreferrer">এখানে ক্লিক করে নতুন ট্যাবে পড়ুন</a> অথবা <a href={PDF_URL} download={PDF_NAME}>ডাউনলোড করুন</a>।
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
