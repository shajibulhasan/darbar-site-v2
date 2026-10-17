import CommitteeLayout from './CommitteeLayout.jsx';
import FactsCard from './FactsCard.jsx';
import { bn } from '../data/site.js';

// এন্তেজামেয়া ও এরশাদুত্ব তবলীগ — সদস্য সংখ্যার ধাপসহ কমিটি পেজ
export default function CountCommittee({ title, crumb, lead, intro, para, steps, facts }) {
  const max = steps[steps.length - 1];
  return (
    <CommitteeLayout title={title} crumb={crumb} lead={lead} aside={<FactsCard rows={facts} />}>
      <p className="intro">{intro}</p>
      <p>{para}</p>

      <h2>সদস্য সংখ্যার ধাপ</h2>
      <ol className="count-steps" aria-label="সদস্য সংখ্যার ধাপ">
        {steps.map((v, i) => (
          <li key={v}>
            <span className="count-label">{i === 0 ? 'সর্বনিম্ন' : ''}</span>
            <span className="count-bar" style={{ '--w': `${Math.round((v / max) * 100)}%` }}>
              <b>{bn(v)} জন{i === steps.length - 1 ? 'ের অধিক' : ''}</b>
            </span>
          </li>
        ))}
      </ol>
    </CommitteeLayout>
  );
}
