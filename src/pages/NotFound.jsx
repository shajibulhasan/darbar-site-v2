import { Link } from 'react-router-dom';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('পেজ পাওয়া যায়নি');
  return (
    <section className="notfound">
      <div className="container">
        <h1>পেজটি পাওয়া যায়নি</h1>
        <p>আপনি যে পেজটি খুঁজছেন তা নেই বা সরিয়ে নেওয়া হয়েছে।</p>
        <Link to="/" className="btn btn-brass">হোমে ফিরে যান</Link>
      </div>
    </section>
  );
}
